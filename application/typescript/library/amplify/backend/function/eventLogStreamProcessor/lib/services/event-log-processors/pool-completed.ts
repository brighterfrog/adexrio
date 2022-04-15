'use strict';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreateApiPoolAttributesInput, CreatePoolInput, CreatePoolMutation, CreatePoolPlayerInput, CreateUserWalletInput, CreateUserWalletMutation, LotteryPoolAttributes, PlayerStatus, Pool, PoolCategory, PoolPlayer, poolType, SearchableLotteryPoolAttributesFilterInput, SearchablePoolFilterInput, SearchablePoolPlayerFilterInput, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UpdateLotteryPoolAttributesInput, UserWallet } from '../../library/codegen/API';
import { getCreatePoolEventLog } from '../../library/graphql/queries';
import { createPool, createUserWallet } from '../../library/graphql/mutations';

import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';
import { BlockChainService } from '../../library//backend/blockchain/blockchain-service';
import { DecodedGameEntity } from '../../library//backend/models/all-models';
import { LotteryPoolAttributesService } from '../core/lottery-pool-attributes-service';

import { GAME_STATUS_COMPLETE, IEventLogProcessor } from './models'

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
        const userWallet = await getOrCreateUserWallet(eventRecord.dynamodb.NewImage.decodedPlayer.S, this.userWalletService);
    
        /* Pool */
        //TODO: Contract Update. New contract will have EVENTS contain poolJsonData: { poolType: {} } to check for pool type among other fields   
        /* default to ONLY create lottery pools to accomodate v1 contract */
        if (isContractLegacy()) {         
            const handleLegacyContractCreateEventResult = await this.handleLegacyContractEvent(eventRecord, userWallet);
        }
        else {        
            const handleContractCreateEventResult = await this.handleContractEventV2(eventRecord, userWallet);
        }

        async function getOrCreateUserWallet(decodedPlayer, userWalletService) {
            let poolCreatorUserWallet: UserWallet;

            let existingUserWallet = await userWalletService.getUserWalletByWalletAddressIndex(decodedPlayer) as UserWallet;
            if (doNotHaveExistingWallet(existingUserWallet)) {
                poolCreatorUserWallet = await userWalletService.createUserWallet({
                    wallet: decodedPlayer,
                    nickname: null,
                    chatlogo: null                       
                } as CreateUserWalletInput);
            }
            else {
                poolCreatorUserWallet = existingUserWallet;
            }
            return poolCreatorUserWallet;
        }

        function isContractLegacy(): Boolean {
            const isLegacy = eventRecord.dynamodb.NewImage?.poolJsonData?.S ? false : true;
            console.log('isContractLegacy', isLegacy);
            return isLegacy;
        }

        function doNotHaveExistingWallet(existingUserWallet) {
            return existingUserWallet === null || existingUserWallet === 'undefined';
        }      
    }
    
    async handleContractEventV2(eventRecord, poolCreatorUserWallet): Promise<any> {

    }    

    async handleLegacyContractEvent(eventRecord, userWallet): Promise<any> {
        
        const decodedGameId = eventRecord.dynamodb.NewImage.decodedGameId.N;      

        const existingPool =  await this.poolService.getPoolByPoolIdIndex(decodedGameId);
        console.log('existingPool', existingPool);

        if(existingPool) {
            console.log('existing pool not found', decodedGameId);
            throw new Error(`existing pool ${decodedGameId} not found`)                          
        }
        else {
            let poolToUpdate = existingPool;

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
                                          

            const existingPoolPlayer = await this.poolPlayerService.getPoolPlayerbyPoolIdWalletIdIndex(userWallet.id, poolToUpdate.id);
                        
            const poolPlayerServiceResult = await this._updatePoolPlayer(existingPoolPlayer);

          
            /* retrieve existing lottery pool attributes */
            /* update lottery pool attributes */

            const existingLotteryPoolAttributes = await this.lotteryPoolAttributesService.getLotteryPoolAttributesByIndex(poolToUpdate.id);
    
            const lotteryPoolAttributesUpdateInput = {
                id: existingLotteryPoolAttributes.id,
                auditRecordDrawId: eventRecord.dynamodb.NewImage.decodedAuditRecordDrawId.S,
                isAuditEnabled: existingLotteryPoolAttributes.isAuditEnabled,
                randomOrgUrlForResults: `https://www.random.org/draws/details/?draw=${eventRecord.dynamodb.NewImage.decodedAuditRecordDrawId.S}`,  
                lotteryPoolAttributesPoolId: existingLotteryPoolAttributes.lotteryPoolAttributesPoolId,
                poolId:  existingLotteryPoolAttributes.poolId      
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