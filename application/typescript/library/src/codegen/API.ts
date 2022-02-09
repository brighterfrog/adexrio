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
  comment: string,
  commentType: feedbackType,
  status: feedbackStatus,
  wallet: string,
  id?: string | null,
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
  comment: string,
  commentType: feedbackType,
  status: feedbackStatus,
  wallet: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFeedbackInput = {
  comment?: string | null,
  commentType?: feedbackType | null,
  status?: feedbackStatus | null,
  wallet?: string | null,
  id: string,
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
  userWalletId: string,
  status: PlayerStatus,
  poolId: number,
  poolPlayersId: string,
  poolPlayerUserWalletId: string,
};

export enum PlayerStatus {
  pending_pool_completion = "pending_pool_completion",
  withdrew = "withdrew",
  win = "win",
  lose = "lose",
}


export type ModelPoolPlayerConditionInput = {
  status?: ModelPlayerStatusInput | null,
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
  userWalletId: string,
  userWallet: UserWallet,
  status: PlayerStatus,
  pool: Pool,
  poolId: number,
  createdAt: string,
  updatedAt: string,
  poolPlayersId: string,
  poolPlayerUserWalletId: string,
};

export type UserWallet = {
  __typename: "UserWallet",
  wallet: string,
  nickname: string,
  chatlogo?: string | null,
  brands?: ModelBrandConnection | null,
  totalWinnings: number,
  totalPools: number,
  totalCompletedPools: number,
  totalPoolsWon: number,
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
  poolId: number,
  poolTitle: string,
  poolCategory: PoolCategory,
  poolCreator: UserWallet,
  poolType: poolType,
  poolStatus: poolStatus,
  poolEntryFee: number,
  poolTotal: number,
  poolWinningPayout: number,
  allowPlayerLeave: boolean,
  apiPoolAttributes?: ApiPoolAttributes | null,
  requestHash: string,
  players?: ModelPoolPlayerConnection | null,
  createdAt: string,
  updatedAt: string,
  poolPoolCreatorId: string,
  poolApiPoolAttributesId?: string | null,
};

export enum PoolCategory {
  other = "other",
  sports = "sports",
  esports = "esports",
  gaming = "gaming",
  politics = "politics",
  financial = "financial",
}


export enum poolType {
  lottery = "lottery",
  manual = "manual",
  api = "api",
  custom_builder = "custom_builder",
}


export enum poolStatus {
  awaiting = "awaiting",
  completed = "completed",
  terminated = "terminated",
}


export type ApiPoolAttributes = {
  __typename: "ApiPoolAttributes",
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
  pool: Pool,
  poolId: number,
  createdAt: string,
  updatedAt: string,
  apiPoolAttributesPoolId: string,
};

export type ModelPoolPlayerConnection = {
  __typename: "ModelPoolPlayerConnection",
  items:  Array<PoolPlayer | null >,
  nextToken?: string | null,
};

export type UpdatePoolPlayerInput = {
  userWalletId: string,
  status?: PlayerStatus | null,
  poolId: number,
  poolPlayersId?: string | null,
  poolPlayerUserWalletId?: string | null,
};

export type DeletePoolPlayerInput = {
  userWalletId: string,
  poolId: number,
};

export type CreateApiPoolAttributesInput = {
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
  poolId: number,
  apiPoolAttributesPoolId: string,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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
  poolId: number,
  apiPoolAttributesPoolId?: string | null,
};

export type DeleteApiPoolAttributesInput = {
  poolId: number,
};

export type CreatePoolInput = {
  poolId: number,
  poolTitle: string,
  poolCategory: PoolCategory,
  poolType: poolType,
  poolStatus: poolStatus,
  poolEntryFee: number,
  poolTotal: number,
  poolWinningPayout: number,
  allowPlayerLeave: boolean,
  requestHash: string,
  poolPoolCreatorId: string,
  poolApiPoolAttributesId?: string | null,
};

