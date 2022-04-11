'use strict';

import { API, graphqlOperation, GraphQLResult } from '../../amplify-bootstrapper/bootstrap-amplify';

import { CreateApiPoolAttributesInput, CreatePoolInput, CreatePoolMutation, CreatePoolPlayerInput, CreateUserWalletInput, CreateUserWalletMutation, LotteryPoolAttributes, PlayerStatus, Pool, PoolCategory, PoolPlayer, poolType, SearchableLotteryPoolAttributesFilterInput, SearchablePoolFilterInput, SearchablePoolPlayerFilterInput, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UpdateLotteryPoolAttributesInput, UserWallet } from '../../codegen/API';
import { getCreatePoolEventLog } from '../../graphql/queries';
import { createPool, createUserWallet } from '../../graphql/mutations';

import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';
import { BlockChainService } from '../legacy_contract_v1_helpers/backend/blockchain/blockchain-service';
import { DecodedGameEntity } from '../legacy_contract_v1_helpers/backend/models/all-models';
import { LotteryPoolAttributesService } from '../core/lottery-pool-attributes-service';

export class PoolCompletedService implements IEventLogProcessor {

    userWalletService: UserWalletService;
    apiPoolAttributesService: ApiPoolAttributesService;
    poolPlayerService: PoolPlayerService;
    poolService: PoolService;
    lotteryPoolAttributesService: LotteryPoolAttributesService;
    legacyBlockchainService: BlockChainService;

    constructor(
        userWalletService: UserWalletService,
        apiPoolAttributesService: ApiPoolAttributesService,
        poolPlayerService: PoolPlayerService,
        poolService: PoolService,
        lotteryPoolAttributesService: LotteryPoolAttributesService,
        legacyBlockchainService: BlockChainService
    ) {
        this.userWalletService = userWalletService;
        this.apiPoolAttributesService = apiPoolAttributesService;
        this.poolPlayerService = poolPlayerService;
        this.poolService = poolService;
        this.lotteryPoolAttributesService = lotteryPoolAttributesService;
        this.legacyBlockchainService = legacyBlockchainService;
    }
  
    async handleEventRecord(eventRecord): Promise<any> {
        console.log('handleEventRecord', eventRecord)

        /* UserWallet */              
        const userWallet = await getOrCreateUserWallet(eventRecord.dynamodb.NewImage.decodedPlayer, this.userWalletService);
    
        /* Pool */
        //TODO: Contract Update. New contract will have EVENTS contain poolJsonData: { poolType: {} } to check for pool type among other fields   
        /* default to ONLY create lottery pools to accomodate v1 contract */
        if (!isContractVersion2()) {         
            const handleLegacyContractCreateEventResult = await this.handleLegacyContractEvent(eventRecord, userWallet);
        }
        else {        
            const handleContractCreateEventResult = await this.handleContractEventV2(eventRecord, userWallet);
        }

        async function getOrCreateUserWallet(decodedPlayer, userWalletService) {
            let poolCreatorUserWallet: UserWallet;

            let searchForExistingCreatorUserWallet = await userWalletService.searchUserWalletByWalletAddress({ wallet: { eq: decodedPlayer } } as SearchableUserWalletFilterInput);
            if (doNotHaveExistingWallet(searchForExistingCreatorUserWallet)) {
                poolCreatorUserWallet = await userWalletService.createUserWallet({
                    wallet: decodedPlayer.S,
                    nickname: null,
                    chatlogo: null                       
                } as CreateUserWalletInput);
            }
            else {
                poolCreatorUserWallet = searchForExistingCreatorUserWallet.items[0];
            }
            return poolCreatorUserWallet;
        }

        function isContractVersion2() {
            return eventRecord.dynamodb.NewImage?.poolJsonData ? JSON.parse(eventRecord.dynamodb.NewImage?.poolJsonData) : null;
        }

        function doNotHaveExistingWallet(searchForExistingCreatorUserWallet) {
            return searchForExistingCreatorUserWallet.items.length === 0;
        }    
    }
    
    async handleContractEventV2(eventRecord, poolCreatorUserWallet): Promise<any> {

    }    

