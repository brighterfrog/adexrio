/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIngestionBucketEventInput = {
  event: string,
};

export type IngestionBucketResponse = {
  __typename: "IngestionBucketResponse",
  s3: string,
  sqs: string,
};

export type CreateFeedbackInput = {
  id?: string | null,
  comment: string,
  commentType: feedbackType,
  status: feedbackStatus,
  wallet: string,
};

export enum feedbackType {
  general = "general",
  enhancement = "enhancement",
  bug = "bug",
  interest = "interest",
}


export enum feedbackStatus {
  pending = "pending",
  reviewed = "reviewed",
  projectItem = "projectItem",
}


export type ModelFeedbackConditionInput = {
  comment?: ModelStringInput | null,
  commentType?: ModelfeedbackTypeInput | null,
  status?: ModelfeedbackStatusInput | null,
  wallet?: ModelStringInput | null,
  and?: Array< ModelFeedbackConditionInput | null > | null,
  or?: Array< ModelFeedbackConditionInput | null > | null,
  not?: ModelFeedbackConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelfeedbackTypeInput = {
  eq?: feedbackType | null,
  ne?: feedbackType | null,
};

export type ModelfeedbackStatusInput = {
  eq?: feedbackStatus | null,
  ne?: feedbackStatus | null,
};

export type Feedback = {
  __typename: "Feedback",
  id: string,
  comment: string,
  commentType: feedbackType,
  status: feedbackStatus,
  wallet: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFeedbackInput = {
  id: string,
  comment?: string | null,
  commentType?: feedbackType | null,
  status?: feedbackStatus | null,
  wallet?: string | null,
};

export type DeleteFeedbackInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  message: string,
  wallet: string,
  createdAt?: string | null,
};

export type ModelMessageConditionInput = {
  message?: ModelStringInput | null,
  wallet?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  message: string,
  wallet: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMessageInput = {
  id: string,
  message?: string | null,
  wallet?: string | null,
  createdAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateErrorLogInput = {
  id?: string | null,
  createdAt?: string | null,
  stackTrace: string,
};

export type ModelErrorLogConditionInput = {
  createdAt?: ModelStringInput | null,
  stackTrace?: ModelStringInput | null,
  and?: Array< ModelErrorLogConditionInput | null > | null,
  or?: Array< ModelErrorLogConditionInput | null > | null,
  not?: ModelErrorLogConditionInput | null,
};

export type ErrorLog = {
  __typename: "ErrorLog",
  id: string,
  createdAt: string,
  stackTrace: string,
  updatedAt: string,
};

export type UpdateErrorLogInput = {
  id: string,
  createdAt?: string | null,
  stackTrace?: string | null,
};

export type DeleteErrorLogInput = {
  id: string,
};

export type CreatePoolPlayerInput = {
  id?: string | null,
  userWalletId: string,
  status: PlayerStatus,
  poolId: string,
  poolPlayersId?: string | null,
  poolPlayerUserWalletId: string,
};

export enum PlayerStatus {
  withdrew = "withdrew",
  joined = "joined",
  winner = "winner",
}


export type ModelPoolPlayerConditionInput = {
  userWalletId?: ModelStringInput | null,
  status?: ModelPlayerStatusInput | null,
  poolId?: ModelStringInput | null,
  and?: Array< ModelPoolPlayerConditionInput | null > | null,
  or?: Array< ModelPoolPlayerConditionInput | null > | null,
  not?: ModelPoolPlayerConditionInput | null,
  poolPlayersId?: ModelIDInput | null,
  poolPlayerUserWalletId?: ModelIDInput | null,
};

export type ModelPlayerStatusInput = {
  eq?: PlayerStatus | null,
  ne?: PlayerStatus | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type PoolPlayer = {
  __typename: "PoolPlayer",
  id: string,
  userWalletId: string,
  userWallet: UserWallet,
  status: PlayerStatus,
  pool: Pool,
  poolId: string,
  createdAt: string,
  updatedAt: string,
  poolPlayersId?: string | null,
  poolPlayerUserWalletId: string,
};

export type UserWallet = {
  __typename: "UserWallet",
  id: string,
  wallet: string,
  nickname?: string | null,
  chatlogo?: string | null,
  brands?: ModelBrandConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBrandConnection = {
  __typename: "ModelBrandConnection",
  items:  Array<Brand | null >,
  nextToken?: string | null,
};

export type Brand = {
  __typename: "Brand",
  id: string,
  wallet: string,
  name: string,
  rating: number,
  logo?: string | null,
  completedPools: number,
  failedPools: number,
  createdAt: string,
  updatedAt: string,
  userWalletBrandsId?: string | null,
};

export type Pool = {
  __typename: "Pool",
  id: string,
  poolId: number,
  poolTitle: string,
  poolCategory: PoolCategory,
  poolCreator: UserWallet,
  poolType: poolType,
  poolStatus: string,
  poolEntryFee: string,
  poolTotal: string,
  poolWinningPayout: string,
  allowPlayerLeave: boolean,
  apiPoolAttributes?: ApiPoolAttributes | null,
  lotteryPoolAttributes?: LotteryPoolAttributes | null,
  players?: ModelPoolPlayerConnection | null,
  createdAt: string,
  updatedAt: string,
  poolPoolCreatorId: string,
  poolApiPoolAttributesId?: string | null,
  poolLotteryPoolAttributesId?: string | null,
};

export enum PoolCategory {
  other = "other",
  sports = "sports",
  esports = "esports",
  gaming = "gaming",
  politics = "politics",
  financial = "financial",
  random_winners = "random_winners",
}


export enum poolType {
  lottery = "lottery",
  manual = "manual",
  api = "api",
  custom_builder = "custom_builder",
}


export type ApiPoolAttributes = {
  __typename: "ApiPoolAttributes",
  id: string,
  apiKey: string,
  lockFundsDatetime: string,
  executeWinnerDatetime: string,
  apiUrlForResults: string,
  verifiedUrlSchema: boolean,
  poolCreatorPercentFeeToWithold: number,
  apiWinnerOptionEntries: string,
  apiwinnerResult: string,
  poolApiDefaultSchema: string,
  poolApiCustomSchema?: string | null,
  pool?: Pool | null,
  createdAt: string,
  updatedAt: string,
  apiPoolAttributesPoolId?: string | null,
};

export type LotteryPoolAttributes = {
  __typename: "LotteryPoolAttributes",
  id: string,
  auditRecordDrawId?: string | null,
  isAuditEnabled: boolean,
  randomOrgUrlForResults?: string | null,
  pool: Pool,
  poolId: string,
  createdAt: string,
  updatedAt: string,
  lotteryPoolAttributesPoolId: string,
};

export type ModelPoolPlayerConnection = {
  __typename: "ModelPoolPlayerConnection",
  items:  Array<PoolPlayer | null >,
  nextToken?: string | null,
};

export type UpdatePoolPlayerInput = {
  id: string,
  userWalletId?: string | null,
  status?: PlayerStatus | null,
  poolId?: string | null,
  poolPlayersId?: string | null,
  poolPlayerUserWalletId?: string | null,
};

export type DeletePoolPlayerInput = {
  id: string,
};

export type CreateLotteryPoolAttributesInput = {
  id?: string | null,
  auditRecordDrawId?: string | null,
  isAuditEnabled: boolean,
  randomOrgUrlForResults?: string | null,
  poolId: string,
  lotteryPoolAttributesPoolId: string,
};

export type ModelLotteryPoolAttributesConditionInput = {
  auditRecordDrawId?: ModelStringInput | null,
  isAuditEnabled?: ModelBooleanInput | null,
  randomOrgUrlForResults?: ModelStringInput | null,
  poolId?: ModelStringInput | null,
  and?: Array< ModelLotteryPoolAttributesConditionInput | null > | null,
  or?: Array< ModelLotteryPoolAttributesConditionInput | null > | null,
  not?: ModelLotteryPoolAttributesConditionInput | null,
  lotteryPoolAttributesPoolId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLotteryPoolAttributesInput = {
  id: string,
  auditRecordDrawId?: string | null,
  isAuditEnabled?: boolean | null,
  randomOrgUrlForResults?: string | null,
  poolId?: string | null,
  lotteryPoolAttributesPoolId?: string | null,
};

export type DeleteLotteryPoolAttributesInput = {
  id: string,
};

export type CreateApiPoolAttributesInput = {
  id?: string | null,
  apiKey: string,
  lockFundsDatetime: string,
  executeWinnerDatetime: string,
  apiUrlForResults: string,
  verifiedUrlSchema: boolean,
  poolCreatorPercentFeeToWithold: number,
  apiWinnerOptionEntries: string,
  apiwinnerResult: string,
  poolApiDefaultSchema: string,
  poolApiCustomSchema?: string | null,
  apiPoolAttributesPoolId?: string | null,
};

export type ModelApiPoolAttributesConditionInput = {
  apiKey?: ModelStringInput | null,
  lockFundsDatetime?: ModelStringInput | null,
  executeWinnerDatetime?: ModelStringInput | null,
  apiUrlForResults?: ModelStringInput | null,
  verifiedUrlSchema?: ModelBooleanInput | null,
  poolCreatorPercentFeeToWithold?: ModelIntInput | null,
  apiWinnerOptionEntries?: ModelStringInput | null,
  apiwinnerResult?: ModelStringInput | null,
  poolApiDefaultSchema?: ModelStringInput | null,
  poolApiCustomSchema?: ModelStringInput | null,
  and?: Array< ModelApiPoolAttributesConditionInput | null > | null,
  or?: Array< ModelApiPoolAttributesConditionInput | null > | null,
  not?: ModelApiPoolAttributesConditionInput | null,
  apiPoolAttributesPoolId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateApiPoolAttributesInput = {
  id: string,
  apiKey?: string | null,
  lockFundsDatetime?: string | null,
  executeWinnerDatetime?: string | null,
  apiUrlForResults?: string | null,
  verifiedUrlSchema?: boolean | null,
  poolCreatorPercentFeeToWithold?: number | null,
  apiWinnerOptionEntries?: string | null,
  apiwinnerResult?: string | null,
  poolApiDefaultSchema?: string | null,
  poolApiCustomSchema?: string | null,
  apiPoolAttributesPoolId?: string | null,
};

export type DeleteApiPoolAttributesInput = {
  id: string,
};

export type CreatePoolInput = {
  id?: string | null,
  poolId: number,
  poolTitle: string,
  poolCategory: PoolCategory,
  poolType: poolType,
  poolStatus: string,
  poolEntryFee: string,
  poolTotal: string,
  poolWinningPayout: string,
  allowPlayerLeave: boolean,
  poolPoolCreatorId: string,
  poolApiPoolAttributesId?: string | null,
  poolLotteryPoolAttributesId?: string | null,
};

export type ModelPoolConditionInput = {
  poolId?: ModelIntInput | null,
  poolTitle?: ModelStringInput | null,
  poolCategory?: ModelPoolCategoryInput | null,
  poolType?: ModelpoolTypeInput | null,
  poolStatus?: ModelStringInput | null,
  poolEntryFee?: ModelStringInput | null,
  poolTotal?: ModelStringInput | null,
  poolWinningPayout?: ModelStringInput | null,
  allowPlayerLeave?: ModelBooleanInput | null,
  and?: Array< ModelPoolConditionInput | null > | null,
  or?: Array< ModelPoolConditionInput | null > | null,
  not?: ModelPoolConditionInput | null,
  poolPoolCreatorId?: ModelIDInput | null,
  poolApiPoolAttributesId?: ModelIDInput | null,
  poolLotteryPoolAttributesId?: ModelIDInput | null,
};

export type ModelPoolCategoryInput = {
  eq?: PoolCategory | null,
  ne?: PoolCategory | null,
};

export type ModelpoolTypeInput = {
  eq?: poolType | null,
  ne?: poolType | null,
};

export type UpdatePoolInput = {
  id: string,
  poolId?: number | null,
  poolTitle?: string | null,
  poolCategory?: PoolCategory | null,
  poolType?: poolType | null,
  poolStatus?: string | null,
  poolEntryFee?: string | null,
  poolTotal?: string | null,
  poolWinningPayout?: string | null,
  allowPlayerLeave?: boolean | null,
  poolPoolCreatorId?: string | null,
  poolApiPoolAttributesId?: string | null,
  poolLotteryPoolAttributesId?: string | null,
};

export type DeletePoolInput = {
  id: string,
};

export type CreatePoolSuccessfullBlockEventsProcessedInput = {
  id?: string | null,
  positionField: number,
  lambdaProcessorDecisionCheckForNextBlocknumber: number,
};

export type ModelPoolSuccessfullBlockEventsProcessedConditionInput = {
  positionField?: ModelIntInput | null,
  lambdaProcessorDecisionCheckForNextBlocknumber?: ModelIntInput | null,
  and?: Array< ModelPoolSuccessfullBlockEventsProcessedConditionInput | null > | null,
  or?: Array< ModelPoolSuccessfullBlockEventsProcessedConditionInput | null > | null,
  not?: ModelPoolSuccessfullBlockEventsProcessedConditionInput | null,
};

export type PoolSuccessfullBlockEventsProcessed = {
  __typename: "PoolSuccessfullBlockEventsProcessed",
  id: string,
  positionField: number,
  lambdaProcessorDecisionCheckForNextBlocknumber: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePoolSuccessfullBlockEventsProcessedInput = {
  id: string,
  positionField?: number | null,
  lambdaProcessorDecisionCheckForNextBlocknumber?: number | null,
};

export type DeletePoolSuccessfullBlockEventsProcessedInput = {
  id: string,
};

export type CreatePoolSummariesInput = {
  id?: string | null,
  totalCompletedGames: number,
  totalPlayers: number,
  totalPayouts: number,
  highestSingleWinnerPayout: number,
  highestPoolPayout: number,
};

export type ModelPoolSummariesConditionInput = {
  totalCompletedGames?: ModelIntInput | null,
  totalPlayers?: ModelIntInput | null,
  totalPayouts?: ModelIntInput | null,
  highestSingleWinnerPayout?: ModelIntInput | null,
  highestPoolPayout?: ModelIntInput | null,
  and?: Array< ModelPoolSummariesConditionInput | null > | null,
  or?: Array< ModelPoolSummariesConditionInput | null > | null,
  not?: ModelPoolSummariesConditionInput | null,
};

export type PoolSummaries = {
  __typename: "PoolSummaries",
  id: string,
  totalCompletedGames: number,
  totalPlayers: number,
  totalPayouts: number,
  highestSingleWinnerPayout: number,
  highestPoolPayout: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePoolSummariesInput = {
  id: string,
  totalCompletedGames?: number | null,
  totalPlayers?: number | null,
  totalPayouts?: number | null,
  highestSingleWinnerPayout?: number | null,
  highestPoolPayout?: number | null,
};

export type DeletePoolSummariesInput = {
  id: string,
};

export type CreateUserWalletInput = {
  id?: string | null,
  wallet: string,
  nickname?: string | null,
  chatlogo?: string | null,
};

export type ModelUserWalletConditionInput = {
  wallet?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  chatlogo?: ModelStringInput | null,
  and?: Array< ModelUserWalletConditionInput | null > | null,
  or?: Array< ModelUserWalletConditionInput | null > | null,
  not?: ModelUserWalletConditionInput | null,
};

export type UpdateUserWalletInput = {
  id: string,
  wallet?: string | null,
  nickname?: string | null,
  chatlogo?: string | null,
};

export type DeleteUserWalletInput = {
  id: string,
};

export type CreateBrandInput = {
  id?: string | null,
  wallet: string,
  name: string,
  rating: number,
  logo?: string | null,
  completedPools: number,
  failedPools: number,
  userWalletBrandsId?: string | null,
};

export type ModelBrandConditionInput = {
  wallet?: ModelStringInput | null,
  name?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  logo?: ModelStringInput | null,
  completedPools?: ModelIntInput | null,
  failedPools?: ModelIntInput | null,
  and?: Array< ModelBrandConditionInput | null > | null,
  or?: Array< ModelBrandConditionInput | null > | null,
  not?: ModelBrandConditionInput | null,
  userWalletBrandsId?: ModelIDInput | null,
};

export type UpdateBrandInput = {
  id: string,
  wallet?: string | null,
  name?: string | null,
  rating?: number | null,
  logo?: string | null,
  completedPools?: number | null,
  failedPools?: number | null,
  userWalletBrandsId?: string | null,
};

export type DeleteBrandInput = {
  id: string,
};

export type CreateCreatePoolEventLogInput = {
  id?: string | null,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedGameId: number,
  decodedPlayer: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
};

export type ModelCreatePoolEventLogConditionInput = {
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelCreatePoolEventLogConditionInput | null > | null,
  or?: Array< ModelCreatePoolEventLogConditionInput | null > | null,
  not?: ModelCreatePoolEventLogConditionInput | null,
};

export type CreatePoolEventLog = {
  __typename: "CreatePoolEventLog",
  id: string,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedGameId: number,
  decodedPlayer: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCreatePoolEventLogInput = {
  id: string,
  txID?: string | null,
  raw?: string | null,
  metaBlockID?: string | null,
  metaBlockNumber?: number | null,
  metaBlockTimestamp?: number | null,
  metaTxOrigin?: string | null,
  metaClauseIndex?: number | null,
  decodedGameId?: number | null,
  decodedPlayer?: string | null,
  decodedDateTime?: string | null,
  poolJsonData?: string | null,
};

export type DeleteCreatePoolEventLogInput = {
  id: string,
};

export type CreatePlayerJoinedPoolEventLogInput = {
  id?: string | null,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedGameId: number,
  decodedPlayer: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
};

export type ModelPlayerJoinedPoolEventLogConditionInput = {
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPlayerJoinedPoolEventLogConditionInput | null > | null,
  or?: Array< ModelPlayerJoinedPoolEventLogConditionInput | null > | null,
  not?: ModelPlayerJoinedPoolEventLogConditionInput | null,
};

export type PlayerJoinedPoolEventLog = {
  __typename: "PlayerJoinedPoolEventLog",
  id: string,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedGameId: number,
  decodedPlayer: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlayerJoinedPoolEventLogInput = {
  id: string,
  txID?: string | null,
  raw?: string | null,
  metaBlockID?: string | null,
  metaBlockNumber?: number | null,
  metaBlockTimestamp?: number | null,
  metaTxOrigin?: string | null,
  metaClauseIndex?: number | null,
  decodedGameId?: number | null,
  decodedPlayer?: string | null,
  decodedDateTime?: string | null,
  poolJsonData?: string | null,
};

export type DeletePlayerJoinedPoolEventLogInput = {
  id: string,
};

export type CreatePlayerLeftPoolEventLogInput = {
  id?: string | null,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedGameId: number,
  decodedPlayer: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
};

export type ModelPlayerLeftPoolEventLogConditionInput = {
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPlayerLeftPoolEventLogConditionInput | null > | null,
  or?: Array< ModelPlayerLeftPoolEventLogConditionInput | null > | null,
  not?: ModelPlayerLeftPoolEventLogConditionInput | null,
};

export type PlayerLeftPoolEventLog = {
  __typename: "PlayerLeftPoolEventLog",
  id: string,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedGameId: number,
  decodedPlayer: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlayerLeftPoolEventLogInput = {
  id: string,
  txID?: string | null,
  raw?: string | null,
  metaBlockID?: string | null,
  metaBlockNumber?: number | null,
  metaBlockTimestamp?: number | null,
  metaTxOrigin?: string | null,
  metaClauseIndex?: number | null,
  decodedGameId?: number | null,
  decodedPlayer?: string | null,
  decodedDateTime?: string | null,
  poolJsonData?: string | null,
};

export type DeletePlayerLeftPoolEventLogInput = {
  id: string,
};

export type CreatePoolAwaitingExecutionEventLogInput = {
  id?: string | null,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedGameId: number,
  decodedStatus: string,
  decodedType: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
};

export type ModelPoolAwaitingExecutionEventLogConditionInput = {
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedStatus?: ModelStringInput | null,
  decodedType?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPoolAwaitingExecutionEventLogConditionInput | null > | null,
  or?: Array< ModelPoolAwaitingExecutionEventLogConditionInput | null > | null,
  not?: ModelPoolAwaitingExecutionEventLogConditionInput | null,
};

export type PoolAwaitingExecutionEventLog = {
  __typename: "PoolAwaitingExecutionEventLog",
  id: string,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedGameId: number,
  decodedStatus: string,
  decodedType: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePoolAwaitingExecutionEventLogInput = {
  id: string,
  txID?: string | null,
  raw?: string | null,
  metaBlockID?: string | null,
  metaBlockNumber?: number | null,
  metaBlockTimestamp?: number | null,
  metaTxOrigin?: string | null,
  metaClauseIndex?: number | null,
  decodedGameId?: number | null,
  decodedStatus?: string | null,
  decodedType?: string | null,
  decodedDateTime?: string | null,
  poolJsonData?: string | null,
};

export type DeletePoolAwaitingExecutionEventLogInput = {
  id: string,
};

export type CreatePoolCompletedEventLogInput = {
  id?: string | null,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedWinningPayout: string,
  decodedGameId: number,
  decodedPlayer: string,
  decodedAuditRecordDrawId: string,
  decodedType: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
};

export type ModelPoolCompletedEventLogConditionInput = {
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedWinningPayout?: ModelStringInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedAuditRecordDrawId?: ModelStringInput | null,
  decodedType?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPoolCompletedEventLogConditionInput | null > | null,
  or?: Array< ModelPoolCompletedEventLogConditionInput | null > | null,
  not?: ModelPoolCompletedEventLogConditionInput | null,
};

export type PoolCompletedEventLog = {
  __typename: "PoolCompletedEventLog",
  id: string,
  txID: string,
  raw: string,
  metaBlockID: string,
  metaBlockNumber: number,
  metaBlockTimestamp: number,
  metaTxOrigin: string,
  metaClauseIndex: number,
  decodedWinningPayout: string,
  decodedGameId: number,
  decodedPlayer: string,
  decodedAuditRecordDrawId: string,
  decodedType: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePoolCompletedEventLogInput = {
  id: string,
  txID?: string | null,
  raw?: string | null,
  metaBlockID?: string | null,
  metaBlockNumber?: number | null,
  metaBlockTimestamp?: number | null,
  metaTxOrigin?: string | null,
  metaClauseIndex?: number | null,
  decodedWinningPayout?: string | null,
  decodedGameId?: number | null,
  decodedPlayer?: string | null,
  decodedAuditRecordDrawId?: string | null,
  decodedType?: string | null,
  decodedDateTime?: string | null,
  poolJsonData?: string | null,
};

export type DeletePoolCompletedEventLogInput = {
  id: string,
};

export type SearchableFeedbackFilterInput = {
  id?: SearchableIDFilterInput | null,
  comment?: SearchableStringFilterInput | null,
  wallet?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  commentType?: SearchableStringFilterInput | null,
  status?: SearchableStringFilterInput | null,
  and?: Array< SearchableFeedbackFilterInput | null > | null,
  or?: Array< SearchableFeedbackFilterInput | null > | null,
  not?: SearchableFeedbackFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableFeedbackSortInput = {
  field?: SearchableFeedbackSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableFeedbackSortableFields {
  id = "id",
  comment = "comment",
  wallet = "wallet",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableFeedbackAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableFeedbackAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableFeedbackAggregateField {
  id = "id",
  comment = "comment",
  commentType = "commentType",
  status = "status",
  wallet = "wallet",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableFeedbackConnection = {
  __typename: "SearchableFeedbackConnection",
  items:  Array<Feedback | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type SearchableMessageFilterInput = {
  id?: SearchableIDFilterInput | null,
  message?: SearchableStringFilterInput | null,
  wallet?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableMessageFilterInput | null > | null,
  or?: Array< SearchableMessageFilterInput | null > | null,
  not?: SearchableMessageFilterInput | null,
};

export type SearchableMessageSortInput = {
  field?: SearchableMessageSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableMessageSortableFields {
  id = "id",
  message = "message",
  wallet = "wallet",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableMessageAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableMessageAggregateField,
};

export enum SearchableMessageAggregateField {
  id = "id",
  message = "message",
  wallet = "wallet",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableMessageConnection = {
  __typename: "SearchableMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePoolPlayerFilterInput = {
  id?: SearchableIDFilterInput | null,
  userWalletId?: SearchableStringFilterInput | null,
  poolId?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  poolPlayersId?: SearchableIDFilterInput | null,
  poolPlayerUserWalletId?: SearchableIDFilterInput | null,
  status?: SearchableStringFilterInput | null,
  and?: Array< SearchablePoolPlayerFilterInput | null > | null,
  or?: Array< SearchablePoolPlayerFilterInput | null > | null,
  not?: SearchablePoolPlayerFilterInput | null,
};

export type SearchablePoolPlayerSortInput = {
  field?: SearchablePoolPlayerSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePoolPlayerSortableFields {
  id = "id",
  userWalletId = "userWalletId",
  poolId = "poolId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  poolPlayersId = "poolPlayersId",
  poolPlayerUserWalletId = "poolPlayerUserWalletId",
}


export type SearchablePoolPlayerAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePoolPlayerAggregateField,
};

export enum SearchablePoolPlayerAggregateField {
  id = "id",
  userWalletId = "userWalletId",
  status = "status",
  poolId = "poolId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  poolPlayersId = "poolPlayersId",
  poolPlayerUserWalletId = "poolPlayerUserWalletId",
}


export type SearchablePoolPlayerConnection = {
  __typename: "SearchablePoolPlayerConnection",
  items:  Array<PoolPlayer | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableLotteryPoolAttributesFilterInput = {
  id?: SearchableIDFilterInput | null,
  auditRecordDrawId?: SearchableStringFilterInput | null,
  isAuditEnabled?: SearchableBooleanFilterInput | null,
  randomOrgUrlForResults?: SearchableStringFilterInput | null,
  poolId?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  lotteryPoolAttributesPoolId?: SearchableIDFilterInput | null,
  and?: Array< SearchableLotteryPoolAttributesFilterInput | null > | null,
  or?: Array< SearchableLotteryPoolAttributesFilterInput | null > | null,
  not?: SearchableLotteryPoolAttributesFilterInput | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableLotteryPoolAttributesSortInput = {
  field?: SearchableLotteryPoolAttributesSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableLotteryPoolAttributesSortableFields {
  id = "id",
  auditRecordDrawId = "auditRecordDrawId",
  isAuditEnabled = "isAuditEnabled",
  randomOrgUrlForResults = "randomOrgUrlForResults",
  poolId = "poolId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  lotteryPoolAttributesPoolId = "lotteryPoolAttributesPoolId",
}


export type SearchableLotteryPoolAttributesAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableLotteryPoolAttributesAggregateField,
};

export enum SearchableLotteryPoolAttributesAggregateField {
  id = "id",
  auditRecordDrawId = "auditRecordDrawId",
  isAuditEnabled = "isAuditEnabled",
  randomOrgUrlForResults = "randomOrgUrlForResults",
  poolId = "poolId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  lotteryPoolAttributesPoolId = "lotteryPoolAttributesPoolId",
}


export type SearchableLotteryPoolAttributesConnection = {
  __typename: "SearchableLotteryPoolAttributesConnection",
  items:  Array<LotteryPoolAttributes | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableApiPoolAttributesFilterInput = {
  id?: SearchableIDFilterInput | null,
  apiKey?: SearchableStringFilterInput | null,
  lockFundsDatetime?: SearchableStringFilterInput | null,
  executeWinnerDatetime?: SearchableStringFilterInput | null,
  apiUrlForResults?: SearchableStringFilterInput | null,
  verifiedUrlSchema?: SearchableBooleanFilterInput | null,
  poolCreatorPercentFeeToWithold?: SearchableIntFilterInput | null,
  apiWinnerOptionEntries?: SearchableStringFilterInput | null,
  apiwinnerResult?: SearchableStringFilterInput | null,
  poolApiDefaultSchema?: SearchableStringFilterInput | null,
  poolApiCustomSchema?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  apiPoolAttributesPoolId?: SearchableIDFilterInput | null,
  and?: Array< SearchableApiPoolAttributesFilterInput | null > | null,
  or?: Array< SearchableApiPoolAttributesFilterInput | null > | null,
  not?: SearchableApiPoolAttributesFilterInput | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableApiPoolAttributesSortInput = {
  field?: SearchableApiPoolAttributesSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableApiPoolAttributesSortableFields {
  id = "id",
  apiKey = "apiKey",
  lockFundsDatetime = "lockFundsDatetime",
  executeWinnerDatetime = "executeWinnerDatetime",
  apiUrlForResults = "apiUrlForResults",
  verifiedUrlSchema = "verifiedUrlSchema",
  poolCreatorPercentFeeToWithold = "poolCreatorPercentFeeToWithold",
  apiWinnerOptionEntries = "apiWinnerOptionEntries",
  apiwinnerResult = "apiwinnerResult",
  poolApiDefaultSchema = "poolApiDefaultSchema",
  poolApiCustomSchema = "poolApiCustomSchema",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  apiPoolAttributesPoolId = "apiPoolAttributesPoolId",
}


export type SearchableApiPoolAttributesAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableApiPoolAttributesAggregateField,
};

export enum SearchableApiPoolAttributesAggregateField {
  id = "id",
  apiKey = "apiKey",
  lockFundsDatetime = "lockFundsDatetime",
  executeWinnerDatetime = "executeWinnerDatetime",
  apiUrlForResults = "apiUrlForResults",
  verifiedUrlSchema = "verifiedUrlSchema",
  poolCreatorPercentFeeToWithold = "poolCreatorPercentFeeToWithold",
  apiWinnerOptionEntries = "apiWinnerOptionEntries",
  apiwinnerResult = "apiwinnerResult",
  poolApiDefaultSchema = "poolApiDefaultSchema",
  poolApiCustomSchema = "poolApiCustomSchema",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  apiPoolAttributesPoolId = "apiPoolAttributesPoolId",
}


export type SearchableApiPoolAttributesConnection = {
  __typename: "SearchableApiPoolAttributesConnection",
  items:  Array<ApiPoolAttributes | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePoolFilterInput = {
  id?: SearchableIDFilterInput | null,
  poolId?: SearchableIntFilterInput | null,
  poolTitle?: SearchableStringFilterInput | null,
  poolStatus?: SearchableStringFilterInput | null,
  poolEntryFee?: SearchableStringFilterInput | null,
  poolTotal?: SearchableStringFilterInput | null,
  poolWinningPayout?: SearchableStringFilterInput | null,
  allowPlayerLeave?: SearchableBooleanFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  poolPoolCreatorId?: SearchableIDFilterInput | null,
  poolApiPoolAttributesId?: SearchableIDFilterInput | null,
  poolLotteryPoolAttributesId?: SearchableIDFilterInput | null,
  poolCategory?: SearchableStringFilterInput | null,
  poolType?: SearchableStringFilterInput | null,
  and?: Array< SearchablePoolFilterInput | null > | null,
  or?: Array< SearchablePoolFilterInput | null > | null,
  not?: SearchablePoolFilterInput | null,
};

export type SearchablePoolSortInput = {
  field?: SearchablePoolSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePoolSortableFields {
  id = "id",
  poolId = "poolId",
  poolTitle = "poolTitle",
  poolStatus = "poolStatus",
  poolEntryFee = "poolEntryFee",
  poolTotal = "poolTotal",
  poolWinningPayout = "poolWinningPayout",
  allowPlayerLeave = "allowPlayerLeave",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  poolPoolCreatorId = "poolPoolCreatorId",
  poolApiPoolAttributesId = "poolApiPoolAttributesId",
  poolLotteryPoolAttributesId = "poolLotteryPoolAttributesId",
}


export type SearchablePoolAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePoolAggregateField,
};

export enum SearchablePoolAggregateField {
  id = "id",
  poolId = "poolId",
  poolTitle = "poolTitle",
  poolCategory = "poolCategory",
  poolType = "poolType",
  poolStatus = "poolStatus",
  poolEntryFee = "poolEntryFee",
  poolTotal = "poolTotal",
  poolWinningPayout = "poolWinningPayout",
  allowPlayerLeave = "allowPlayerLeave",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  poolPoolCreatorId = "poolPoolCreatorId",
  poolApiPoolAttributesId = "poolApiPoolAttributesId",
  poolLotteryPoolAttributesId = "poolLotteryPoolAttributesId",
}


export type SearchablePoolConnection = {
  __typename: "SearchablePoolConnection",
  items:  Array<Pool | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePoolSummariesFilterInput = {
  id?: SearchableIDFilterInput | null,
  totalCompletedGames?: SearchableIntFilterInput | null,
  totalPlayers?: SearchableIntFilterInput | null,
  totalPayouts?: SearchableIntFilterInput | null,
  highestSingleWinnerPayout?: SearchableIntFilterInput | null,
  highestPoolPayout?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchablePoolSummariesFilterInput | null > | null,
  or?: Array< SearchablePoolSummariesFilterInput | null > | null,
  not?: SearchablePoolSummariesFilterInput | null,
};

export type SearchablePoolSummariesSortInput = {
  field?: SearchablePoolSummariesSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePoolSummariesSortableFields {
  id = "id",
  totalCompletedGames = "totalCompletedGames",
  totalPlayers = "totalPlayers",
  totalPayouts = "totalPayouts",
  highestSingleWinnerPayout = "highestSingleWinnerPayout",
  highestPoolPayout = "highestPoolPayout",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolSummariesAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePoolSummariesAggregateField,
};

export enum SearchablePoolSummariesAggregateField {
  id = "id",
  totalCompletedGames = "totalCompletedGames",
  totalPlayers = "totalPlayers",
  totalPayouts = "totalPayouts",
  highestSingleWinnerPayout = "highestSingleWinnerPayout",
  highestPoolPayout = "highestPoolPayout",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolSummariesConnection = {
  __typename: "SearchablePoolSummariesConnection",
  items:  Array<PoolSummaries | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableUserWalletFilterInput = {
  id?: SearchableIDFilterInput | null,
  wallet?: SearchableStringFilterInput | null,
  nickname?: SearchableStringFilterInput | null,
  chatlogo?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableUserWalletFilterInput | null > | null,
  or?: Array< SearchableUserWalletFilterInput | null > | null,
  not?: SearchableUserWalletFilterInput | null,
};

export type SearchableUserWalletSortInput = {
  field?: SearchableUserWalletSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserWalletSortableFields {
  id = "id",
  wallet = "wallet",
  nickname = "nickname",
  chatlogo = "chatlogo",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserWalletAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUserWalletAggregateField,
};

export enum SearchableUserWalletAggregateField {
  id = "id",
  wallet = "wallet",
  nickname = "nickname",
  chatlogo = "chatlogo",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserWalletConnection = {
  __typename: "SearchableUserWalletConnection",
  items:  Array<UserWallet | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableBrandFilterInput = {
  id?: SearchableIDFilterInput | null,
  wallet?: SearchableStringFilterInput | null,
  name?: SearchableStringFilterInput | null,
  rating?: SearchableIntFilterInput | null,
  logo?: SearchableStringFilterInput | null,
  completedPools?: SearchableIntFilterInput | null,
  failedPools?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  userWalletBrandsId?: SearchableIDFilterInput | null,
  and?: Array< SearchableBrandFilterInput | null > | null,
  or?: Array< SearchableBrandFilterInput | null > | null,
  not?: SearchableBrandFilterInput | null,
};

export type SearchableBrandSortInput = {
  field?: SearchableBrandSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableBrandSortableFields {
  id = "id",
  wallet = "wallet",
  name = "name",
  rating = "rating",
  logo = "logo",
  completedPools = "completedPools",
  failedPools = "failedPools",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userWalletBrandsId = "userWalletBrandsId",
}


export type SearchableBrandAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableBrandAggregateField,
};

export enum SearchableBrandAggregateField {
  id = "id",
  wallet = "wallet",
  name = "name",
  rating = "rating",
  logo = "logo",
  completedPools = "completedPools",
  failedPools = "failedPools",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userWalletBrandsId = "userWalletBrandsId",
}


export type SearchableBrandConnection = {
  __typename: "SearchableBrandConnection",
  items:  Array<Brand | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableCreatePoolEventLogFilterInput = {
  id?: SearchableIDFilterInput | null,
  txID?: SearchableStringFilterInput | null,
  raw?: SearchableStringFilterInput | null,
  metaBlockID?: SearchableStringFilterInput | null,
  metaBlockNumber?: SearchableIntFilterInput | null,
  metaBlockTimestamp?: SearchableIntFilterInput | null,
  metaTxOrigin?: SearchableStringFilterInput | null,
  metaClauseIndex?: SearchableIntFilterInput | null,
  decodedGameId?: SearchableIntFilterInput | null,
  decodedPlayer?: SearchableStringFilterInput | null,
  decodedDateTime?: SearchableStringFilterInput | null,
  poolJsonData?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableCreatePoolEventLogFilterInput | null > | null,
  or?: Array< SearchableCreatePoolEventLogFilterInput | null > | null,
  not?: SearchableCreatePoolEventLogFilterInput | null,
};

export type SearchableCreatePoolEventLogSortInput = {
  field?: SearchableCreatePoolEventLogSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableCreatePoolEventLogSortableFields {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedGameId = "decodedGameId",
  decodedPlayer = "decodedPlayer",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableCreatePoolEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableCreatePoolEventLogAggregateField,
};

export enum SearchableCreatePoolEventLogAggregateField {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedGameId = "decodedGameId",
  decodedPlayer = "decodedPlayer",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableCreatePoolEventLogConnection = {
  __typename: "SearchableCreatePoolEventLogConnection",
  items:  Array<CreatePoolEventLog | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePlayerJoinedPoolEventLogFilterInput = {
  id?: SearchableIDFilterInput | null,
  txID?: SearchableStringFilterInput | null,
  raw?: SearchableStringFilterInput | null,
  metaBlockID?: SearchableStringFilterInput | null,
  metaBlockNumber?: SearchableIntFilterInput | null,
  metaBlockTimestamp?: SearchableIntFilterInput | null,
  metaTxOrigin?: SearchableStringFilterInput | null,
  metaClauseIndex?: SearchableIntFilterInput | null,
  decodedGameId?: SearchableIntFilterInput | null,
  decodedPlayer?: SearchableStringFilterInput | null,
  decodedDateTime?: SearchableStringFilterInput | null,
  poolJsonData?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchablePlayerJoinedPoolEventLogFilterInput | null > | null,
  or?: Array< SearchablePlayerJoinedPoolEventLogFilterInput | null > | null,
  not?: SearchablePlayerJoinedPoolEventLogFilterInput | null,
};

export type SearchablePlayerJoinedPoolEventLogSortInput = {
  field?: SearchablePlayerJoinedPoolEventLogSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePlayerJoinedPoolEventLogSortableFields {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedGameId = "decodedGameId",
  decodedPlayer = "decodedPlayer",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePlayerJoinedPoolEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePlayerJoinedPoolEventLogAggregateField,
};

export enum SearchablePlayerJoinedPoolEventLogAggregateField {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedGameId = "decodedGameId",
  decodedPlayer = "decodedPlayer",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePlayerJoinedPoolEventLogConnection = {
  __typename: "SearchablePlayerJoinedPoolEventLogConnection",
  items:  Array<PlayerJoinedPoolEventLog | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePlayerLeftPoolEventLogFilterInput = {
  id?: SearchableIDFilterInput | null,
  txID?: SearchableStringFilterInput | null,
  raw?: SearchableStringFilterInput | null,
  metaBlockID?: SearchableStringFilterInput | null,
  metaBlockNumber?: SearchableIntFilterInput | null,
  metaBlockTimestamp?: SearchableIntFilterInput | null,
  metaTxOrigin?: SearchableStringFilterInput | null,
  metaClauseIndex?: SearchableIntFilterInput | null,
  decodedGameId?: SearchableIntFilterInput | null,
  decodedPlayer?: SearchableStringFilterInput | null,
  decodedDateTime?: SearchableStringFilterInput | null,
  poolJsonData?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchablePlayerLeftPoolEventLogFilterInput | null > | null,
  or?: Array< SearchablePlayerLeftPoolEventLogFilterInput | null > | null,
  not?: SearchablePlayerLeftPoolEventLogFilterInput | null,
};

export type SearchablePlayerLeftPoolEventLogSortInput = {
  field?: SearchablePlayerLeftPoolEventLogSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePlayerLeftPoolEventLogSortableFields {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedGameId = "decodedGameId",
  decodedPlayer = "decodedPlayer",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePlayerLeftPoolEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePlayerLeftPoolEventLogAggregateField,
};

export enum SearchablePlayerLeftPoolEventLogAggregateField {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedGameId = "decodedGameId",
  decodedPlayer = "decodedPlayer",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePlayerLeftPoolEventLogConnection = {
  __typename: "SearchablePlayerLeftPoolEventLogConnection",
  items:  Array<PlayerLeftPoolEventLog | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePoolAwaitingExecutionEventLogFilterInput = {
  id?: SearchableIDFilterInput | null,
  txID?: SearchableStringFilterInput | null,
  raw?: SearchableStringFilterInput | null,
  metaBlockID?: SearchableStringFilterInput | null,
  metaBlockNumber?: SearchableIntFilterInput | null,
  metaBlockTimestamp?: SearchableIntFilterInput | null,
  metaTxOrigin?: SearchableStringFilterInput | null,
  metaClauseIndex?: SearchableIntFilterInput | null,
  decodedGameId?: SearchableIntFilterInput | null,
  decodedStatus?: SearchableStringFilterInput | null,
  decodedType?: SearchableStringFilterInput | null,
  decodedDateTime?: SearchableStringFilterInput | null,
  poolJsonData?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchablePoolAwaitingExecutionEventLogFilterInput | null > | null,
  or?: Array< SearchablePoolAwaitingExecutionEventLogFilterInput | null > | null,
  not?: SearchablePoolAwaitingExecutionEventLogFilterInput | null,
};

export type SearchablePoolAwaitingExecutionEventLogSortInput = {
  field?: SearchablePoolAwaitingExecutionEventLogSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePoolAwaitingExecutionEventLogSortableFields {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedGameId = "decodedGameId",
  decodedStatus = "decodedStatus",
  decodedType = "decodedType",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolAwaitingExecutionEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePoolAwaitingExecutionEventLogAggregateField,
};

export enum SearchablePoolAwaitingExecutionEventLogAggregateField {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedGameId = "decodedGameId",
  decodedStatus = "decodedStatus",
  decodedType = "decodedType",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolAwaitingExecutionEventLogConnection = {
  __typename: "SearchablePoolAwaitingExecutionEventLogConnection",
  items:  Array<PoolAwaitingExecutionEventLog | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePoolCompletedEventLogFilterInput = {
  id?: SearchableIDFilterInput | null,
  txID?: SearchableStringFilterInput | null,
  raw?: SearchableStringFilterInput | null,
  metaBlockID?: SearchableStringFilterInput | null,
  metaBlockNumber?: SearchableIntFilterInput | null,
  metaBlockTimestamp?: SearchableIntFilterInput | null,
  metaTxOrigin?: SearchableStringFilterInput | null,
  metaClauseIndex?: SearchableIntFilterInput | null,
  decodedWinningPayout?: SearchableStringFilterInput | null,
  decodedGameId?: SearchableIntFilterInput | null,
  decodedPlayer?: SearchableStringFilterInput | null,
  decodedAuditRecordDrawId?: SearchableStringFilterInput | null,
  decodedType?: SearchableStringFilterInput | null,
  decodedDateTime?: SearchableStringFilterInput | null,
  poolJsonData?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchablePoolCompletedEventLogFilterInput | null > | null,
  or?: Array< SearchablePoolCompletedEventLogFilterInput | null > | null,
  not?: SearchablePoolCompletedEventLogFilterInput | null,
};

export type SearchablePoolCompletedEventLogSortInput = {
  field?: SearchablePoolCompletedEventLogSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePoolCompletedEventLogSortableFields {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedWinningPayout = "decodedWinningPayout",
  decodedGameId = "decodedGameId",
  decodedPlayer = "decodedPlayer",
  decodedAuditRecordDrawId = "decodedAuditRecordDrawId",
  decodedType = "decodedType",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolCompletedEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePoolCompletedEventLogAggregateField,
};

export enum SearchablePoolCompletedEventLogAggregateField {
  id = "id",
  txID = "txID",
  raw = "raw",
  metaBlockID = "metaBlockID",
  metaBlockNumber = "metaBlockNumber",
  metaBlockTimestamp = "metaBlockTimestamp",
  metaTxOrigin = "metaTxOrigin",
  metaClauseIndex = "metaClauseIndex",
  decodedWinningPayout = "decodedWinningPayout",
  decodedGameId = "decodedGameId",
  decodedPlayer = "decodedPlayer",
  decodedAuditRecordDrawId = "decodedAuditRecordDrawId",
  decodedType = "decodedType",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolCompletedEventLogConnection = {
  __typename: "SearchablePoolCompletedEventLogConnection",
  items:  Array<PoolCompletedEventLog | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelFeedbackFilterInput = {
  id?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  commentType?: ModelfeedbackTypeInput | null,
  status?: ModelfeedbackStatusInput | null,
  wallet?: ModelStringInput | null,
  and?: Array< ModelFeedbackFilterInput | null > | null,
  or?: Array< ModelFeedbackFilterInput | null > | null,
  not?: ModelFeedbackFilterInput | null,
};

export type ModelFeedbackConnection = {
  __typename: "ModelFeedbackConnection",
  items:  Array<Feedback | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  wallet?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelErrorLogFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  stackTrace?: ModelStringInput | null,
  and?: Array< ModelErrorLogFilterInput | null > | null,
  or?: Array< ModelErrorLogFilterInput | null > | null,
  not?: ModelErrorLogFilterInput | null,
};

export type ModelErrorLogConnection = {
  __typename: "ModelErrorLogConnection",
  items:  Array<ErrorLog | null >,
  nextToken?: string | null,
};

export type ModelPoolPlayerFilterInput = {
  id?: ModelIDInput | null,
  userWalletId?: ModelStringInput | null,
  status?: ModelPlayerStatusInput | null,
  poolId?: ModelStringInput | null,
  and?: Array< ModelPoolPlayerFilterInput | null > | null,
  or?: Array< ModelPoolPlayerFilterInput | null > | null,
  not?: ModelPoolPlayerFilterInput | null,
  poolPlayersId?: ModelIDInput | null,
  poolPlayerUserWalletId?: ModelIDInput | null,
};

export type ModelLotteryPoolAttributesFilterInput = {
  id?: ModelIDInput | null,
  auditRecordDrawId?: ModelStringInput | null,
  isAuditEnabled?: ModelBooleanInput | null,
  randomOrgUrlForResults?: ModelStringInput | null,
  poolId?: ModelStringInput | null,
  and?: Array< ModelLotteryPoolAttributesFilterInput | null > | null,
  or?: Array< ModelLotteryPoolAttributesFilterInput | null > | null,
  not?: ModelLotteryPoolAttributesFilterInput | null,
  lotteryPoolAttributesPoolId?: ModelIDInput | null,
};

export type ModelLotteryPoolAttributesConnection = {
  __typename: "ModelLotteryPoolAttributesConnection",
  items:  Array<LotteryPoolAttributes | null >,
  nextToken?: string | null,
};

export type ModelApiPoolAttributesFilterInput = {
  id?: ModelIDInput | null,
  apiKey?: ModelStringInput | null,
  lockFundsDatetime?: ModelStringInput | null,
  executeWinnerDatetime?: ModelStringInput | null,
  apiUrlForResults?: ModelStringInput | null,
  verifiedUrlSchema?: ModelBooleanInput | null,
  poolCreatorPercentFeeToWithold?: ModelIntInput | null,
  apiWinnerOptionEntries?: ModelStringInput | null,
  apiwinnerResult?: ModelStringInput | null,
  poolApiDefaultSchema?: ModelStringInput | null,
  poolApiCustomSchema?: ModelStringInput | null,
  and?: Array< ModelApiPoolAttributesFilterInput | null > | null,
  or?: Array< ModelApiPoolAttributesFilterInput | null > | null,
  not?: ModelApiPoolAttributesFilterInput | null,
  apiPoolAttributesPoolId?: ModelIDInput | null,
};

export type ModelApiPoolAttributesConnection = {
  __typename: "ModelApiPoolAttributesConnection",
  items:  Array<ApiPoolAttributes | null >,
  nextToken?: string | null,
};

export type ModelPoolFilterInput = {
  id?: ModelIDInput | null,
  poolId?: ModelIntInput | null,
  poolTitle?: ModelStringInput | null,
  poolCategory?: ModelPoolCategoryInput | null,
  poolType?: ModelpoolTypeInput | null,
  poolStatus?: ModelStringInput | null,
  poolEntryFee?: ModelStringInput | null,
  poolTotal?: ModelStringInput | null,
  poolWinningPayout?: ModelStringInput | null,
  allowPlayerLeave?: ModelBooleanInput | null,
  and?: Array< ModelPoolFilterInput | null > | null,
  or?: Array< ModelPoolFilterInput | null > | null,
  not?: ModelPoolFilterInput | null,
  poolPoolCreatorId?: ModelIDInput | null,
  poolApiPoolAttributesId?: ModelIDInput | null,
  poolLotteryPoolAttributesId?: ModelIDInput | null,
};

export type ModelPoolConnection = {
  __typename: "ModelPoolConnection",
  items:  Array<Pool | null >,
  nextToken?: string | null,
};

export type ModelPoolSuccessfullBlockEventsProcessedFilterInput = {
  id?: ModelIDInput | null,
  positionField?: ModelIntInput | null,
  lambdaProcessorDecisionCheckForNextBlocknumber?: ModelIntInput | null,
  and?: Array< ModelPoolSuccessfullBlockEventsProcessedFilterInput | null > | null,
  or?: Array< ModelPoolSuccessfullBlockEventsProcessedFilterInput | null > | null,
  not?: ModelPoolSuccessfullBlockEventsProcessedFilterInput | null,
};

export type ModelPoolSuccessfullBlockEventsProcessedConnection = {
  __typename: "ModelPoolSuccessfullBlockEventsProcessedConnection",
  items:  Array<PoolSuccessfullBlockEventsProcessed | null >,
  nextToken?: string | null,
};

export type ModelPoolSummariesFilterInput = {
  id?: ModelIDInput | null,
  totalCompletedGames?: ModelIntInput | null,
  totalPlayers?: ModelIntInput | null,
  totalPayouts?: ModelIntInput | null,
  highestSingleWinnerPayout?: ModelIntInput | null,
  highestPoolPayout?: ModelIntInput | null,
  and?: Array< ModelPoolSummariesFilterInput | null > | null,
  or?: Array< ModelPoolSummariesFilterInput | null > | null,
  not?: ModelPoolSummariesFilterInput | null,
};

export type ModelPoolSummariesConnection = {
  __typename: "ModelPoolSummariesConnection",
  items:  Array<PoolSummaries | null >,
  nextToken?: string | null,
};

export type ModelUserWalletFilterInput = {
  id?: ModelIDInput | null,
  wallet?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  chatlogo?: ModelStringInput | null,
  and?: Array< ModelUserWalletFilterInput | null > | null,
  or?: Array< ModelUserWalletFilterInput | null > | null,
  not?: ModelUserWalletFilterInput | null,
};

export type ModelUserWalletConnection = {
  __typename: "ModelUserWalletConnection",
  items:  Array<UserWallet | null >,
  nextToken?: string | null,
};

export type ModelBrandFilterInput = {
  id?: ModelIDInput | null,
  wallet?: ModelStringInput | null,
  name?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  logo?: ModelStringInput | null,
  completedPools?: ModelIntInput | null,
  failedPools?: ModelIntInput | null,
  and?: Array< ModelBrandFilterInput | null > | null,
  or?: Array< ModelBrandFilterInput | null > | null,
  not?: ModelBrandFilterInput | null,
  userWalletBrandsId?: ModelIDInput | null,
};

export type ModelCreatePoolEventLogFilterInput = {
  id?: ModelIDInput | null,
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelCreatePoolEventLogFilterInput | null > | null,
  or?: Array< ModelCreatePoolEventLogFilterInput | null > | null,
  not?: ModelCreatePoolEventLogFilterInput | null,
};

export type ModelCreatePoolEventLogConnection = {
  __typename: "ModelCreatePoolEventLogConnection",
  items:  Array<CreatePoolEventLog | null >,
  nextToken?: string | null,
};

export type ModelPlayerJoinedPoolEventLogFilterInput = {
  id?: ModelIDInput | null,
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPlayerJoinedPoolEventLogFilterInput | null > | null,
  or?: Array< ModelPlayerJoinedPoolEventLogFilterInput | null > | null,
  not?: ModelPlayerJoinedPoolEventLogFilterInput | null,
};

export type ModelPlayerJoinedPoolEventLogConnection = {
  __typename: "ModelPlayerJoinedPoolEventLogConnection",
  items:  Array<PlayerJoinedPoolEventLog | null >,
  nextToken?: string | null,
};

export type ModelPlayerLeftPoolEventLogFilterInput = {
  id?: ModelIDInput | null,
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPlayerLeftPoolEventLogFilterInput | null > | null,
  or?: Array< ModelPlayerLeftPoolEventLogFilterInput | null > | null,
  not?: ModelPlayerLeftPoolEventLogFilterInput | null,
};

export type ModelPlayerLeftPoolEventLogConnection = {
  __typename: "ModelPlayerLeftPoolEventLogConnection",
  items:  Array<PlayerLeftPoolEventLog | null >,
  nextToken?: string | null,
};

export type ModelPoolAwaitingExecutionEventLogFilterInput = {
  id?: ModelIDInput | null,
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedStatus?: ModelStringInput | null,
  decodedType?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPoolAwaitingExecutionEventLogFilterInput | null > | null,
  or?: Array< ModelPoolAwaitingExecutionEventLogFilterInput | null > | null,
  not?: ModelPoolAwaitingExecutionEventLogFilterInput | null,
};

export type ModelPoolAwaitingExecutionEventLogConnection = {
  __typename: "ModelPoolAwaitingExecutionEventLogConnection",
  items:  Array<PoolAwaitingExecutionEventLog | null >,
  nextToken?: string | null,
};

export type ModelPoolCompletedEventLogFilterInput = {
  id?: ModelIDInput | null,
  txID?: ModelStringInput | null,
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedWinningPayout?: ModelStringInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedAuditRecordDrawId?: ModelStringInput | null,
  decodedType?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPoolCompletedEventLogFilterInput | null > | null,
  or?: Array< ModelPoolCompletedEventLogFilterInput | null > | null,
  not?: ModelPoolCompletedEventLogFilterInput | null,
};

export type ModelPoolCompletedEventLogConnection = {
  __typename: "ModelPoolCompletedEventLogConnection",
  items:  Array<PoolCompletedEventLog | null >,
  nextToken?: string | null,
};

export type ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyConditionInput = {
  eq?: ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyInput | null,
  le?: ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyInput | null,
  lt?: ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyInput | null,
  ge?: ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyInput | null,
  gt?: ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyInput | null,
  between?: Array< ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyInput | null > | null,
  beginsWith?: ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyInput | null,
};

export type ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyInput = {
  poolId?: string | null,
  status?: PlayerStatus | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateIngestionEventMutationVariables = {
  input: CreateIngestionBucketEventInput,
};

export type CreateIngestionEventMutation = {
  createIngestionEvent?:  {
    __typename: "IngestionBucketResponse",
    s3: string,
    sqs: string,
  } | null,
};

export type CreateFeedbackMutationVariables = {
  input: CreateFeedbackInput,
  condition?: ModelFeedbackConditionInput | null,
};

export type CreateFeedbackMutation = {
  createFeedback?:  {
    __typename: "Feedback",
    id: string,
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeedbackMutationVariables = {
  input: UpdateFeedbackInput,
  condition?: ModelFeedbackConditionInput | null,
};

export type UpdateFeedbackMutation = {
  updateFeedback?:  {
    __typename: "Feedback",
    id: string,
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeedbackMutationVariables = {
  input: DeleteFeedbackInput,
  condition?: ModelFeedbackConditionInput | null,
};

export type DeleteFeedbackMutation = {
  deleteFeedback?:  {
    __typename: "Feedback",
    id: string,
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateErrorLogMutationVariables = {
  input: CreateErrorLogInput,
  condition?: ModelErrorLogConditionInput | null,
};

export type CreateErrorLogMutation = {
  createErrorLog?:  {
    __typename: "ErrorLog",
    id: string,
    createdAt: string,
    stackTrace: string,
    updatedAt: string,
  } | null,
};

export type UpdateErrorLogMutationVariables = {
  input: UpdateErrorLogInput,
  condition?: ModelErrorLogConditionInput | null,
};

export type UpdateErrorLogMutation = {
  updateErrorLog?:  {
    __typename: "ErrorLog",
    id: string,
    createdAt: string,
    stackTrace: string,
    updatedAt: string,
  } | null,
};

export type DeleteErrorLogMutationVariables = {
  input: DeleteErrorLogInput,
  condition?: ModelErrorLogConditionInput | null,
};

export type DeleteErrorLogMutation = {
  deleteErrorLog?:  {
    __typename: "ErrorLog",
    id: string,
    createdAt: string,
    stackTrace: string,
    updatedAt: string,
  } | null,
};

export type CreatePoolPlayerMutationVariables = {
  input: CreatePoolPlayerInput,
  condition?: ModelPoolPlayerConditionInput | null,
};

export type CreatePoolPlayerMutation = {
  createPoolPlayer?:  {
    __typename: "PoolPlayer",
    id: string,
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    poolPlayersId?: string | null,
    poolPlayerUserWalletId: string,
  } | null,
};

export type UpdatePoolPlayerMutationVariables = {
  input: UpdatePoolPlayerInput,
  condition?: ModelPoolPlayerConditionInput | null,
};

export type UpdatePoolPlayerMutation = {
  updatePoolPlayer?:  {
    __typename: "PoolPlayer",
    id: string,
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    poolPlayersId?: string | null,
    poolPlayerUserWalletId: string,
  } | null,
};

export type DeletePoolPlayerMutationVariables = {
  input: DeletePoolPlayerInput,
  condition?: ModelPoolPlayerConditionInput | null,
};

export type DeletePoolPlayerMutation = {
  deletePoolPlayer?:  {
    __typename: "PoolPlayer",
    id: string,
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    poolPlayersId?: string | null,
    poolPlayerUserWalletId: string,
  } | null,
};

export type CreateLotteryPoolAttributesMutationVariables = {
  input: CreateLotteryPoolAttributesInput,
  condition?: ModelLotteryPoolAttributesConditionInput | null,
};

export type CreateLotteryPoolAttributesMutation = {
  createLotteryPoolAttributes?:  {
    __typename: "LotteryPoolAttributes",
    id: string,
    auditRecordDrawId?: string | null,
    isAuditEnabled: boolean,
    randomOrgUrlForResults?: string | null,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    lotteryPoolAttributesPoolId: string,
  } | null,
};

export type UpdateLotteryPoolAttributesMutationVariables = {
  input: UpdateLotteryPoolAttributesInput,
  condition?: ModelLotteryPoolAttributesConditionInput | null,
};

export type UpdateLotteryPoolAttributesMutation = {
  updateLotteryPoolAttributes?:  {
    __typename: "LotteryPoolAttributes",
    id: string,
    auditRecordDrawId?: string | null,
    isAuditEnabled: boolean,
    randomOrgUrlForResults?: string | null,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    lotteryPoolAttributesPoolId: string,
  } | null,
};

export type DeleteLotteryPoolAttributesMutationVariables = {
  input: DeleteLotteryPoolAttributesInput,
  condition?: ModelLotteryPoolAttributesConditionInput | null,
};

export type DeleteLotteryPoolAttributesMutation = {
  deleteLotteryPoolAttributes?:  {
    __typename: "LotteryPoolAttributes",
    id: string,
    auditRecordDrawId?: string | null,
    isAuditEnabled: boolean,
    randomOrgUrlForResults?: string | null,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    lotteryPoolAttributesPoolId: string,
  } | null,
};

export type CreateApiPoolAttributesMutationVariables = {
  input: CreateApiPoolAttributesInput,
  condition?: ModelApiPoolAttributesConditionInput | null,
};

export type CreateApiPoolAttributesMutation = {
  createApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
    apiKey: string,
    lockFundsDatetime: string,
    executeWinnerDatetime: string,
    apiUrlForResults: string,
    verifiedUrlSchema: boolean,
    poolCreatorPercentFeeToWithold: number,
    apiWinnerOptionEntries: string,
    apiwinnerResult: string,
    poolApiDefaultSchema: string,
    poolApiCustomSchema?: string | null,
    pool?:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId?: string | null,
  } | null,
};

export type UpdateApiPoolAttributesMutationVariables = {
  input: UpdateApiPoolAttributesInput,
  condition?: ModelApiPoolAttributesConditionInput | null,
};

export type UpdateApiPoolAttributesMutation = {
  updateApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
    apiKey: string,
    lockFundsDatetime: string,
    executeWinnerDatetime: string,
    apiUrlForResults: string,
    verifiedUrlSchema: boolean,
    poolCreatorPercentFeeToWithold: number,
    apiWinnerOptionEntries: string,
    apiwinnerResult: string,
    poolApiDefaultSchema: string,
    poolApiCustomSchema?: string | null,
    pool?:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId?: string | null,
  } | null,
};

export type DeleteApiPoolAttributesMutationVariables = {
  input: DeleteApiPoolAttributesInput,
  condition?: ModelApiPoolAttributesConditionInput | null,
};

export type DeleteApiPoolAttributesMutation = {
  deleteApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
    apiKey: string,
    lockFundsDatetime: string,
    executeWinnerDatetime: string,
    apiUrlForResults: string,
    verifiedUrlSchema: boolean,
    poolCreatorPercentFeeToWithold: number,
    apiWinnerOptionEntries: string,
    apiwinnerResult: string,
    poolApiDefaultSchema: string,
    poolApiCustomSchema?: string | null,
    pool?:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId?: string | null,
  } | null,
};

export type CreatePoolMutationVariables = {
  input: CreatePoolInput,
  condition?: ModelPoolConditionInput | null,
};

export type CreatePoolMutation = {
  createPool?:  {
    __typename: "Pool",
    id: string,
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: string,
    poolEntryFee: string,
    poolTotal: string,
    poolWinningPayout: string,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
      id: string,
      apiKey: string,
      lockFundsDatetime: string,
      executeWinnerDatetime: string,
      apiUrlForResults: string,
      verifiedUrlSchema: boolean,
      poolCreatorPercentFeeToWithold: number,
      apiWinnerOptionEntries: string,
      apiwinnerResult: string,
      poolApiDefaultSchema: string,
      poolApiCustomSchema?: string | null,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId?: string | null,
    } | null,
    lotteryPoolAttributes?:  {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
    poolLotteryPoolAttributesId?: string | null,
  } | null,
};

export type UpdatePoolMutationVariables = {
  input: UpdatePoolInput,
  condition?: ModelPoolConditionInput | null,
};

export type UpdatePoolMutation = {
  updatePool?:  {
    __typename: "Pool",
    id: string,
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: string,
    poolEntryFee: string,
    poolTotal: string,
    poolWinningPayout: string,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
      id: string,
      apiKey: string,
      lockFundsDatetime: string,
      executeWinnerDatetime: string,
      apiUrlForResults: string,
      verifiedUrlSchema: boolean,
      poolCreatorPercentFeeToWithold: number,
      apiWinnerOptionEntries: string,
      apiwinnerResult: string,
      poolApiDefaultSchema: string,
      poolApiCustomSchema?: string | null,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId?: string | null,
    } | null,
    lotteryPoolAttributes?:  {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
    poolLotteryPoolAttributesId?: string | null,
  } | null,
};

export type DeletePoolMutationVariables = {
  input: DeletePoolInput,
  condition?: ModelPoolConditionInput | null,
};

export type DeletePoolMutation = {
  deletePool?:  {
    __typename: "Pool",
    id: string,
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: string,
    poolEntryFee: string,
    poolTotal: string,
    poolWinningPayout: string,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
      id: string,
      apiKey: string,
      lockFundsDatetime: string,
      executeWinnerDatetime: string,
      apiUrlForResults: string,
      verifiedUrlSchema: boolean,
      poolCreatorPercentFeeToWithold: number,
      apiWinnerOptionEntries: string,
      apiwinnerResult: string,
      poolApiDefaultSchema: string,
      poolApiCustomSchema?: string | null,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId?: string | null,
    } | null,
    lotteryPoolAttributes?:  {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
    poolLotteryPoolAttributesId?: string | null,
  } | null,
};

export type CreatePoolSuccessfullBlockEventsProcessedMutationVariables = {
  input: CreatePoolSuccessfullBlockEventsProcessedInput,
  condition?: ModelPoolSuccessfullBlockEventsProcessedConditionInput | null,
};

export type CreatePoolSuccessfullBlockEventsProcessedMutation = {
  createPoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    positionField: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePoolSuccessfullBlockEventsProcessedMutationVariables = {
  input: UpdatePoolSuccessfullBlockEventsProcessedInput,
  condition?: ModelPoolSuccessfullBlockEventsProcessedConditionInput | null,
};

export type UpdatePoolSuccessfullBlockEventsProcessedMutation = {
  updatePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    positionField: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePoolSuccessfullBlockEventsProcessedMutationVariables = {
  input: DeletePoolSuccessfullBlockEventsProcessedInput,
  condition?: ModelPoolSuccessfullBlockEventsProcessedConditionInput | null,
};

export type DeletePoolSuccessfullBlockEventsProcessedMutation = {
  deletePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    positionField: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePoolSummariesMutationVariables = {
  input: CreatePoolSummariesInput,
  condition?: ModelPoolSummariesConditionInput | null,
};

export type CreatePoolSummariesMutation = {
  createPoolSummaries?:  {
    __typename: "PoolSummaries",
    id: string,
    totalCompletedGames: number,
    totalPlayers: number,
    totalPayouts: number,
    highestSingleWinnerPayout: number,
    highestPoolPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePoolSummariesMutationVariables = {
  input: UpdatePoolSummariesInput,
  condition?: ModelPoolSummariesConditionInput | null,
};

export type UpdatePoolSummariesMutation = {
  updatePoolSummaries?:  {
    __typename: "PoolSummaries",
    id: string,
    totalCompletedGames: number,
    totalPlayers: number,
    totalPayouts: number,
    highestSingleWinnerPayout: number,
    highestPoolPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePoolSummariesMutationVariables = {
  input: DeletePoolSummariesInput,
  condition?: ModelPoolSummariesConditionInput | null,
};

export type DeletePoolSummariesMutation = {
  deletePoolSummaries?:  {
    __typename: "PoolSummaries",
    id: string,
    totalCompletedGames: number,
    totalPlayers: number,
    totalPayouts: number,
    highestSingleWinnerPayout: number,
    highestPoolPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserWalletMutationVariables = {
  input: CreateUserWalletInput,
  condition?: ModelUserWalletConditionInput | null,
};

export type CreateUserWalletMutation = {
  createUserWallet?:  {
    __typename: "UserWallet",
    id: string,
    wallet: string,
    nickname?: string | null,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserWalletMutationVariables = {
  input: UpdateUserWalletInput,
  condition?: ModelUserWalletConditionInput | null,
};

export type UpdateUserWalletMutation = {
  updateUserWallet?:  {
    __typename: "UserWallet",
    id: string,
    wallet: string,
    nickname?: string | null,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserWalletMutationVariables = {
  input: DeleteUserWalletInput,
  condition?: ModelUserWalletConditionInput | null,
};

export type DeleteUserWalletMutation = {
  deleteUserWallet?:  {
    __typename: "UserWallet",
    id: string,
    wallet: string,
    nickname?: string | null,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBrandMutationVariables = {
  input: CreateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type CreateBrandMutation = {
  createBrand?:  {
    __typename: "Brand",
    id: string,
    wallet: string,
    name: string,
    rating: number,
    logo?: string | null,
    completedPools: number,
    failedPools: number,
    createdAt: string,
    updatedAt: string,
    userWalletBrandsId?: string | null,
  } | null,
};

export type UpdateBrandMutationVariables = {
  input: UpdateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type UpdateBrandMutation = {
  updateBrand?:  {
    __typename: "Brand",
    id: string,
    wallet: string,
    name: string,
    rating: number,
    logo?: string | null,
    completedPools: number,
    failedPools: number,
    createdAt: string,
    updatedAt: string,
    userWalletBrandsId?: string | null,
  } | null,
};

export type DeleteBrandMutationVariables = {
  input: DeleteBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type DeleteBrandMutation = {
  deleteBrand?:  {
    __typename: "Brand",
    id: string,
    wallet: string,
    name: string,
    rating: number,
    logo?: string | null,
    completedPools: number,
    failedPools: number,
    createdAt: string,
    updatedAt: string,
    userWalletBrandsId?: string | null,
  } | null,
};

export type CreateCreatePoolEventLogMutationVariables = {
  input: CreateCreatePoolEventLogInput,
  condition?: ModelCreatePoolEventLogConditionInput | null,
};

export type CreateCreatePoolEventLogMutation = {
  createCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCreatePoolEventLogMutationVariables = {
  input: UpdateCreatePoolEventLogInput,
  condition?: ModelCreatePoolEventLogConditionInput | null,
};

export type UpdateCreatePoolEventLogMutation = {
  updateCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCreatePoolEventLogMutationVariables = {
  input: DeleteCreatePoolEventLogInput,
  condition?: ModelCreatePoolEventLogConditionInput | null,
};

export type DeleteCreatePoolEventLogMutation = {
  deleteCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerJoinedPoolEventLogMutationVariables = {
  input: CreatePlayerJoinedPoolEventLogInput,
  condition?: ModelPlayerJoinedPoolEventLogConditionInput | null,
};

export type CreatePlayerJoinedPoolEventLogMutation = {
  createPlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerJoinedPoolEventLogMutationVariables = {
  input: UpdatePlayerJoinedPoolEventLogInput,
  condition?: ModelPlayerJoinedPoolEventLogConditionInput | null,
};

export type UpdatePlayerJoinedPoolEventLogMutation = {
  updatePlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerJoinedPoolEventLogMutationVariables = {
  input: DeletePlayerJoinedPoolEventLogInput,
  condition?: ModelPlayerJoinedPoolEventLogConditionInput | null,
};

export type DeletePlayerJoinedPoolEventLogMutation = {
  deletePlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerLeftPoolEventLogMutationVariables = {
  input: CreatePlayerLeftPoolEventLogInput,
  condition?: ModelPlayerLeftPoolEventLogConditionInput | null,
};

export type CreatePlayerLeftPoolEventLogMutation = {
  createPlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerLeftPoolEventLogMutationVariables = {
  input: UpdatePlayerLeftPoolEventLogInput,
  condition?: ModelPlayerLeftPoolEventLogConditionInput | null,
};

export type UpdatePlayerLeftPoolEventLogMutation = {
  updatePlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerLeftPoolEventLogMutationVariables = {
  input: DeletePlayerLeftPoolEventLogInput,
  condition?: ModelPlayerLeftPoolEventLogConditionInput | null,
};

export type DeletePlayerLeftPoolEventLogMutation = {
  deletePlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePoolAwaitingExecutionEventLogMutationVariables = {
  input: CreatePoolAwaitingExecutionEventLogInput,
  condition?: ModelPoolAwaitingExecutionEventLogConditionInput | null,
};

export type CreatePoolAwaitingExecutionEventLogMutation = {
  createPoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedStatus: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePoolAwaitingExecutionEventLogMutationVariables = {
  input: UpdatePoolAwaitingExecutionEventLogInput,
  condition?: ModelPoolAwaitingExecutionEventLogConditionInput | null,
};

export type UpdatePoolAwaitingExecutionEventLogMutation = {
  updatePoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedStatus: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePoolAwaitingExecutionEventLogMutationVariables = {
  input: DeletePoolAwaitingExecutionEventLogInput,
  condition?: ModelPoolAwaitingExecutionEventLogConditionInput | null,
};

export type DeletePoolAwaitingExecutionEventLogMutation = {
  deletePoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedStatus: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePoolCompletedEventLogMutationVariables = {
  input: CreatePoolCompletedEventLogInput,
  condition?: ModelPoolCompletedEventLogConditionInput | null,
};

export type CreatePoolCompletedEventLogMutation = {
  createPoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedWinningPayout: string,
    decodedGameId: number,
    decodedPlayer: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePoolCompletedEventLogMutationVariables = {
  input: UpdatePoolCompletedEventLogInput,
  condition?: ModelPoolCompletedEventLogConditionInput | null,
};

export type UpdatePoolCompletedEventLogMutation = {
  updatePoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedWinningPayout: string,
    decodedGameId: number,
    decodedPlayer: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePoolCompletedEventLogMutationVariables = {
  input: DeletePoolCompletedEventLogInput,
  condition?: ModelPoolCompletedEventLogConditionInput | null,
};

export type DeletePoolCompletedEventLogMutation = {
  deletePoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedWinningPayout: string,
    decodedGameId: number,
    decodedPlayer: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SearchFeedbacksQueryVariables = {
  filter?: SearchableFeedbackFilterInput | null,
  sort?: Array< SearchableFeedbackSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableFeedbackAggregationInput | null > | null,
};

export type SearchFeedbacksQuery = {
  searchFeedbacks?:  {
    __typename: "SearchableFeedbackConnection",
    items:  Array< {
      __typename: "Feedback",
      id: string,
      comment: string,
      commentType: feedbackType,
      status: feedbackStatus,
      wallet: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchMessagesQueryVariables = {
  filter?: SearchableMessageFilterInput | null,
  sort?: Array< SearchableMessageSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableMessageAggregationInput | null > | null,
};

export type SearchMessagesQuery = {
  searchMessages?:  {
    __typename: "SearchableMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      wallet: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchPoolPlayersQueryVariables = {
  filter?: SearchablePoolPlayerFilterInput | null,
  sort?: Array< SearchablePoolPlayerSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePoolPlayerAggregationInput | null > | null,
};

export type SearchPoolPlayersQuery = {
  searchPoolPlayers?:  {
    __typename: "SearchablePoolPlayerConnection",
    items:  Array< {
      __typename: "PoolPlayer",
      id: string,
      userWalletId: string,
      status: PlayerStatus,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      poolPlayersId?: string | null,
      poolPlayerUserWalletId: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchLotteryPoolAttributesQueryVariables = {
  filter?: SearchableLotteryPoolAttributesFilterInput | null,
  sort?: Array< SearchableLotteryPoolAttributesSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableLotteryPoolAttributesAggregationInput | null > | null,
};

export type SearchLotteryPoolAttributesQuery = {
  searchLotteryPoolAttributes?:  {
    __typename: "SearchableLotteryPoolAttributesConnection",
    items:  Array< {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchApiPoolAttributesQueryVariables = {
  filter?: SearchableApiPoolAttributesFilterInput | null,
  sort?: Array< SearchableApiPoolAttributesSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableApiPoolAttributesAggregationInput | null > | null,
};

export type SearchApiPoolAttributesQuery = {
  searchApiPoolAttributes?:  {
    __typename: "SearchableApiPoolAttributesConnection",
    items:  Array< {
      __typename: "ApiPoolAttributes",
      id: string,
      apiKey: string,
      lockFundsDatetime: string,
      executeWinnerDatetime: string,
      apiUrlForResults: string,
      verifiedUrlSchema: boolean,
      poolCreatorPercentFeeToWithold: number,
      apiWinnerOptionEntries: string,
      apiwinnerResult: string,
      poolApiDefaultSchema: string,
      poolApiCustomSchema?: string | null,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchPoolsQueryVariables = {
  filter?: SearchablePoolFilterInput | null,
  sort?: Array< SearchablePoolSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePoolAggregationInput | null > | null,
};

export type SearchPoolsQuery = {
  searchPools?:  {
    __typename: "SearchablePoolConnection",
    items:  Array< {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchPoolSummariesQueryVariables = {
  filter?: SearchablePoolSummariesFilterInput | null,
  sort?: Array< SearchablePoolSummariesSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePoolSummariesAggregationInput | null > | null,
};

export type SearchPoolSummariesQuery = {
  searchPoolSummaries?:  {
    __typename: "SearchablePoolSummariesConnection",
    items:  Array< {
      __typename: "PoolSummaries",
      id: string,
      totalCompletedGames: number,
      totalPlayers: number,
      totalPayouts: number,
      highestSingleWinnerPayout: number,
      highestPoolPayout: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchUserWalletsQueryVariables = {
  filter?: SearchableUserWalletFilterInput | null,
  sort?: Array< SearchableUserWalletSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUserWalletAggregationInput | null > | null,
};

export type SearchUserWalletsQuery = {
  searchUserWallets?:  {
    __typename: "SearchableUserWalletConnection",
    items:  Array< {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchBrandsQueryVariables = {
  filter?: SearchableBrandFilterInput | null,
  sort?: Array< SearchableBrandSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableBrandAggregationInput | null > | null,
};

export type SearchBrandsQuery = {
  searchBrands?:  {
    __typename: "SearchableBrandConnection",
    items:  Array< {
      __typename: "Brand",
      id: string,
      wallet: string,
      name: string,
      rating: number,
      logo?: string | null,
      completedPools: number,
      failedPools: number,
      createdAt: string,
      updatedAt: string,
      userWalletBrandsId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchCreatePoolEventLogsQueryVariables = {
  filter?: SearchableCreatePoolEventLogFilterInput | null,
  sort?: Array< SearchableCreatePoolEventLogSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableCreatePoolEventLogAggregationInput | null > | null,
};

export type SearchCreatePoolEventLogsQuery = {
  searchCreatePoolEventLogs?:  {
    __typename: "SearchableCreatePoolEventLogConnection",
    items:  Array< {
      __typename: "CreatePoolEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedPlayer: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchPlayerJoinedPoolEventLogsQueryVariables = {
  filter?: SearchablePlayerJoinedPoolEventLogFilterInput | null,
  sort?: Array< SearchablePlayerJoinedPoolEventLogSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePlayerJoinedPoolEventLogAggregationInput | null > | null,
};

export type SearchPlayerJoinedPoolEventLogsQuery = {
  searchPlayerJoinedPoolEventLogs?:  {
    __typename: "SearchablePlayerJoinedPoolEventLogConnection",
    items:  Array< {
      __typename: "PlayerJoinedPoolEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedPlayer: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchPlayerLeftPoolEventLogsQueryVariables = {
  filter?: SearchablePlayerLeftPoolEventLogFilterInput | null,
  sort?: Array< SearchablePlayerLeftPoolEventLogSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePlayerLeftPoolEventLogAggregationInput | null > | null,
};

export type SearchPlayerLeftPoolEventLogsQuery = {
  searchPlayerLeftPoolEventLogs?:  {
    __typename: "SearchablePlayerLeftPoolEventLogConnection",
    items:  Array< {
      __typename: "PlayerLeftPoolEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedPlayer: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchPoolAwaitingExecutionEventLogsQueryVariables = {
  filter?: SearchablePoolAwaitingExecutionEventLogFilterInput | null,
  sort?: Array< SearchablePoolAwaitingExecutionEventLogSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePoolAwaitingExecutionEventLogAggregationInput | null > | null,
};

export type SearchPoolAwaitingExecutionEventLogsQuery = {
  searchPoolAwaitingExecutionEventLogs?:  {
    __typename: "SearchablePoolAwaitingExecutionEventLogConnection",
    items:  Array< {
      __typename: "PoolAwaitingExecutionEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedStatus: string,
      decodedType: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchPoolCompletedEventLogsQueryVariables = {
  filter?: SearchablePoolCompletedEventLogFilterInput | null,
  sort?: Array< SearchablePoolCompletedEventLogSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePoolCompletedEventLogAggregationInput | null > | null,
};

export type SearchPoolCompletedEventLogsQuery = {
  searchPoolCompletedEventLogs?:  {
    __typename: "SearchablePoolCompletedEventLogConnection",
    items:  Array< {
      __typename: "PoolCompletedEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedWinningPayout: string,
      decodedGameId: number,
      decodedPlayer: string,
      decodedAuditRecordDrawId: string,
      decodedType: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetFeedbackQueryVariables = {
  id: string,
};

export type GetFeedbackQuery = {
  getFeedback?:  {
    __typename: "Feedback",
    id: string,
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeedbacksQueryVariables = {
  filter?: ModelFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedbacksQuery = {
  listFeedbacks?:  {
    __typename: "ModelFeedbackConnection",
    items:  Array< {
      __typename: "Feedback",
      id: string,
      comment: string,
      commentType: feedbackType,
      status: feedbackStatus,
      wallet: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      wallet: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetErrorLogQueryVariables = {
  id: string,
};

export type GetErrorLogQuery = {
  getErrorLog?:  {
    __typename: "ErrorLog",
    id: string,
    createdAt: string,
    stackTrace: string,
    updatedAt: string,
  } | null,
};

export type ListErrorLogsQueryVariables = {
  filter?: ModelErrorLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListErrorLogsQuery = {
  listErrorLogs?:  {
    __typename: "ModelErrorLogConnection",
    items:  Array< {
      __typename: "ErrorLog",
      id: string,
      createdAt: string,
      stackTrace: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolPlayerQueryVariables = {
  id: string,
};

export type GetPoolPlayerQuery = {
  getPoolPlayer?:  {
    __typename: "PoolPlayer",
    id: string,
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    poolPlayersId?: string | null,
    poolPlayerUserWalletId: string,
  } | null,
};

export type ListPoolPlayersQueryVariables = {
  filter?: ModelPoolPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPoolPlayersQuery = {
  listPoolPlayers?:  {
    __typename: "ModelPoolPlayerConnection",
    items:  Array< {
      __typename: "PoolPlayer",
      id: string,
      userWalletId: string,
      status: PlayerStatus,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      poolPlayersId?: string | null,
      poolPlayerUserWalletId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLotteryPoolAttributesQueryVariables = {
  id: string,
};

export type GetLotteryPoolAttributesQuery = {
  getLotteryPoolAttributes?:  {
    __typename: "LotteryPoolAttributes",
    id: string,
    auditRecordDrawId?: string | null,
    isAuditEnabled: boolean,
    randomOrgUrlForResults?: string | null,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    lotteryPoolAttributesPoolId: string,
  } | null,
};

export type ListLotteryPoolAttributesQueryVariables = {
  filter?: ModelLotteryPoolAttributesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLotteryPoolAttributesQuery = {
  listLotteryPoolAttributes?:  {
    __typename: "ModelLotteryPoolAttributesConnection",
    items:  Array< {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApiPoolAttributesQueryVariables = {
  id: string,
};

export type GetApiPoolAttributesQuery = {
  getApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
    apiKey: string,
    lockFundsDatetime: string,
    executeWinnerDatetime: string,
    apiUrlForResults: string,
    verifiedUrlSchema: boolean,
    poolCreatorPercentFeeToWithold: number,
    apiWinnerOptionEntries: string,
    apiwinnerResult: string,
    poolApiDefaultSchema: string,
    poolApiCustomSchema?: string | null,
    pool?:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId?: string | null,
  } | null,
};

export type ListApiPoolAttributesQueryVariables = {
  filter?: ModelApiPoolAttributesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApiPoolAttributesQuery = {
  listApiPoolAttributes?:  {
    __typename: "ModelApiPoolAttributesConnection",
    items:  Array< {
      __typename: "ApiPoolAttributes",
      id: string,
      apiKey: string,
      lockFundsDatetime: string,
      executeWinnerDatetime: string,
      apiUrlForResults: string,
      verifiedUrlSchema: boolean,
      poolCreatorPercentFeeToWithold: number,
      apiWinnerOptionEntries: string,
      apiwinnerResult: string,
      poolApiDefaultSchema: string,
      poolApiCustomSchema?: string | null,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolQueryVariables = {
  id: string,
};

export type GetPoolQuery = {
  getPool?:  {
    __typename: "Pool",
    id: string,
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: string,
    poolEntryFee: string,
    poolTotal: string,
    poolWinningPayout: string,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
      id: string,
      apiKey: string,
      lockFundsDatetime: string,
      executeWinnerDatetime: string,
      apiUrlForResults: string,
      verifiedUrlSchema: boolean,
      poolCreatorPercentFeeToWithold: number,
      apiWinnerOptionEntries: string,
      apiwinnerResult: string,
      poolApiDefaultSchema: string,
      poolApiCustomSchema?: string | null,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId?: string | null,
    } | null,
    lotteryPoolAttributes?:  {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
    poolLotteryPoolAttributesId?: string | null,
  } | null,
};

export type ListPoolsQueryVariables = {
  filter?: ModelPoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPoolsQuery = {
  listPools?:  {
    __typename: "ModelPoolConnection",
    items:  Array< {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolSuccessfullBlockEventsProcessedQueryVariables = {
  id: string,
};

export type GetPoolSuccessfullBlockEventsProcessedQuery = {
  getPoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    positionField: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPoolSuccessfullBlockEventsProcessedsQueryVariables = {
  filter?: ModelPoolSuccessfullBlockEventsProcessedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPoolSuccessfullBlockEventsProcessedsQuery = {
  listPoolSuccessfullBlockEventsProcesseds?:  {
    __typename: "ModelPoolSuccessfullBlockEventsProcessedConnection",
    items:  Array< {
      __typename: "PoolSuccessfullBlockEventsProcessed",
      id: string,
      positionField: number,
      lambdaProcessorDecisionCheckForNextBlocknumber: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolSummariesQueryVariables = {
  id: string,
};

export type GetPoolSummariesQuery = {
  getPoolSummaries?:  {
    __typename: "PoolSummaries",
    id: string,
    totalCompletedGames: number,
    totalPlayers: number,
    totalPayouts: number,
    highestSingleWinnerPayout: number,
    highestPoolPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPoolSummariesQueryVariables = {
  filter?: ModelPoolSummariesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPoolSummariesQuery = {
  listPoolSummaries?:  {
    __typename: "ModelPoolSummariesConnection",
    items:  Array< {
      __typename: "PoolSummaries",
      id: string,
      totalCompletedGames: number,
      totalPlayers: number,
      totalPayouts: number,
      highestSingleWinnerPayout: number,
      highestPoolPayout: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserWalletQueryVariables = {
  id: string,
};

export type GetUserWalletQuery = {
  getUserWallet?:  {
    __typename: "UserWallet",
    id: string,
    wallet: string,
    nickname?: string | null,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserWalletsQueryVariables = {
  filter?: ModelUserWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserWalletsQuery = {
  listUserWallets?:  {
    __typename: "ModelUserWalletConnection",
    items:  Array< {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBrandQueryVariables = {
  id: string,
};

export type GetBrandQuery = {
  getBrand?:  {
    __typename: "Brand",
    id: string,
    wallet: string,
    name: string,
    rating: number,
    logo?: string | null,
    completedPools: number,
    failedPools: number,
    createdAt: string,
    updatedAt: string,
    userWalletBrandsId?: string | null,
  } | null,
};

export type ListBrandsQueryVariables = {
  filter?: ModelBrandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBrandsQuery = {
  listBrands?:  {
    __typename: "ModelBrandConnection",
    items:  Array< {
      __typename: "Brand",
      id: string,
      wallet: string,
      name: string,
      rating: number,
      logo?: string | null,
      completedPools: number,
      failedPools: number,
      createdAt: string,
      updatedAt: string,
      userWalletBrandsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCreatePoolEventLogQueryVariables = {
  id: string,
};

export type GetCreatePoolEventLogQuery = {
  getCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCreatePoolEventLogsQueryVariables = {
  filter?: ModelCreatePoolEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCreatePoolEventLogsQuery = {
  listCreatePoolEventLogs?:  {
    __typename: "ModelCreatePoolEventLogConnection",
    items:  Array< {
      __typename: "CreatePoolEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedPlayer: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerJoinedPoolEventLogQueryVariables = {
  id: string,
};

export type GetPlayerJoinedPoolEventLogQuery = {
  getPlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayerJoinedPoolEventLogsQueryVariables = {
  filter?: ModelPlayerJoinedPoolEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerJoinedPoolEventLogsQuery = {
  listPlayerJoinedPoolEventLogs?:  {
    __typename: "ModelPlayerJoinedPoolEventLogConnection",
    items:  Array< {
      __typename: "PlayerJoinedPoolEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedPlayer: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerLeftPoolEventLogQueryVariables = {
  id: string,
};

export type GetPlayerLeftPoolEventLogQuery = {
  getPlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayerLeftPoolEventLogsQueryVariables = {
  filter?: ModelPlayerLeftPoolEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerLeftPoolEventLogsQuery = {
  listPlayerLeftPoolEventLogs?:  {
    __typename: "ModelPlayerLeftPoolEventLogConnection",
    items:  Array< {
      __typename: "PlayerLeftPoolEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedPlayer: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolAwaitingExecutionEventLogQueryVariables = {
  id: string,
};

export type GetPoolAwaitingExecutionEventLogQuery = {
  getPoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedStatus: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPoolAwaitingExecutionEventLogsQueryVariables = {
  filter?: ModelPoolAwaitingExecutionEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPoolAwaitingExecutionEventLogsQuery = {
  listPoolAwaitingExecutionEventLogs?:  {
    __typename: "ModelPoolAwaitingExecutionEventLogConnection",
    items:  Array< {
      __typename: "PoolAwaitingExecutionEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedStatus: string,
      decodedType: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolCompletedEventLogQueryVariables = {
  id: string,
};

export type GetPoolCompletedEventLogQuery = {
  getPoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedWinningPayout: string,
    decodedGameId: number,
    decodedPlayer: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPoolCompletedEventLogsQueryVariables = {
  filter?: ModelPoolCompletedEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPoolCompletedEventLogsQuery = {
  listPoolCompletedEventLogs?:  {
    __typename: "ModelPoolCompletedEventLogConnection",
    items:  Array< {
      __typename: "PoolCompletedEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedWinningPayout: string,
      decodedGameId: number,
      decodedPlayer: string,
      decodedAuditRecordDrawId: string,
      decodedType: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolPlayerbyUserWalletIdPoolIdStatusIdIndexQueryVariables = {
  userWalletId: string,
  poolIdStatus?: ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPoolPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetPoolPlayerbyUserWalletIdPoolIdStatusIdIndexQuery = {
  getPoolPlayerbyUserWalletIdPoolIdStatusIdIndex?:  {
    __typename: "ModelPoolPlayerConnection",
    items:  Array< {
      __typename: "PoolPlayer",
      id: string,
      userWalletId: string,
      status: PlayerStatus,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      poolPlayersId?: string | null,
      poolPlayerUserWalletId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolPlayerbyPoolIdWalletIdIndexQueryVariables = {
  poolId: string,
  userWalletId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPoolPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetPoolPlayerbyPoolIdWalletIdIndexQuery = {
  getPoolPlayerbyPoolIdWalletIdIndex?:  {
    __typename: "ModelPoolPlayerConnection",
    items:  Array< {
      __typename: "PoolPlayer",
      id: string,
      userWalletId: string,
      status: PlayerStatus,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      poolPlayersId?: string | null,
      poolPlayerUserWalletId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLotteryPoolAttributesByPoolIdIndexQueryVariables = {
  poolId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLotteryPoolAttributesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetLotteryPoolAttributesByPoolIdIndexQuery = {
  getLotteryPoolAttributesByPoolIdIndex?:  {
    __typename: "ModelLotteryPoolAttributesConnection",
    items:  Array< {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolByPoolIdIndexQueryVariables = {
  poolId: number,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetPoolByPoolIdIndexQuery = {
  getPoolByPoolIdIndex?:  {
    __typename: "ModelPoolConnection",
    items:  Array< {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PoolSuccessfullBlockEventsProcessedByPositionFieldIndexQueryVariables = {
  positionField: number,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPoolSuccessfullBlockEventsProcessedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PoolSuccessfullBlockEventsProcessedByPositionFieldIndexQuery = {
  poolSuccessfullBlockEventsProcessedByPositionFieldIndex?:  {
    __typename: "ModelPoolSuccessfullBlockEventsProcessedConnection",
    items:  Array< {
      __typename: "PoolSuccessfullBlockEventsProcessed",
      id: string,
      positionField: number,
      lambdaProcessorDecisionCheckForNextBlocknumber: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserWalletByWalletAddressIndexQueryVariables = {
  wallet: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserWalletByWalletAddressIndexQuery = {
  userWalletByWalletAddressIndex?:  {
    __typename: "ModelUserWalletConnection",
    items:  Array< {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCreatePoolEventLogbyTxIdQueryVariables = {
  txID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCreatePoolEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCreatePoolEventLogbyTxIdQuery = {
  getCreatePoolEventLogbyTxId?:  {
    __typename: "ModelCreatePoolEventLogConnection",
    items:  Array< {
      __typename: "CreatePoolEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedPlayer: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerJoinedPoolEventLogbyTxIdQueryVariables = {
  txID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerJoinedPoolEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetPlayerJoinedPoolEventLogbyTxIdQuery = {
  getPlayerJoinedPoolEventLogbyTxId?:  {
    __typename: "ModelPlayerJoinedPoolEventLogConnection",
    items:  Array< {
      __typename: "PlayerJoinedPoolEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedPlayer: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerLeftPoolEventLogbyTxIdQueryVariables = {
  txID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerLeftPoolEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetPlayerLeftPoolEventLogbyTxIdQuery = {
  getPlayerLeftPoolEventLogbyTxId?:  {
    __typename: "ModelPlayerLeftPoolEventLogConnection",
    items:  Array< {
      __typename: "PlayerLeftPoolEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedPlayer: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolAwaitingExecutionEventLogbyTxIdQueryVariables = {
  txID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPoolAwaitingExecutionEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetPoolAwaitingExecutionEventLogbyTxIdQuery = {
  getPoolAwaitingExecutionEventLogbyTxId?:  {
    __typename: "ModelPoolAwaitingExecutionEventLogConnection",
    items:  Array< {
      __typename: "PoolAwaitingExecutionEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedGameId: number,
      decodedStatus: string,
      decodedType: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolCompletedEventLogbyTxIdQueryVariables = {
  txID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPoolCompletedEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetPoolCompletedEventLogbyTxIdQuery = {
  getPoolCompletedEventLogbyTxId?:  {
    __typename: "ModelPoolCompletedEventLogConnection",
    items:  Array< {
      __typename: "PoolCompletedEventLog",
      id: string,
      txID: string,
      raw: string,
      metaBlockID: string,
      metaBlockNumber: number,
      metaBlockTimestamp: number,
      metaTxOrigin: string,
      metaClauseIndex: number,
      decodedWinningPayout: string,
      decodedGameId: number,
      decodedPlayer: string,
      decodedAuditRecordDrawId: string,
      decodedType: string,
      decodedDateTime: string,
      poolJsonData?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFeedbackSubscription = {
  onCreateFeedback?:  {
    __typename: "Feedback",
    id: string,
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeedbackSubscription = {
  onUpdateFeedback?:  {
    __typename: "Feedback",
    id: string,
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeedbackSubscription = {
  onDeleteFeedback?:  {
    __typename: "Feedback",
    id: string,
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    wallet: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateErrorLogSubscription = {
  onCreateErrorLog?:  {
    __typename: "ErrorLog",
    id: string,
    createdAt: string,
    stackTrace: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateErrorLogSubscription = {
  onUpdateErrorLog?:  {
    __typename: "ErrorLog",
    id: string,
    createdAt: string,
    stackTrace: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteErrorLogSubscription = {
  onDeleteErrorLog?:  {
    __typename: "ErrorLog",
    id: string,
    createdAt: string,
    stackTrace: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePoolPlayerSubscription = {
  onCreatePoolPlayer?:  {
    __typename: "PoolPlayer",
    id: string,
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    poolPlayersId?: string | null,
    poolPlayerUserWalletId: string,
  } | null,
};

export type OnUpdatePoolPlayerSubscription = {
  onUpdatePoolPlayer?:  {
    __typename: "PoolPlayer",
    id: string,
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    poolPlayersId?: string | null,
    poolPlayerUserWalletId: string,
  } | null,
};

export type OnDeletePoolPlayerSubscription = {
  onDeletePoolPlayer?:  {
    __typename: "PoolPlayer",
    id: string,
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    poolPlayersId?: string | null,
    poolPlayerUserWalletId: string,
  } | null,
};

export type OnCreateLotteryPoolAttributesSubscription = {
  onCreateLotteryPoolAttributes?:  {
    __typename: "LotteryPoolAttributes",
    id: string,
    auditRecordDrawId?: string | null,
    isAuditEnabled: boolean,
    randomOrgUrlForResults?: string | null,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    lotteryPoolAttributesPoolId: string,
  } | null,
};

export type OnUpdateLotteryPoolAttributesSubscription = {
  onUpdateLotteryPoolAttributes?:  {
    __typename: "LotteryPoolAttributes",
    id: string,
    auditRecordDrawId?: string | null,
    isAuditEnabled: boolean,
    randomOrgUrlForResults?: string | null,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    lotteryPoolAttributesPoolId: string,
  } | null,
};

export type OnDeleteLotteryPoolAttributesSubscription = {
  onDeleteLotteryPoolAttributes?:  {
    __typename: "LotteryPoolAttributes",
    id: string,
    auditRecordDrawId?: string | null,
    isAuditEnabled: boolean,
    randomOrgUrlForResults?: string | null,
    pool:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    },
    poolId: string,
    createdAt: string,
    updatedAt: string,
    lotteryPoolAttributesPoolId: string,
  } | null,
};

export type OnCreateApiPoolAttributesSubscription = {
  onCreateApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
    apiKey: string,
    lockFundsDatetime: string,
    executeWinnerDatetime: string,
    apiUrlForResults: string,
    verifiedUrlSchema: boolean,
    poolCreatorPercentFeeToWithold: number,
    apiWinnerOptionEntries: string,
    apiwinnerResult: string,
    poolApiDefaultSchema: string,
    poolApiCustomSchema?: string | null,
    pool?:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId?: string | null,
  } | null,
};

export type OnUpdateApiPoolAttributesSubscription = {
  onUpdateApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
    apiKey: string,
    lockFundsDatetime: string,
    executeWinnerDatetime: string,
    apiUrlForResults: string,
    verifiedUrlSchema: boolean,
    poolCreatorPercentFeeToWithold: number,
    apiWinnerOptionEntries: string,
    apiwinnerResult: string,
    poolApiDefaultSchema: string,
    poolApiCustomSchema?: string | null,
    pool?:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId?: string | null,
  } | null,
};

export type OnDeleteApiPoolAttributesSubscription = {
  onDeleteApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
    apiKey: string,
    lockFundsDatetime: string,
    executeWinnerDatetime: string,
    apiUrlForResults: string,
    verifiedUrlSchema: boolean,
    poolCreatorPercentFeeToWithold: number,
    apiWinnerOptionEntries: string,
    apiwinnerResult: string,
    poolApiDefaultSchema: string,
    poolApiCustomSchema?: string | null,
    pool?:  {
      __typename: "Pool",
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: string,
      poolEntryFee: string,
      poolTotal: string,
      poolWinningPayout: string,
      allowPlayerLeave: boolean,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
      poolLotteryPoolAttributesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId?: string | null,
  } | null,
};

export type OnCreatePoolSubscription = {
  onCreatePool?:  {
    __typename: "Pool",
    id: string,
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: string,
    poolEntryFee: string,
    poolTotal: string,
    poolWinningPayout: string,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
      id: string,
      apiKey: string,
      lockFundsDatetime: string,
      executeWinnerDatetime: string,
      apiUrlForResults: string,
      verifiedUrlSchema: boolean,
      poolCreatorPercentFeeToWithold: number,
      apiWinnerOptionEntries: string,
      apiwinnerResult: string,
      poolApiDefaultSchema: string,
      poolApiCustomSchema?: string | null,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId?: string | null,
    } | null,
    lotteryPoolAttributes?:  {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
    poolLotteryPoolAttributesId?: string | null,
  } | null,
};

export type OnUpdatePoolSubscription = {
  onUpdatePool?:  {
    __typename: "Pool",
    id: string,
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: string,
    poolEntryFee: string,
    poolTotal: string,
    poolWinningPayout: string,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
      id: string,
      apiKey: string,
      lockFundsDatetime: string,
      executeWinnerDatetime: string,
      apiUrlForResults: string,
      verifiedUrlSchema: boolean,
      poolCreatorPercentFeeToWithold: number,
      apiWinnerOptionEntries: string,
      apiwinnerResult: string,
      poolApiDefaultSchema: string,
      poolApiCustomSchema?: string | null,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId?: string | null,
    } | null,
    lotteryPoolAttributes?:  {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
    poolLotteryPoolAttributesId?: string | null,
  } | null,
};

export type OnDeletePoolSubscription = {
  onDeletePool?:  {
    __typename: "Pool",
    id: string,
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
      chatlogo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: string,
    poolEntryFee: string,
    poolTotal: string,
    poolWinningPayout: string,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
      id: string,
      apiKey: string,
      lockFundsDatetime: string,
      executeWinnerDatetime: string,
      apiUrlForResults: string,
      verifiedUrlSchema: boolean,
      poolCreatorPercentFeeToWithold: number,
      apiWinnerOptionEntries: string,
      apiwinnerResult: string,
      poolApiDefaultSchema: string,
      poolApiCustomSchema?: string | null,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId?: string | null,
    } | null,
    lotteryPoolAttributes?:  {
      __typename: "LotteryPoolAttributes",
      id: string,
      auditRecordDrawId?: string | null,
      isAuditEnabled: boolean,
      randomOrgUrlForResults?: string | null,
      poolId: string,
      createdAt: string,
      updatedAt: string,
      lotteryPoolAttributesPoolId: string,
    } | null,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
    poolLotteryPoolAttributesId?: string | null,
  } | null,
};

export type OnCreatePoolSuccessfullBlockEventsProcessedSubscription = {
  onCreatePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    positionField: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePoolSuccessfullBlockEventsProcessedSubscription = {
  onUpdatePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    positionField: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePoolSuccessfullBlockEventsProcessedSubscription = {
  onDeletePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    positionField: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePoolSummariesSubscription = {
  onCreatePoolSummaries?:  {
    __typename: "PoolSummaries",
    id: string,
    totalCompletedGames: number,
    totalPlayers: number,
    totalPayouts: number,
    highestSingleWinnerPayout: number,
    highestPoolPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePoolSummariesSubscription = {
  onUpdatePoolSummaries?:  {
    __typename: "PoolSummaries",
    id: string,
    totalCompletedGames: number,
    totalPlayers: number,
    totalPayouts: number,
    highestSingleWinnerPayout: number,
    highestPoolPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePoolSummariesSubscription = {
  onDeletePoolSummaries?:  {
    __typename: "PoolSummaries",
    id: string,
    totalCompletedGames: number,
    totalPlayers: number,
    totalPayouts: number,
    highestSingleWinnerPayout: number,
    highestPoolPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserWalletSubscription = {
  onCreateUserWallet?:  {
    __typename: "UserWallet",
    id: string,
    wallet: string,
    nickname?: string | null,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserWalletSubscription = {
  onUpdateUserWallet?:  {
    __typename: "UserWallet",
    id: string,
    wallet: string,
    nickname?: string | null,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserWalletSubscription = {
  onDeleteUserWallet?:  {
    __typename: "UserWallet",
    id: string,
    wallet: string,
    nickname?: string | null,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBrandSubscription = {
  onCreateBrand?:  {
    __typename: "Brand",
    id: string,
    wallet: string,
    name: string,
    rating: number,
    logo?: string | null,
    completedPools: number,
    failedPools: number,
    createdAt: string,
    updatedAt: string,
    userWalletBrandsId?: string | null,
  } | null,
};

export type OnUpdateBrandSubscription = {
  onUpdateBrand?:  {
    __typename: "Brand",
    id: string,
    wallet: string,
    name: string,
    rating: number,
    logo?: string | null,
    completedPools: number,
    failedPools: number,
    createdAt: string,
    updatedAt: string,
    userWalletBrandsId?: string | null,
  } | null,
};

export type OnDeleteBrandSubscription = {
  onDeleteBrand?:  {
    __typename: "Brand",
    id: string,
    wallet: string,
    name: string,
    rating: number,
    logo?: string | null,
    completedPools: number,
    failedPools: number,
    createdAt: string,
    updatedAt: string,
    userWalletBrandsId?: string | null,
  } | null,
};

export type OnCreateCreatePoolEventLogSubscription = {
  onCreateCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCreatePoolEventLogSubscription = {
  onUpdateCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCreatePoolEventLogSubscription = {
  onDeleteCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerJoinedPoolEventLogSubscription = {
  onCreatePlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerJoinedPoolEventLogSubscription = {
  onUpdatePlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerJoinedPoolEventLogSubscription = {
  onDeletePlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerLeftPoolEventLogSubscription = {
  onCreatePlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerLeftPoolEventLogSubscription = {
  onUpdatePlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerLeftPoolEventLogSubscription = {
  onDeletePlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedPlayer: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePoolAwaitingExecutionEventLogSubscription = {
  onCreatePoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedStatus: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePoolAwaitingExecutionEventLogSubscription = {
  onUpdatePoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedStatus: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePoolAwaitingExecutionEventLogSubscription = {
  onDeletePoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedGameId: number,
    decodedStatus: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePoolCompletedEventLogSubscription = {
  onCreatePoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedWinningPayout: string,
    decodedGameId: number,
    decodedPlayer: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePoolCompletedEventLogSubscription = {
  onUpdatePoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedWinningPayout: string,
    decodedGameId: number,
    decodedPlayer: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePoolCompletedEventLogSubscription = {
  onDeletePoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
    id: string,
    txID: string,
    raw: string,
    metaBlockID: string,
    metaBlockNumber: number,
    metaBlockTimestamp: number,
    metaTxOrigin: string,
    metaClauseIndex: number,
    decodedWinningPayout: string,
    decodedGameId: number,
    decodedPlayer: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