export type ModelPoolConditionInput = {
  poolTitle?: ModelStringInput | null,
  poolCategory?: ModelPoolCategoryInput | null,
  poolType?: ModelpoolTypeInput | null,
  poolStatus?: ModelpoolStatusInput | null,
  poolEntryFee?: ModelIntInput | null,
  poolTotal?: ModelIntInput | null,
  poolWinningPayout?: ModelIntInput | null,
  allowPlayerLeave?: ModelBooleanInput | null,
  requestHash?: ModelStringInput | null,
  and?: Array< ModelPoolConditionInput | null > | null,
  or?: Array< ModelPoolConditionInput | null > | null,
  not?: ModelPoolConditionInput | null,
  poolPoolCreatorId?: ModelIDInput | null,
  poolApiPoolAttributesId?: ModelIDInput | null,
};

export type ModelPoolCategoryInput = {
  eq?: PoolCategory | null,
  ne?: PoolCategory | null,
};

export type ModelpoolTypeInput = {
  eq?: poolType | null,
  ne?: poolType | null,
};

export type ModelpoolStatusInput = {
  eq?: poolStatus | null,
  ne?: poolStatus | null,
};

export type UpdatePoolInput = {
  poolId: number,
  poolTitle?: string | null,
  poolCategory?: PoolCategory | null,
  poolType?: poolType | null,
  poolStatus?: poolStatus | null,
  poolEntryFee?: number | null,
  poolTotal?: number | null,
  poolWinningPayout?: number | null,
  allowPlayerLeave?: boolean | null,
  requestHash?: string | null,
  poolPoolCreatorId?: string | null,
  poolApiPoolAttributesId?: string | null,
};

export type DeletePoolInput = {
  poolId: number,
};

export type CreatePoolSuccessfullBlockEventsProcessedInput = {
  id?: number | null,
  lambdaProcessorDecisionCheckForNextBlocknumber: number,
};

export type ModelPoolSuccessfullBlockEventsProcessedConditionInput = {
  lambdaProcessorDecisionCheckForNextBlocknumber?: ModelIntInput | null,
  and?: Array< ModelPoolSuccessfullBlockEventsProcessedConditionInput | null > | null,
  or?: Array< ModelPoolSuccessfullBlockEventsProcessedConditionInput | null > | null,
  not?: ModelPoolSuccessfullBlockEventsProcessedConditionInput | null,
};