    async handleLegacyContractEvent(eventRecord, userWallet): Promise<any> {
        
        const decodedGameId = eventRecord.dynamodb.NewImage.decodedGameId.N;      

        const existingPools =  await this.poolService.searchPoolByPoolId({ poolId: { eq: decodedGameId } } as SearchablePoolFilterInput);
        console.log('existingPools', existingPools);

        if(existingPools.total === null || existingPools.total === 0) {
            console.log('existing pool not found', decodedGameId);
            throw new Error(`existing pool ${decodedGameId} not found`)                          
        }
        else {
            let poolToUpdate = existingPools.items[0];

            console.log('Existing Pool found matching this pool id');    
            

            // Completed Event properties emitted
            // uint256 indexed gameId,
            // address indexed player, --playerWinner
            // uint256 indexed dateTime,
            // uint256 winningPayout,
            // bytes32 transactionId,
            // uint256 auditRecordDrawId  **** set this on pool

            //GameStatus Enums
            // COMPLETE, = 0
            // AWAITING_GAME_CRITERIA_MET, = 1
            // CRITERIA_MET_AWAITING_LOTTERY = 2

            // Update Pool record
            // Update LotteryPoolAttributes record for legacy
            // Update PoolPlayers status for winner done            
            // Update Summary Table

              /* update pool totals */                                     
              poolToUpdate.poolStatus = GAME_STATUS_COMPLETE;
              poolToUpdate.poolWinningPayout = eventRecord.dynamodb.NewImage.decodedWinningPayout.S;

              const updatePoolResult = await this.poolService.updatePool(poolToUpdate);  
                        
            /* retrieve existsing pool player */           
            const searchablePoolPlayerFilterInput = {
                poolPlayerUserWalletId: { eq: userWallet.id},
                poolPlayersId: { eq: poolToUpdate.id }
            } as SearchablePoolPlayerFilterInput;

            const existingPoolPlayerSearchResults = await this.poolPlayerService.searchPoolPlayers(searchablePoolPlayerFilterInput);

            /* update existing pool player */
            const poolPlayer = existingPoolPlayerSearchResults.items[0];
            const poolPlayerServiceResult = await this._updatePoolPlayer(poolPlayer);

          
            /* retrieve existing lottery pool attributes */
            /* update lottery pool attributes */

            const existingLotteryPoolAttributesSearchResult = await this.lotteryPoolAttributesService.searchLotteryPoolAttributes({ lotteryPoolAttributesPoolId: { eq: poolToUpdate.id } } as SearchableLotteryPoolAttributesFilterInput);

            const existingLotteryPoolAttributes = existingLotteryPoolAttributesSearchResult.items[0];

            const lotteryPoolAttributesUpdateInput = {
                id: existingLotteryPoolAttributes.id,
                auditRecordDrawId: eventRecord.dynamodb.NewImage.decodedAuditRecordDrawId.S,
                isAuditEnabled: existingLotteryPoolAttributes.isAuditEnabled,
                randomOrgUrlForResults: `https://www.random.org/draws/details/?draw=${eventRecord.dynamodb.NewImage.decodedAuditRecordDrawId.S}`,            
            } as UpdateLotteryPoolAttributesInput;

            const lotteryPoolAttributesUpdateResult = await this._updateLotteryPoolAttributes(lotteryPoolAttributesUpdateInput);   
                                                                
            console.log('Done processing player joined pool event');
        }        
    }

    private async _updateLotteryPoolAttributes(lotteryPoolAttributesUpdateInput: UpdateLotteryPoolAttributesInput): Promise<LotteryPoolAttributes> {       
        console.log('lotteryPoolAttributesUpdateInput with', lotteryPoolAttributesUpdateInput);

        const updateLotteryPoolAttributesResult = await this.lotteryPoolAttributesService.updateLotteryPoolAttributes(lotteryPoolAttributesUpdateInput);

        console.log('updateLotteryPoolAttributesResult', updateLotteryPoolAttributesResult);

        return updateLotteryPoolAttributesResult as LotteryPoolAttributes;             
    }

    private async _updatePoolPlayer(poolPlayer: PoolPlayer): Promise<PoolPlayer> {      
        poolPlayer.status = PlayerStatus.winner;
        const updatePoolPlayerResult = await this.poolPlayerService.updatePoolPlayer(poolPlayer);

        console.log('createdPoolPlayerResult', updatePoolPlayerResult);

        return updatePoolPlayerResult;          
    }  
}