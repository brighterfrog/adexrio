'use strict';

import { API, graphqlOperation, GraphQLResult } from '../../amplify-bootstrapper/bootstrap-amplify';

import { CreateApiPoolAttributesInput, CreatePoolInput, CreatePoolMutation, CreatePoolPlayerInput, CreateUserWalletInput, CreateUserWalletMutation, PlayerStatus, Pool, PoolCategory, poolStatus, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchUserWallets } from '../../graphql/queries';
import { createPool, createUserWallet } from '../../graphql/mutations';

import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';
import { BlockChainService } from '../legacy_contract_v1_helpers/backend/blockchain/blockchain-service';
import { DecodedGameEntity } from '../legacy_contract_v1_helpers/backend/models/all-models';

export class CreatePoolService implements IEventLogProcessor {

    userWalletService: UserWalletService;
    apiPoolAttributesService: ApiPoolAttributesService;
    poolPlayerService: PoolPlayerService;
    poolService: PoolService;
    legacyBlockchainService: BlockChainService;

    constructor(
        userWalletService: UserWalletService,
        apiPoolAttributesService: ApiPoolAttributesService,
        poolPlayerService: PoolPlayerService,
        poolService: PoolService,
        legacyBlockchainService: BlockChainService
    ) {
        this.userWalletService = userWalletService;
        this.apiPoolAttributesService = apiPoolAttributesService;
        this.poolPlayerService = poolPlayerService;
        this.poolService = poolService;
        this.legacyBlockchainService = legacyBlockchainService;
    }

    async handleEventRecord(eventRecord): Promise<any> {
        console.log('handleEventRecord', eventRecord)

        /* UserWallet */        
        //TODO: Add creation on user sign in to UI if it doesnt exist
        const poolCreatorUserWallet = await getOrCreateUserWallet(eventRecord.dynamodb.NewImage.decodedPlayer, this.userWalletService);
    
        /* Pool */
        //TODO: Contract Update. New contract will have EVENTS contain poolJsonData: { poolType: {} } to check for pool type among other fields   
        /* default to ONLY create lottery pools to accomodate v1 contract */
        if (!isContractVersion2()) {
            const handleLegacyContractCreateEventResult = await this.handleLegacyContractEvent(eventRecord, poolCreatorUserWallet);
        }
        else {
            /* ApiPoolAttributes */
            /* create */
            //TODO: UI update. apiPoolAttributes created in the UI prior to game creation    
            //const poolId = crypto.randomUUID();              
            //const apiPoolAttributes  = this.apiPoolAttributesService.createApiPoolAttributes({                               
            // id: ?
            // apiKey: string;
            // lockFundsDatetime: string;
            // executeWinnerDatetime: string;
            // apiUrlForResults: string;
            // verifiedUrlSchema: boolean;
            // poolCreatorPercentFeeToWithold: number;
            // poolApiDefaultSchema: string;
            // poolApiCustomSchema?: string | null;            
            // apiPoolAttributesPoolId?: string | null; 
            //} as CreateApiPoolAttributesInput)

            const handleContractCreateEventResult = await this.handleContractEventV2(eventRecord, poolCreatorUserWallet);
        }

        async function getOrCreateUserWallet(decodedPlayer, userWalletService) {
            let poolCreatorUserWallet: UserWallet;

            let searchForExistingCreatorUserWallet = await userWalletService.searchUserWalletByWalletAddress({ wallet: { eq: decodedPlayer } } as SearchableUserWalletFilterInput);
            if (doNotHaveExistingWallet(searchForExistingCreatorUserWallet)) {
                poolCreatorUserWallet = await userWalletService.createUserWallet({
                    wallet: decodedPlayer.S,
                    totalWinnings: 0,
                    totalPools: 1,
                    totalCompletedPools: 0,
                    totalPoolsWon: 0
                } as CreateUserWalletInput);
            }
            else {
                poolCreatorUserWallet = searchForExistingCreatorUserWallet.items[0];
            }
            return searchForExistingCreatorUserWallet;
        }

        function isContractVersion2() {
            return eventRecord.dynamodb.NewImage?.poolJsonData ? JSON.parse(eventRecord.dynamodb.NewImage?.poolJsonData) : null;
        }

        function doNotHaveExistingWallet(searchForExistingCreatorUserWallet) {
            return searchForExistingCreatorUserWallet.items.length === 0;
        }
        // id: ID!
        // poolId: Int!
        // poolTitle: String!
        // poolCategory: PoolCategory!
        // poolCreator: UserWallet! @hasOne
        // poolType: poolType!
        // poolStatus: poolStatus!
        // poolEntryFee: Int!
        // poolTotal: Int!
        // poolWinningPayout: Int!
        // allowPlayerLeave: Boolean!
        // apiPoolAttributes: ApiPoolAttributes @hasOne
        // apiRequestHash: String!
        // players: [PoolPlayer]! @hasMany

        /* PoolPlayer */
        /* create */

        // const result = await this.createPoolFromEvent({
        //     poolId: parseInt((Math.random() * 100).toString(), 10),
        //     poolTitle: 'Test title',
        //     poolCategory: PoolCategory.gaming,
        //     poolType: poolType.lottery,
        //     poolStatus: poolStatus.awaiting,
        //     poolEntryFee: 100,
        //     poolTotal: 100,
        //     poolWinningPayout: 0,
        //     allowPlayerLeave: true,
        //     apiRequestHash: 'test',
        //     poolPoolCreatorId: userwalletResult.id               
        // } as CreatePoolInput);

        // return result;
    }