export type PoolSuccessfullBlockEventsProcessed = {
  __typename: "PoolSuccessfullBlockEventsProcessed",
  id: number,
  lambdaProcessorDecisionCheckForNextBlocknumber: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePoolSuccessfullBlockEventsProcessedInput = {
  id: number,
  lambdaProcessorDecisionCheckForNextBlocknumber?: number | null,
};

export type DeletePoolSuccessfullBlockEventsProcessedInput = {
  id: number,
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
  wallet: string,
  nickname: string,
  chatlogo?: string | null,
  totalWinnings: number,
  totalPools: number,
  totalCompletedPools: number,
  totalPoolsWon: number,
};

export type ModelUserWalletConditionInput = {
  nickname?: ModelStringInput | null,
  chatlogo?: ModelStringInput | null,
  totalWinnings?: ModelIntInput | null,
  totalPools?: ModelIntInput | null,
  totalCompletedPools?: ModelIntInput | null,
  totalPoolsWon?: ModelIntInput | null,
  and?: Array< ModelUserWalletConditionInput | null > | null,
  or?: Array< ModelUserWalletConditionInput | null > | null,
  not?: ModelUserWalletConditionInput | null,
};

export type UpdateUserWalletInput = {
  wallet: string,
  nickname?: string | null,
  chatlogo?: string | null,
  totalWinnings?: number | null,
  totalPools?: number | null,
  totalCompletedPools?: number | null,
  totalPoolsWon?: number | null,
};

export type DeleteUserWalletInput = {
  wallet: string,
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
};

export type ModelCreatePoolEventLogConditionInput = {
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  and?: Array< ModelCreatePoolEventLogConditionInput | null > | null,
  or?: Array< ModelCreatePoolEventLogConditionInput | null > | null,
  not?: ModelCreatePoolEventLogConditionInput | null,
};

export type CreatePoolEventLog = {
  __typename: "CreatePoolEventLog",
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
  createdAt: string,
  updatedAt: string,
};

export type UpdateCreatePoolEventLogInput = {
  txID: string,
  raw?: string | null,
  metaBlockID?: string | null,
  metaBlockNumber?: number | null,
  metaBlockTimestamp?: number | null,
  metaTxOrigin?: string | null,
  metaClauseIndex?: number | null,
  decodedGameId?: number | null,
  decodedPlayer?: string | null,
  decodedDateTime?: string | null,
};

export type DeleteCreatePoolEventLogInput = {
  txID: string,
};

export type CreatePlayerJoinedPoolEventLogInput = {
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
};

export type ModelPlayerJoinedPoolEventLogConditionInput = {
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  and?: Array< ModelPlayerJoinedPoolEventLogConditionInput | null > | null,
  or?: Array< ModelPlayerJoinedPoolEventLogConditionInput | null > | null,
  not?: ModelPlayerJoinedPoolEventLogConditionInput | null,
};

export type PlayerJoinedPoolEventLog = {
  __typename: "PlayerJoinedPoolEventLog",
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
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlayerJoinedPoolEventLogInput = {
  txID: string,
  raw?: string | null,
  metaBlockID?: string | null,
  metaBlockNumber?: number | null,
  metaBlockTimestamp?: number | null,
  metaTxOrigin?: string | null,
  metaClauseIndex?: number | null,
  decodedGameId?: number | null,
  decodedPlayer?: string | null,
  decodedDateTime?: string | null,
};

export type DeletePlayerJoinedPoolEventLogInput = {
  txID: string,
};

export type CreatePlayerLeftPoolEventLogInput = {
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
};

export type ModelPlayerLeftPoolEventLogConditionInput = {
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  and?: Array< ModelPlayerLeftPoolEventLogConditionInput | null > | null,
  or?: Array< ModelPlayerLeftPoolEventLogConditionInput | null > | null,
  not?: ModelPlayerLeftPoolEventLogConditionInput | null,
};

export type PlayerLeftPoolEventLog = {
  __typename: "PlayerLeftPoolEventLog",
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
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlayerLeftPoolEventLogInput = {
  txID: string,
  raw?: string | null,
  metaBlockID?: string | null,
  metaBlockNumber?: number | null,
  metaBlockTimestamp?: number | null,
  metaTxOrigin?: string | null,
  metaClauseIndex?: number | null,
  decodedGameId?: number | null,
  decodedPlayer?: string | null,
  decodedDateTime?: string | null,
};

export type DeletePlayerLeftPoolEventLogInput = {
  txID: string,
};

export type CreatePoolAwaitingExecutionEventLogInput = {
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
};

export type ModelPoolAwaitingExecutionEventLogConditionInput = {
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
  and?: Array< ModelPoolAwaitingExecutionEventLogConditionInput | null > | null,
  or?: Array< ModelPoolAwaitingExecutionEventLogConditionInput | null > | null,
  not?: ModelPoolAwaitingExecutionEventLogConditionInput | null,
};

export type PoolAwaitingExecutionEventLog = {
  __typename: "PoolAwaitingExecutionEventLog",
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
  createdAt: string,
  updatedAt: string,
};

export type UpdatePoolAwaitingExecutionEventLogInput = {
  txID: string,
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
};

export type DeletePoolAwaitingExecutionEventLogInput = {
  txID: string,
};

export type CreatePoolCompletedEventLogInput = {
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
  decodedStatus: string,
  decodedAuditRecordDrawId: string,
  decodedType: string,
  decodedDateTime: string,
};

export type ModelPoolCompletedEventLogConditionInput = {
  raw?: ModelStringInput | null,
  metaBlockID?: ModelStringInput | null,
  metaBlockNumber?: ModelIntInput | null,
  metaBlockTimestamp?: ModelIntInput | null,
  metaTxOrigin?: ModelStringInput | null,
  metaClauseIndex?: ModelIntInput | null,
  decodedWinningPayout?: ModelStringInput | null,
  decodedGameId?: ModelIntInput | null,
  decodedPlayer?: ModelStringInput | null,
  decodedStatus?: ModelStringInput | null,
  decodedAuditRecordDrawId?: ModelStringInput | null,
  decodedType?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  and?: Array< ModelPoolCompletedEventLogConditionInput | null > | null,
  or?: Array< ModelPoolCompletedEventLogConditionInput | null > | null,
  not?: ModelPoolCompletedEventLogConditionInput | null,
};

export type PoolCompletedEventLog = {
  __typename: "PoolCompletedEventLog",
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
  decodedStatus: string,
  decodedAuditRecordDrawId: string,
  decodedType: string,
  decodedDateTime: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePoolCompletedEventLogInput = {
  txID: string,
  raw?: string | null,
  metaBlockID?: string | null,
  metaBlockNumber?: number | null,
  metaBlockTimestamp?: number | null,
  metaTxOrigin?: string | null,
  metaClauseIndex?: number | null,
  decodedWinningPayout?: string | null,
  decodedGameId?: number | null,
  decodedPlayer?: string | null,
  decodedStatus?: string | null,
  decodedAuditRecordDrawId?: string | null,
  decodedType?: string | null,
  decodedDateTime?: string | null,
};

export type DeletePoolCompletedEventLogInput = {
  txID: string,
};

export type SearchableCreatePoolEventLogFilterInput = {
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
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableCreatePoolEventLogFilterInput | null > | null,
  or?: Array< SearchableCreatePoolEventLogFilterInput | null > | null,
  not?: SearchableCreatePoolEventLogFilterInput | null,
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

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableCreatePoolEventLogSortInput = {
  field?: SearchableCreatePoolEventLogSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableCreatePoolEventLogSortableFields {
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
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableCreatePoolEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableCreatePoolEventLogAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableCreatePoolEventLogAggregateField {
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

export type SearchablePlayerJoinedPoolEventLogFilterInput = {
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
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePlayerJoinedPoolEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePlayerJoinedPoolEventLogAggregateField,
};

export enum SearchablePlayerJoinedPoolEventLogAggregateField {
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
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePlayerLeftPoolEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePlayerLeftPoolEventLogAggregateField,
};

export enum SearchablePlayerLeftPoolEventLogAggregateField {
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
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolAwaitingExecutionEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePoolAwaitingExecutionEventLogAggregateField,
};

export enum SearchablePoolAwaitingExecutionEventLogAggregateField {
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
  decodedStatus?: SearchableStringFilterInput | null,
  decodedAuditRecordDrawId?: SearchableStringFilterInput | null,
  decodedType?: SearchableStringFilterInput | null,
  decodedDateTime?: SearchableStringFilterInput | null,
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
  decodedStatus = "decodedStatus",
  decodedAuditRecordDrawId = "decodedAuditRecordDrawId",
  decodedType = "decodedType",
  decodedDateTime = "decodedDateTime",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolCompletedEventLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePoolCompletedEventLogAggregateField,
};

export enum SearchablePoolCompletedEventLogAggregateField {
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
  decodedStatus = "decodedStatus",
  decodedAuditRecordDrawId = "decodedAuditRecordDrawId",
  decodedType = "decodedType",
  decodedDateTime = "decodedDateTime",
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

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPoolPlayerFilterInput = {
  userWalletId?: ModelStringInput | null,
  status?: ModelPlayerStatusInput | null,
  poolId?: ModelIntInput | null,
  and?: Array< ModelPoolPlayerFilterInput | null > | null,
  or?: Array< ModelPoolPlayerFilterInput | null > | null,
  not?: ModelPoolPlayerFilterInput | null,
  poolPlayersId?: ModelIDInput | null,
  poolPlayerUserWalletId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelApiPoolAttributesFilterInput = {
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
  poolId?: ModelIntInput | null,
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
  poolId?: ModelIntInput | null,
  poolTitle?: ModelStringInput | null,
  poolCategory?: ModelPoolCategoryInput | null,
  poolType?: ModelpoolTypeInput | null,
  poolStatus?: ModelpoolStatusInput | null,
  poolEntryFee?: ModelIntInput | null,
  poolTotal?: ModelIntInput | null,
  poolWinningPayout?: ModelIntInput | null,
  allowPlayerLeave?: ModelBooleanInput | null,
  requestHash?: ModelStringInput | null,
  and?: Array< ModelPoolFilterInput | null > | null,
  or?: Array< ModelPoolFilterInput | null > | null,
  not?: ModelPoolFilterInput | null,
  poolPoolCreatorId?: ModelIDInput | null,
  poolApiPoolAttributesId?: ModelIDInput | null,
};

export type ModelPoolConnection = {
  __typename: "ModelPoolConnection",
  items:  Array<Pool | null >,
  nextToken?: string | null,
};

export type ModelPoolSuccessfullBlockEventsProcessedFilterInput = {
  id?: ModelIntInput | null,
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
  wallet?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  chatlogo?: ModelStringInput | null,
  totalWinnings?: ModelIntInput | null,
  totalPools?: ModelIntInput | null,
  totalCompletedPools?: ModelIntInput | null,
  totalPoolsWon?: ModelIntInput | null,
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
  decodedStatus?: ModelStringInput | null,
  decodedAuditRecordDrawId?: ModelStringInput | null,
  decodedType?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  and?: Array< ModelPoolCompletedEventLogFilterInput | null > | null,
  or?: Array< ModelPoolCompletedEventLogFilterInput | null > | null,
  not?: ModelPoolCompletedEventLogFilterInput | null,
};

export type ModelPoolCompletedEventLogConnection = {
  __typename: "ModelPoolCompletedEventLogConnection",
  items:  Array<PoolCompletedEventLog | null >,
  nextToken?: string | null,
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
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    id: string,
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
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    id: string,
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
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    id: string,
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
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
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
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
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
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
    poolPlayerUserWalletId: string,
  } | null,
};

export type CreateApiPoolAttributesMutationVariables = {
  input: CreateApiPoolAttributesInput,
  condition?: ModelApiPoolAttributesConditionInput | null,
};

export type CreateApiPoolAttributesMutation = {
  createApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
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
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId: string,
  } | null,
};

export type UpdateApiPoolAttributesMutationVariables = {
  input: UpdateApiPoolAttributesInput,
  condition?: ModelApiPoolAttributesConditionInput | null,
};

export type UpdateApiPoolAttributesMutation = {
  updateApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
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
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId: string,
  } | null,
};

export type DeleteApiPoolAttributesMutationVariables = {
  input: DeleteApiPoolAttributesInput,
  condition?: ModelApiPoolAttributesConditionInput | null,
};

export type DeleteApiPoolAttributesMutation = {
  deleteApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
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
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId: string,
  } | null,
};

export type CreatePoolMutationVariables = {
  input: CreatePoolInput,
  condition?: ModelPoolConditionInput | null,
};

export type CreatePoolMutation = {
  createPool?:  {
    __typename: "Pool",
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: poolStatus,
    poolEntryFee: number,
    poolTotal: number,
    poolWinningPayout: number,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
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
      poolId: number,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId: string,
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
  } | null,
};

export type UpdatePoolMutationVariables = {
  input: UpdatePoolInput,
  condition?: ModelPoolConditionInput | null,
};

export type UpdatePoolMutation = {
  updatePool?:  {
    __typename: "Pool",
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: poolStatus,
    poolEntryFee: number,
    poolTotal: number,
    poolWinningPayout: number,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
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
      poolId: number,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId: string,
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
  } | null,
};

export type DeletePoolMutationVariables = {
  input: DeletePoolInput,
  condition?: ModelPoolConditionInput | null,
};

export type DeletePoolMutation = {
  deletePool?:  {
    __typename: "Pool",
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: poolStatus,
    poolEntryFee: number,
    poolTotal: number,
    poolWinningPayout: number,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
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
      poolId: number,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId: string,
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
  } | null,
};

export type CreatePoolSuccessfullBlockEventsProcessedMutationVariables = {
  input: CreatePoolSuccessfullBlockEventsProcessedInput,
  condition?: ModelPoolSuccessfullBlockEventsProcessedConditionInput | null,
};

export type CreatePoolSuccessfullBlockEventsProcessedMutation = {
  createPoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: number,
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
    id: number,
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
    id: number,
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
    wallet: string,
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    totalWinnings: number,
    totalPools: number,
    totalCompletedPools: number,
    totalPoolsWon: number,
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
    wallet: string,
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    totalWinnings: number,
    totalPools: number,
    totalCompletedPools: number,
    totalPoolsWon: number,
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
    wallet: string,
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    totalWinnings: number,
    totalPools: number,
    totalCompletedPools: number,
    totalPoolsWon: number,
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    createdAt: string,
    updatedAt: string,
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
      decodedStatus: string,
      decodedAuditRecordDrawId: string,
      decodedType: string,
      decodedDateTime: string,
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
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    id: string,
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
      comment: string,
      commentType: feedbackType,
      status: feedbackStatus,
      wallet: string,
      id: string,
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
  userWalletId: string,
  poolId: number,
};

export type GetPoolPlayerQuery = {
  getPoolPlayer?:  {
    __typename: "PoolPlayer",
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
    poolPlayerUserWalletId: string,
  } | null,
};

export type ListPoolPlayersQueryVariables = {
  userWalletId?: string | null,
  poolId?: ModelIntKeyConditionInput | null,
  filter?: ModelPoolPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPoolPlayersQuery = {
  listPoolPlayers?:  {
    __typename: "ModelPoolPlayerConnection",
    items:  Array< {
      __typename: "PoolPlayer",
      userWalletId: string,
      status: PlayerStatus,
      poolId: number,
      createdAt: string,
      updatedAt: string,
      poolPlayersId: string,
      poolPlayerUserWalletId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApiPoolAttributesQueryVariables = {
  poolId: number,
};

export type GetApiPoolAttributesQuery = {
  getApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
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
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId: string,
  } | null,
};

export type ListApiPoolAttributesQueryVariables = {
  poolId?: number | null,
  filter?: ModelApiPoolAttributesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListApiPoolAttributesQuery = {
  listApiPoolAttributes?:  {
    __typename: "ModelApiPoolAttributesConnection",
    items:  Array< {
      __typename: "ApiPoolAttributes",
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
      poolId: number,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolQueryVariables = {
  poolId: number,
};

export type GetPoolQuery = {
  getPool?:  {
    __typename: "Pool",
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: poolStatus,
    poolEntryFee: number,
    poolTotal: number,
    poolWinningPayout: number,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
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
      poolId: number,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId: string,
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
  } | null,
};

export type ListPoolsQueryVariables = {
  poolId?: number | null,
  filter?: ModelPoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPoolsQuery = {
  listPools?:  {
    __typename: "ModelPoolConnection",
    items:  Array< {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolSuccessfullBlockEventsProcessedQueryVariables = {
  id: number,
};

export type GetPoolSuccessfullBlockEventsProcessedQuery = {
  getPoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPoolSuccessfullBlockEventsProcessedsQueryVariables = {
  id?: number | null,
  filter?: ModelPoolSuccessfullBlockEventsProcessedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPoolSuccessfullBlockEventsProcessedsQuery = {
  listPoolSuccessfullBlockEventsProcesseds?:  {
    __typename: "ModelPoolSuccessfullBlockEventsProcessedConnection",
    items:  Array< {
      __typename: "PoolSuccessfullBlockEventsProcessed",
      id: number,
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
  wallet: string,
};

export type GetUserWalletQuery = {
  getUserWallet?:  {
    __typename: "UserWallet",
    wallet: string,
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    totalWinnings: number,
    totalPools: number,
    totalCompletedPools: number,
    totalPoolsWon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserWalletsQueryVariables = {
  wallet?: string | null,
  filter?: ModelUserWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserWalletsQuery = {
  listUserWallets?:  {
    __typename: "ModelUserWalletConnection",
    items:  Array< {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
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
  txID: string,
};

export type GetCreatePoolEventLogQuery = {
  getCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCreatePoolEventLogsQueryVariables = {
  txID?: string | null,
  filter?: ModelCreatePoolEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCreatePoolEventLogsQuery = {
  listCreatePoolEventLogs?:  {
    __typename: "ModelCreatePoolEventLogConnection",
    items:  Array< {
      __typename: "CreatePoolEventLog",
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerJoinedPoolEventLogQueryVariables = {
  txID: string,
};

export type GetPlayerJoinedPoolEventLogQuery = {
  getPlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayerJoinedPoolEventLogsQueryVariables = {
  txID?: string | null,
  filter?: ModelPlayerJoinedPoolEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlayerJoinedPoolEventLogsQuery = {
  listPlayerJoinedPoolEventLogs?:  {
    __typename: "ModelPlayerJoinedPoolEventLogConnection",
    items:  Array< {
      __typename: "PlayerJoinedPoolEventLog",
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerLeftPoolEventLogQueryVariables = {
  txID: string,
};

export type GetPlayerLeftPoolEventLogQuery = {
  getPlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayerLeftPoolEventLogsQueryVariables = {
  txID?: string | null,
  filter?: ModelPlayerLeftPoolEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlayerLeftPoolEventLogsQuery = {
  listPlayerLeftPoolEventLogs?:  {
    __typename: "ModelPlayerLeftPoolEventLogConnection",
    items:  Array< {
      __typename: "PlayerLeftPoolEventLog",
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolAwaitingExecutionEventLogQueryVariables = {
  txID: string,
};

export type GetPoolAwaitingExecutionEventLogQuery = {
  getPoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPoolAwaitingExecutionEventLogsQueryVariables = {
  txID?: string | null,
  filter?: ModelPoolAwaitingExecutionEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPoolAwaitingExecutionEventLogsQuery = {
  listPoolAwaitingExecutionEventLogs?:  {
    __typename: "ModelPoolAwaitingExecutionEventLogConnection",
    items:  Array< {
      __typename: "PoolAwaitingExecutionEventLog",
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPoolCompletedEventLogQueryVariables = {
  txID: string,
};

export type GetPoolCompletedEventLogQuery = {
  getPoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPoolCompletedEventLogsQueryVariables = {
  txID?: string | null,
  filter?: ModelPoolCompletedEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPoolCompletedEventLogsQuery = {
  listPoolCompletedEventLogs?:  {
    __typename: "ModelPoolCompletedEventLogConnection",
    items:  Array< {
      __typename: "PoolCompletedEventLog",
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
      decodedStatus: string,
      decodedAuditRecordDrawId: string,
      decodedType: string,
      decodedDateTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFeedbackSubscription = {
  onCreateFeedback?:  {
    __typename: "Feedback",
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeedbackSubscription = {
  onUpdateFeedback?:  {
    __typename: "Feedback",
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeedbackSubscription = {
  onDeleteFeedback?:  {
    __typename: "Feedback",
    comment: string,
    commentType: feedbackType,
    status: feedbackStatus,
    wallet: string,
    id: string,
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
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
    poolPlayerUserWalletId: string,
  } | null,
};

export type OnUpdatePoolPlayerSubscription = {
  onUpdatePoolPlayer?:  {
    __typename: "PoolPlayer",
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
    poolPlayerUserWalletId: string,
  } | null,
};

export type OnDeletePoolPlayerSubscription = {
  onDeletePoolPlayer?:  {
    __typename: "PoolPlayer",
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    status: PlayerStatus,
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
    poolPlayerUserWalletId: string,
  } | null,
};

export type OnCreateApiPoolAttributesSubscription = {
  onCreateApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
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
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId: string,
  } | null,
};

export type OnUpdateApiPoolAttributesSubscription = {
  onUpdateApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
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
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId: string,
  } | null,
};

export type OnDeleteApiPoolAttributesSubscription = {
  onDeleteApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
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
    pool:  {
      __typename: "Pool",
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      requestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    poolId: number,
    createdAt: string,
    updatedAt: string,
    apiPoolAttributesPoolId: string,
  } | null,
};

export type OnCreatePoolSubscription = {
  onCreatePool?:  {
    __typename: "Pool",
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: poolStatus,
    poolEntryFee: number,
    poolTotal: number,
    poolWinningPayout: number,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
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
      poolId: number,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId: string,
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
  } | null,
};

export type OnUpdatePoolSubscription = {
  onUpdatePool?:  {
    __typename: "Pool",
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: poolStatus,
    poolEntryFee: number,
    poolTotal: number,
    poolWinningPayout: number,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
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
      poolId: number,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId: string,
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
  } | null,
};

export type OnDeletePoolSubscription = {
  onDeletePool?:  {
    __typename: "Pool",
    poolId: number,
    poolTitle: string,
    poolCategory: PoolCategory,
    poolCreator:  {
      __typename: "UserWallet",
      wallet: string,
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    },
    poolType: poolType,
    poolStatus: poolStatus,
    poolEntryFee: number,
    poolTotal: number,
    poolWinningPayout: number,
    allowPlayerLeave: boolean,
    apiPoolAttributes?:  {
      __typename: "ApiPoolAttributes",
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
      poolId: number,
      createdAt: string,
      updatedAt: string,
      apiPoolAttributesPoolId: string,
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPoolPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    poolPoolCreatorId: string,
    poolApiPoolAttributesId?: string | null,
  } | null,
};

export type OnCreatePoolSuccessfullBlockEventsProcessedSubscription = {
  onCreatePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePoolSuccessfullBlockEventsProcessedSubscription = {
  onUpdatePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePoolSuccessfullBlockEventsProcessedSubscription = {
  onDeletePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: number,
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
    wallet: string,
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    totalWinnings: number,
    totalPools: number,
    totalCompletedPools: number,
    totalPoolsWon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserWalletSubscription = {
  onUpdateUserWallet?:  {
    __typename: "UserWallet",
    wallet: string,
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    totalWinnings: number,
    totalPools: number,
    totalCompletedPools: number,
    totalPoolsWon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserWalletSubscription = {
  onDeleteUserWallet?:  {
    __typename: "UserWallet",
    wallet: string,
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "ModelBrandConnection",
      nextToken?: string | null,
    } | null,
    totalWinnings: number,
    totalPools: number,
    totalCompletedPools: number,
    totalPoolsWon: number,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCreatePoolEventLogSubscription = {
  onUpdateCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCreatePoolEventLogSubscription = {
  onDeleteCreatePoolEventLog?:  {
    __typename: "CreatePoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerJoinedPoolEventLogSubscription = {
  onCreatePlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerJoinedPoolEventLogSubscription = {
  onUpdatePlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerJoinedPoolEventLogSubscription = {
  onDeletePlayerJoinedPoolEventLog?:  {
    __typename: "PlayerJoinedPoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerLeftPoolEventLogSubscription = {
  onCreatePlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerLeftPoolEventLogSubscription = {
  onUpdatePlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerLeftPoolEventLogSubscription = {
  onDeletePlayerLeftPoolEventLog?:  {
    __typename: "PlayerLeftPoolEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePoolAwaitingExecutionEventLogSubscription = {
  onCreatePoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePoolAwaitingExecutionEventLogSubscription = {
  onUpdatePoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePoolAwaitingExecutionEventLogSubscription = {
  onDeletePoolAwaitingExecutionEventLog?:  {
    __typename: "PoolAwaitingExecutionEventLog",
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePoolCompletedEventLogSubscription = {
  onCreatePoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePoolCompletedEventLogSubscription = {
  onUpdatePoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePoolCompletedEventLogSubscription = {
  onDeletePoolCompletedEventLog?:  {
    __typename: "PoolCompletedEventLog",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