    async handleContractEventV2(eventRecord, poolCreatorUserWallet): Promise<any> {

    }

    async handleLegacyContractEvent(eventRecord, poolCreatorUserWallet): Promise<any> {
        const crypto = await import('crypto');
        const createdPoolId = crypto.randomUUID();

        const decodedGameId = eventRecord.dynamodb.NewImage.decodedGameId.N;

        console.log('calling getGameById with value of', decodedGameId);

        const blockchainGameDetails = await this.legacyBlockchainService.getGameById(decodedGameId);

        const blockchainGameDetailsDecoded = {
            gameId: parseInt(blockchainGameDetails.decoded.gameId),
            gameStatus: parseInt(blockchainGameDetails.decoded.gameStatus),
            gameTotalWagers: blockchainGameDetails.decoded.gameTotalWagers,
            gameWinningPayout: blockchainGameDetails.decoded.gameWinningPayout,
            gameWinnerAddress: blockchainGameDetails.decoded.gameWinnerAddress,
            gameTotalEligiblePlayers: blockchainGameDetails.decoded.gameTotalEligiblePlayers,
            gcsMinGamePlayers: blockchainGameDetails.decoded.gcsMinGamePlayers,
            gcsGameBetSize: blockchainGameDetails.decoded.gcsGameBetSize,
            gcsIsAuditEnabled: blockchainGameDetails.decoded.gcsIsAuditEnabled
        } as DecodedGameEntity;

        console.log('before create pool entry fee is', blockchainGameDetailsDecoded.gcsGameBetSize);

        console.log('decoded game entity is ', blockchainGameDetailsDecoded);

        // const createdPool = await this.poolService.createPool(   
        //     {
        //         id: createdPoolId,
        //         poolId: decodedGameId,
        //         poolTitle: `Lottery Game # ${decodedGameId}`,
        //         poolCategory: PoolCategory.random_winners,
        //         poolType: poolType.lottery,
        //         poolStatus: poolStatus.awaiting,
        //         poolEntryFee: blockchainGameDetailsDecoded.gcsGameBetSize,
        //         poolTotal: blockchainGameDetailsDecoded.gameTotalWagers,
        //         poolWinningPayout: '0',
        //         allowPlayerLeave: true,
        //         apiRequestHash: 'NA_V1_CONTRACT',
        //         poolPoolCreatorId: poolCreatorUserWallet.id
        //     } as CreatePoolInput);

        // const poolPlayerServiceResult = await this.poolPlayerService.createPoolPlayer(
        //     {
        //         status: PlayerStatus.pending_pool_completion,
        //         poolPlayersId: createdPool.id,
        //         poolPlayerUserWalletId: poolCreatorUserWallet.id
        //     } as CreatePoolPlayerInput);
    }
}