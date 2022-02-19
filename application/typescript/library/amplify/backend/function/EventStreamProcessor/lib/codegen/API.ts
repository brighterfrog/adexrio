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
  userWalletId?: ModelStringInput | null,
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
  id: string,
  userWalletId: string,
  userWallet: UserWallet,
  status: PlayerStatus,
  pool: Pool,
  createdAt: string,
  updatedAt: string,
  poolPlayersId: string,
  poolPlayerUserWalletId: string,
};

export type UserWallet = {
  __typename: "UserWallet",
  id: string,
  wallet: string,
  nickname?: string | null,
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
  id: string,
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
  apiRequestHash: string,
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
  random_winners = "random_winners",
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

export type ModelPoolPlayerConnection = {
  __typename: "ModelPoolPlayerConnection",
  items:  Array<PoolPlayer | null >,
  nextToken?: string | null,
};

export type UpdatePoolPlayerInput = {
  id: string,
  userWalletId?: string | null,
  status?: PlayerStatus | null,
  poolPlayersId?: string | null,
  poolPlayerUserWalletId?: string | null,
};

export type DeletePoolPlayerInput = {
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
  poolStatus: poolStatus,
  poolEntryFee: number,
  poolTotal: number,
  poolWinningPayout: number,
  allowPlayerLeave: boolean,
  apiRequestHash: string,
  poolPoolCreatorId: string,
  poolApiPoolAttributesId?: string | null,
};

export type ModelPoolConditionInput = {
  poolId?: ModelIntInput | null,
  poolTitle?: ModelStringInput | null,
  poolCategory?: ModelPoolCategoryInput | null,
  poolType?: ModelpoolTypeInput | null,
  poolStatus?: ModelpoolStatusInput | null,
  poolEntryFee?: ModelIntInput | null,
  poolTotal?: ModelIntInput | null,
  poolWinningPayout?: ModelIntInput | null,
  allowPlayerLeave?: ModelBooleanInput | null,
  apiRequestHash?: ModelStringInput | null,
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
  id: string,
  poolId?: number | null,
  poolTitle?: string | null,
  poolCategory?: PoolCategory | null,
  poolType?: poolType | null,
  poolStatus?: poolStatus | null,
  poolEntryFee?: number | null,
  poolTotal?: number | null,
  poolWinningPayout?: number | null,
  allowPlayerLeave?: boolean | null,
  apiRequestHash?: string | null,
  poolPoolCreatorId?: string | null,
  poolApiPoolAttributesId?: string | null,
};

export type DeletePoolInput = {
  id: string,
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
  id?: string | null,
  wallet: string,
  nickname?: string | null,
  chatlogo?: string | null,
  totalWinnings: number,
  totalPools: number,
  totalCompletedPools: number,
  totalPoolsWon: number,
};

export type ModelUserWalletConditionInput = {
  wallet?: ModelStringInput | null,
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
  id: string,
  wallet?: string | null,
  nickname?: string | null,
  chatlogo?: string | null,
  totalWinnings?: number | null,
  totalPools?: number | null,
  totalCompletedPools?: number | null,
  totalPoolsWon?: number | null,
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

export type CreateCreatePoolEventLogV2Input = {
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

export type ModelCreatePoolEventLogV2ConditionInput = {
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
  and?: Array< ModelCreatePoolEventLogV2ConditionInput | null > | null,
  or?: Array< ModelCreatePoolEventLogV2ConditionInput | null > | null,
  not?: ModelCreatePoolEventLogV2ConditionInput | null,
};

export type CreatePoolEventLogV2 = {
  __typename: "CreatePoolEventLogV2",
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

export type UpdateCreatePoolEventLogV2Input = {
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

export type DeleteCreatePoolEventLogV2Input = {
  id: string,
};

export type CreatePlayerJoinedPoolEventLogV2Input = {
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

export type ModelPlayerJoinedPoolEventLogV2ConditionInput = {
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
  and?: Array< ModelPlayerJoinedPoolEventLogV2ConditionInput | null > | null,
  or?: Array< ModelPlayerJoinedPoolEventLogV2ConditionInput | null > | null,
  not?: ModelPlayerJoinedPoolEventLogV2ConditionInput | null,
};

export type PlayerJoinedPoolEventLogV2 = {
  __typename: "PlayerJoinedPoolEventLogV2",
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

export type UpdatePlayerJoinedPoolEventLogV2Input = {
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

export type DeletePlayerJoinedPoolEventLogV2Input = {
  id: string,
};

export type CreatePlayerLeftPoolEventLogV2Input = {
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

export type ModelPlayerLeftPoolEventLogV2ConditionInput = {
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
  and?: Array< ModelPlayerLeftPoolEventLogV2ConditionInput | null > | null,
  or?: Array< ModelPlayerLeftPoolEventLogV2ConditionInput | null > | null,
  not?: ModelPlayerLeftPoolEventLogV2ConditionInput | null,
};

export type PlayerLeftPoolEventLogV2 = {
  __typename: "PlayerLeftPoolEventLogV2",
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

export type UpdatePlayerLeftPoolEventLogV2Input = {
  id?: string | null,
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
  poolJsonData?: string | null,
};

export type DeletePlayerLeftPoolEventLogV2Input = {
  txID: string,
};

export type CreatePoolAwaitingExecutionEventLogV2Input = {
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

export type ModelPoolAwaitingExecutionEventLogV2ConditionInput = {
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
  and?: Array< ModelPoolAwaitingExecutionEventLogV2ConditionInput | null > | null,
  or?: Array< ModelPoolAwaitingExecutionEventLogV2ConditionInput | null > | null,
  not?: ModelPoolAwaitingExecutionEventLogV2ConditionInput | null,
};

export type PoolAwaitingExecutionEventLogV2 = {
  __typename: "PoolAwaitingExecutionEventLogV2",
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

export type UpdatePoolAwaitingExecutionEventLogV2Input = {
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

export type DeletePoolAwaitingExecutionEventLogV2Input = {
  id: string,
};

export type CreatePoolCompletedEventLogV2Input = {
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
  decodedStatus: string,
  decodedAuditRecordDrawId: string,
  decodedType: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
};

export type ModelPoolCompletedEventLogV2ConditionInput = {
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
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPoolCompletedEventLogV2ConditionInput | null > | null,
  or?: Array< ModelPoolCompletedEventLogV2ConditionInput | null > | null,
  not?: ModelPoolCompletedEventLogV2ConditionInput | null,
};

export type PoolCompletedEventLogV2 = {
  __typename: "PoolCompletedEventLogV2",
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
  decodedStatus: string,
  decodedAuditRecordDrawId: string,
  decodedType: string,
  decodedDateTime: string,
  poolJsonData?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePoolCompletedEventLogV2Input = {
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
  decodedStatus?: string | null,
  decodedAuditRecordDrawId?: string | null,
  decodedType?: string | null,
  decodedDateTime?: string | null,
  poolJsonData?: string | null,
};

export type DeletePoolCompletedEventLogV2Input = {
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

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
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
  poolEntryFee?: SearchableIntFilterInput | null,
  poolTotal?: SearchableIntFilterInput | null,
  poolWinningPayout?: SearchableIntFilterInput | null,
  allowPlayerLeave?: SearchableBooleanFilterInput | null,
  apiRequestHash?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  poolPoolCreatorId?: SearchableIDFilterInput | null,
  poolApiPoolAttributesId?: SearchableIDFilterInput | null,
  poolCategory?: SearchableStringFilterInput | null,
  poolType?: SearchableStringFilterInput | null,
  poolStatus?: SearchableStringFilterInput | null,
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
  poolEntryFee = "poolEntryFee",
  poolTotal = "poolTotal",
  poolWinningPayout = "poolWinningPayout",
  allowPlayerLeave = "allowPlayerLeave",
  apiRequestHash = "apiRequestHash",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  poolPoolCreatorId = "poolPoolCreatorId",
  poolApiPoolAttributesId = "poolApiPoolAttributesId",
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
  apiRequestHash = "apiRequestHash",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  poolPoolCreatorId = "poolPoolCreatorId",
  poolApiPoolAttributesId = "poolApiPoolAttributesId",
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
  totalWinnings?: SearchableIntFilterInput | null,
  totalPools?: SearchableIntFilterInput | null,
  totalCompletedPools?: SearchableIntFilterInput | null,
  totalPoolsWon?: SearchableIntFilterInput | null,
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
  totalWinnings = "totalWinnings",
  totalPools = "totalPools",
  totalCompletedPools = "totalCompletedPools",
  totalPoolsWon = "totalPoolsWon",
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
  totalWinnings = "totalWinnings",
  totalPools = "totalPools",
  totalCompletedPools = "totalCompletedPools",
  totalPoolsWon = "totalPoolsWon",
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

export type SearchableCreatePoolEventLogV2FilterInput = {
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
  and?: Array< SearchableCreatePoolEventLogV2FilterInput | null > | null,
  or?: Array< SearchableCreatePoolEventLogV2FilterInput | null > | null,
  not?: SearchableCreatePoolEventLogV2FilterInput | null,
};

export type SearchableCreatePoolEventLogV2SortInput = {
  field?: SearchableCreatePoolEventLogV2SortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableCreatePoolEventLogV2SortableFields {
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


export type SearchableCreatePoolEventLogV2AggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableCreatePoolEventLogV2AggregateField,
};

export enum SearchableCreatePoolEventLogV2AggregateField {
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


export type SearchableCreatePoolEventLogV2Connection = {
  __typename: "SearchableCreatePoolEventLogV2Connection",
  items:  Array<CreatePoolEventLogV2 | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePlayerJoinedPoolEventLogV2FilterInput = {
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
  and?: Array< SearchablePlayerJoinedPoolEventLogV2FilterInput | null > | null,
  or?: Array< SearchablePlayerJoinedPoolEventLogV2FilterInput | null > | null,
  not?: SearchablePlayerJoinedPoolEventLogV2FilterInput | null,
};

export type SearchablePlayerJoinedPoolEventLogV2SortInput = {
  field?: SearchablePlayerJoinedPoolEventLogV2SortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePlayerJoinedPoolEventLogV2SortableFields {
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


export type SearchablePlayerJoinedPoolEventLogV2AggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePlayerJoinedPoolEventLogV2AggregateField,
};

export enum SearchablePlayerJoinedPoolEventLogV2AggregateField {
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


export type SearchablePlayerJoinedPoolEventLogV2Connection = {
  __typename: "SearchablePlayerJoinedPoolEventLogV2Connection",
  items:  Array<PlayerJoinedPoolEventLogV2 | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePlayerLeftPoolEventLogV2FilterInput = {
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
  and?: Array< SearchablePlayerLeftPoolEventLogV2FilterInput | null > | null,
  or?: Array< SearchablePlayerLeftPoolEventLogV2FilterInput | null > | null,
  not?: SearchablePlayerLeftPoolEventLogV2FilterInput | null,
};

export type SearchablePlayerLeftPoolEventLogV2SortInput = {
  field?: SearchablePlayerLeftPoolEventLogV2SortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePlayerLeftPoolEventLogV2SortableFields {
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


export type SearchablePlayerLeftPoolEventLogV2AggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePlayerLeftPoolEventLogV2AggregateField,
};

export enum SearchablePlayerLeftPoolEventLogV2AggregateField {
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


export type SearchablePlayerLeftPoolEventLogV2Connection = {
  __typename: "SearchablePlayerLeftPoolEventLogV2Connection",
  items:  Array<PlayerLeftPoolEventLogV2 | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePoolAwaitingExecutionEventLogV2FilterInput = {
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
  and?: Array< SearchablePoolAwaitingExecutionEventLogV2FilterInput | null > | null,
  or?: Array< SearchablePoolAwaitingExecutionEventLogV2FilterInput | null > | null,
  not?: SearchablePoolAwaitingExecutionEventLogV2FilterInput | null,
};

export type SearchablePoolAwaitingExecutionEventLogV2SortInput = {
  field?: SearchablePoolAwaitingExecutionEventLogV2SortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePoolAwaitingExecutionEventLogV2SortableFields {
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


export type SearchablePoolAwaitingExecutionEventLogV2AggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePoolAwaitingExecutionEventLogV2AggregateField,
};

export enum SearchablePoolAwaitingExecutionEventLogV2AggregateField {
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


export type SearchablePoolAwaitingExecutionEventLogV2Connection = {
  __typename: "SearchablePoolAwaitingExecutionEventLogV2Connection",
  items:  Array<PoolAwaitingExecutionEventLogV2 | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePoolCompletedEventLogV2FilterInput = {
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
  decodedStatus?: SearchableStringFilterInput | null,
  decodedAuditRecordDrawId?: SearchableStringFilterInput | null,
  decodedType?: SearchableStringFilterInput | null,
  decodedDateTime?: SearchableStringFilterInput | null,
  poolJsonData?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchablePoolCompletedEventLogV2FilterInput | null > | null,
  or?: Array< SearchablePoolCompletedEventLogV2FilterInput | null > | null,
  not?: SearchablePoolCompletedEventLogV2FilterInput | null,
};

export type SearchablePoolCompletedEventLogV2SortInput = {
  field?: SearchablePoolCompletedEventLogV2SortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePoolCompletedEventLogV2SortableFields {
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
  decodedStatus = "decodedStatus",
  decodedAuditRecordDrawId = "decodedAuditRecordDrawId",
  decodedType = "decodedType",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolCompletedEventLogV2AggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePoolCompletedEventLogV2AggregateField,
};

export enum SearchablePoolCompletedEventLogV2AggregateField {
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
  decodedStatus = "decodedStatus",
  decodedAuditRecordDrawId = "decodedAuditRecordDrawId",
  decodedType = "decodedType",
  decodedDateTime = "decodedDateTime",
  poolJsonData = "poolJsonData",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePoolCompletedEventLogV2Connection = {
  __typename: "SearchablePoolCompletedEventLogV2Connection",
  items:  Array<PoolCompletedEventLogV2 | null >,
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
  and?: Array< ModelPoolPlayerFilterInput | null > | null,
  or?: Array< ModelPoolPlayerFilterInput | null > | null,
  not?: ModelPoolPlayerFilterInput | null,
  poolPlayersId?: ModelIDInput | null,
  poolPlayerUserWalletId?: ModelIDInput | null,
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
  poolStatus?: ModelpoolStatusInput | null,
  poolEntryFee?: ModelIntInput | null,
  poolTotal?: ModelIntInput | null,
  poolWinningPayout?: ModelIntInput | null,
  allowPlayerLeave?: ModelBooleanInput | null,
  apiRequestHash?: ModelStringInput | null,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type ModelCreatePoolEventLogV2FilterInput = {
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
  and?: Array< ModelCreatePoolEventLogV2FilterInput | null > | null,
  or?: Array< ModelCreatePoolEventLogV2FilterInput | null > | null,
  not?: ModelCreatePoolEventLogV2FilterInput | null,
};

export type ModelCreatePoolEventLogV2Connection = {
  __typename: "ModelCreatePoolEventLogV2Connection",
  items:  Array<CreatePoolEventLogV2 | null >,
  nextToken?: string | null,
};

export type ModelPlayerJoinedPoolEventLogV2FilterInput = {
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
  and?: Array< ModelPlayerJoinedPoolEventLogV2FilterInput | null > | null,
  or?: Array< ModelPlayerJoinedPoolEventLogV2FilterInput | null > | null,
  not?: ModelPlayerJoinedPoolEventLogV2FilterInput | null,
};

export type ModelPlayerJoinedPoolEventLogV2Connection = {
  __typename: "ModelPlayerJoinedPoolEventLogV2Connection",
  items:  Array<PlayerJoinedPoolEventLogV2 | null >,
  nextToken?: string | null,
};

export type ModelPlayerLeftPoolEventLogV2FilterInput = {
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
  and?: Array< ModelPlayerLeftPoolEventLogV2FilterInput | null > | null,
  or?: Array< ModelPlayerLeftPoolEventLogV2FilterInput | null > | null,
  not?: ModelPlayerLeftPoolEventLogV2FilterInput | null,
};

export type ModelPlayerLeftPoolEventLogV2Connection = {
  __typename: "ModelPlayerLeftPoolEventLogV2Connection",
  items:  Array<PlayerLeftPoolEventLogV2 | null >,
  nextToken?: string | null,
};

export type ModelPoolAwaitingExecutionEventLogV2FilterInput = {
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
  and?: Array< ModelPoolAwaitingExecutionEventLogV2FilterInput | null > | null,
  or?: Array< ModelPoolAwaitingExecutionEventLogV2FilterInput | null > | null,
  not?: ModelPoolAwaitingExecutionEventLogV2FilterInput | null,
};

export type ModelPoolAwaitingExecutionEventLogV2Connection = {
  __typename: "ModelPoolAwaitingExecutionEventLogV2Connection",
  items:  Array<PoolAwaitingExecutionEventLogV2 | null >,
  nextToken?: string | null,
};

export type ModelPoolCompletedEventLogV2FilterInput = {
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
  decodedStatus?: ModelStringInput | null,
  decodedAuditRecordDrawId?: ModelStringInput | null,
  decodedType?: ModelStringInput | null,
  decodedDateTime?: ModelStringInput | null,
  poolJsonData?: ModelStringInput | null,
  and?: Array< ModelPoolCompletedEventLogV2FilterInput | null > | null,
  or?: Array< ModelPoolCompletedEventLogV2FilterInput | null > | null,
  not?: ModelPoolCompletedEventLogV2FilterInput | null,
};

export type ModelPoolCompletedEventLogV2Connection = {
  __typename: "ModelPoolCompletedEventLogV2Connection",
  items:  Array<PoolCompletedEventLogV2 | null >,
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
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
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
    id: string,
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
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
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
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
    id: string,
    userWalletId: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
      wallet: string,
      nickname?: string | null,
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
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
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
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
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
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
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
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
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
    apiRequestHash: string,
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
    apiRequestHash: string,
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
    apiRequestHash: string,
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
    id: string,
    wallet: string,
    nickname?: string | null,
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
    id: string,
    wallet: string,
    nickname?: string | null,
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
    id: string,
    wallet: string,
    nickname?: string | null,
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

export type CreateCreatePoolEventLogV2MutationVariables = {
  input: CreateCreatePoolEventLogV2Input,
  condition?: ModelCreatePoolEventLogV2ConditionInput | null,
};

export type CreateCreatePoolEventLogV2Mutation = {
  createCreatePoolEventLogV2?:  {
    __typename: "CreatePoolEventLogV2",
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

export type UpdateCreatePoolEventLogV2MutationVariables = {
  input: UpdateCreatePoolEventLogV2Input,
  condition?: ModelCreatePoolEventLogV2ConditionInput | null,
};

export type UpdateCreatePoolEventLogV2Mutation = {
  updateCreatePoolEventLogV2?:  {
    __typename: "CreatePoolEventLogV2",
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

export type DeleteCreatePoolEventLogV2MutationVariables = {
  input: DeleteCreatePoolEventLogV2Input,
  condition?: ModelCreatePoolEventLogV2ConditionInput | null,
};

export type DeleteCreatePoolEventLogV2Mutation = {
  deleteCreatePoolEventLogV2?:  {
    __typename: "CreatePoolEventLogV2",
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

export type CreatePlayerJoinedPoolEventLogV2MutationVariables = {
  input: CreatePlayerJoinedPoolEventLogV2Input,
  condition?: ModelPlayerJoinedPoolEventLogV2ConditionInput | null,
};

export type CreatePlayerJoinedPoolEventLogV2Mutation = {
  createPlayerJoinedPoolEventLogV2?:  {
    __typename: "PlayerJoinedPoolEventLogV2",
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

export type UpdatePlayerJoinedPoolEventLogV2MutationVariables = {
  input: UpdatePlayerJoinedPoolEventLogV2Input,
  condition?: ModelPlayerJoinedPoolEventLogV2ConditionInput | null,
};

export type UpdatePlayerJoinedPoolEventLogV2Mutation = {
  updatePlayerJoinedPoolEventLogV2?:  {
    __typename: "PlayerJoinedPoolEventLogV2",
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

export type DeletePlayerJoinedPoolEventLogV2MutationVariables = {
  input: DeletePlayerJoinedPoolEventLogV2Input,
  condition?: ModelPlayerJoinedPoolEventLogV2ConditionInput | null,
};

export type DeletePlayerJoinedPoolEventLogV2Mutation = {
  deletePlayerJoinedPoolEventLogV2?:  {
    __typename: "PlayerJoinedPoolEventLogV2",
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

export type CreatePlayerLeftPoolEventLogV2MutationVariables = {
  input: CreatePlayerLeftPoolEventLogV2Input,
  condition?: ModelPlayerLeftPoolEventLogV2ConditionInput | null,
};

export type CreatePlayerLeftPoolEventLogV2Mutation = {
  createPlayerLeftPoolEventLogV2?:  {
    __typename: "PlayerLeftPoolEventLogV2",
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

export type UpdatePlayerLeftPoolEventLogV2MutationVariables = {
  input: UpdatePlayerLeftPoolEventLogV2Input,
  condition?: ModelPlayerLeftPoolEventLogV2ConditionInput | null,
};

export type UpdatePlayerLeftPoolEventLogV2Mutation = {
  updatePlayerLeftPoolEventLogV2?:  {
    __typename: "PlayerLeftPoolEventLogV2",
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

export type DeletePlayerLeftPoolEventLogV2MutationVariables = {
  input: DeletePlayerLeftPoolEventLogV2Input,
  condition?: ModelPlayerLeftPoolEventLogV2ConditionInput | null,
};

export type DeletePlayerLeftPoolEventLogV2Mutation = {
  deletePlayerLeftPoolEventLogV2?:  {
    __typename: "PlayerLeftPoolEventLogV2",
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

export type CreatePoolAwaitingExecutionEventLogV2MutationVariables = {
  input: CreatePoolAwaitingExecutionEventLogV2Input,
  condition?: ModelPoolAwaitingExecutionEventLogV2ConditionInput | null,
};

export type CreatePoolAwaitingExecutionEventLogV2Mutation = {
  createPoolAwaitingExecutionEventLogV2?:  {
    __typename: "PoolAwaitingExecutionEventLogV2",
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

export type UpdatePoolAwaitingExecutionEventLogV2MutationVariables = {
  input: UpdatePoolAwaitingExecutionEventLogV2Input,
  condition?: ModelPoolAwaitingExecutionEventLogV2ConditionInput | null,
};

export type UpdatePoolAwaitingExecutionEventLogV2Mutation = {
  updatePoolAwaitingExecutionEventLogV2?:  {
    __typename: "PoolAwaitingExecutionEventLogV2",
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

export type DeletePoolAwaitingExecutionEventLogV2MutationVariables = {
  input: DeletePoolAwaitingExecutionEventLogV2Input,
  condition?: ModelPoolAwaitingExecutionEventLogV2ConditionInput | null,
};

export type DeletePoolAwaitingExecutionEventLogV2Mutation = {
  deletePoolAwaitingExecutionEventLogV2?:  {
    __typename: "PoolAwaitingExecutionEventLogV2",
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

export type CreatePoolCompletedEventLogV2MutationVariables = {
  input: CreatePoolCompletedEventLogV2Input,
  condition?: ModelPoolCompletedEventLogV2ConditionInput | null,
};

export type CreatePoolCompletedEventLogV2Mutation = {
  createPoolCompletedEventLogV2?:  {
    __typename: "PoolCompletedEventLogV2",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePoolCompletedEventLogV2MutationVariables = {
  input: UpdatePoolCompletedEventLogV2Input,
  condition?: ModelPoolCompletedEventLogV2ConditionInput | null,
};

export type UpdatePoolCompletedEventLogV2Mutation = {
  updatePoolCompletedEventLogV2?:  {
    __typename: "PoolCompletedEventLogV2",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePoolCompletedEventLogV2MutationVariables = {
  input: DeletePoolCompletedEventLogV2Input,
  condition?: ModelPoolCompletedEventLogV2ConditionInput | null,
};

export type DeletePoolCompletedEventLogV2Mutation = {
  deletePoolCompletedEventLogV2?:  {
    __typename: "PoolCompletedEventLogV2",
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
    decodedStatus: string,
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
      createdAt: string,
      updatedAt: string,
      poolPlayersId: string,
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
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
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
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
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

export type SearchCreatePoolEventLogV2sQueryVariables = {
  filter?: SearchableCreatePoolEventLogV2FilterInput | null,
  sort?: Array< SearchableCreatePoolEventLogV2SortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableCreatePoolEventLogV2AggregationInput | null > | null,
};

export type SearchCreatePoolEventLogV2sQuery = {
  searchCreatePoolEventLogV2s?:  {
    __typename: "SearchableCreatePoolEventLogV2Connection",
    items:  Array< {
      __typename: "CreatePoolEventLogV2",
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

export type SearchPlayerJoinedPoolEventLogV2sQueryVariables = {
  filter?: SearchablePlayerJoinedPoolEventLogV2FilterInput | null,
  sort?: Array< SearchablePlayerJoinedPoolEventLogV2SortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePlayerJoinedPoolEventLogV2AggregationInput | null > | null,
};

export type SearchPlayerJoinedPoolEventLogV2sQuery = {
  searchPlayerJoinedPoolEventLogV2s?:  {
    __typename: "SearchablePlayerJoinedPoolEventLogV2Connection",
    items:  Array< {
      __typename: "PlayerJoinedPoolEventLogV2",
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

export type SearchPlayerLeftPoolEventLogV2sQueryVariables = {
  filter?: SearchablePlayerLeftPoolEventLogV2FilterInput | null,
  sort?: Array< SearchablePlayerLeftPoolEventLogV2SortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePlayerLeftPoolEventLogV2AggregationInput | null > | null,
};

export type SearchPlayerLeftPoolEventLogV2sQuery = {
  searchPlayerLeftPoolEventLogV2s?:  {
    __typename: "SearchablePlayerLeftPoolEventLogV2Connection",
    items:  Array< {
      __typename: "PlayerLeftPoolEventLogV2",
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

export type SearchPoolAwaitingExecutionEventLogV2sQueryVariables = {
  filter?: SearchablePoolAwaitingExecutionEventLogV2FilterInput | null,
  sort?: Array< SearchablePoolAwaitingExecutionEventLogV2SortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePoolAwaitingExecutionEventLogV2AggregationInput | null > | null,
};

export type SearchPoolAwaitingExecutionEventLogV2sQuery = {
  searchPoolAwaitingExecutionEventLogV2s?:  {
    __typename: "SearchablePoolAwaitingExecutionEventLogV2Connection",
    items:  Array< {
      __typename: "PoolAwaitingExecutionEventLogV2",
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

export type SearchPoolCompletedEventLogV2sQueryVariables = {
  filter?: SearchablePoolCompletedEventLogV2FilterInput | null,
  sort?: Array< SearchablePoolCompletedEventLogV2SortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePoolCompletedEventLogV2AggregationInput | null > | null,
};

export type SearchPoolCompletedEventLogV2sQuery = {
  searchPoolCompletedEventLogV2s?:  {
    __typename: "SearchablePoolCompletedEventLogV2Connection",
    items:  Array< {
      __typename: "PoolCompletedEventLogV2",
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
      decodedStatus: string,
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
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
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
      createdAt: string,
      updatedAt: string,
      poolPlayersId: string,
      poolPlayerUserWalletId: string,
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
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
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
    apiRequestHash: string,
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
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
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
    totalWinnings: number,
    totalPools: number,
    totalCompletedPools: number,
    totalPoolsWon: number,
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

export type GetCreatePoolEventLogV2QueryVariables = {
  id: string,
};

export type GetCreatePoolEventLogV2Query = {
  getCreatePoolEventLogV2?:  {
    __typename: "CreatePoolEventLogV2",
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

export type ListCreatePoolEventLogV2sQueryVariables = {
  filter?: ModelCreatePoolEventLogV2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCreatePoolEventLogV2sQuery = {
  listCreatePoolEventLogV2s?:  {
    __typename: "ModelCreatePoolEventLogV2Connection",
    items:  Array< {
      __typename: "CreatePoolEventLogV2",
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

export type GetPlayerJoinedPoolEventLogV2QueryVariables = {
  id: string,
};

export type GetPlayerJoinedPoolEventLogV2Query = {
  getPlayerJoinedPoolEventLogV2?:  {
    __typename: "PlayerJoinedPoolEventLogV2",
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

export type ListPlayerJoinedPoolEventLogV2sQueryVariables = {
  filter?: ModelPlayerJoinedPoolEventLogV2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerJoinedPoolEventLogV2sQuery = {
  listPlayerJoinedPoolEventLogV2s?:  {
    __typename: "ModelPlayerJoinedPoolEventLogV2Connection",
    items:  Array< {
      __typename: "PlayerJoinedPoolEventLogV2",
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

export type GetPlayerLeftPoolEventLogV2QueryVariables = {
  txID: string,
};

export type GetPlayerLeftPoolEventLogV2Query = {
  getPlayerLeftPoolEventLogV2?:  {
    __typename: "PlayerLeftPoolEventLogV2",
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

export type ListPlayerLeftPoolEventLogV2sQueryVariables = {
  txID?: string | null,
  filter?: ModelPlayerLeftPoolEventLogV2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlayerLeftPoolEventLogV2sQuery = {
  listPlayerLeftPoolEventLogV2s?:  {
    __typename: "ModelPlayerLeftPoolEventLogV2Connection",
    items:  Array< {
      __typename: "PlayerLeftPoolEventLogV2",
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

export type GetPoolAwaitingExecutionEventLogV2QueryVariables = {
  id: string,
};

export type GetPoolAwaitingExecutionEventLogV2Query = {
  getPoolAwaitingExecutionEventLogV2?:  {
    __typename: "PoolAwaitingExecutionEventLogV2",
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

export type ListPoolAwaitingExecutionEventLogV2sQueryVariables = {
  filter?: ModelPoolAwaitingExecutionEventLogV2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPoolAwaitingExecutionEventLogV2sQuery = {
  listPoolAwaitingExecutionEventLogV2s?:  {
    __typename: "ModelPoolAwaitingExecutionEventLogV2Connection",
    items:  Array< {
      __typename: "PoolAwaitingExecutionEventLogV2",
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

export type GetPoolCompletedEventLogV2QueryVariables = {
  id: string,
};

export type GetPoolCompletedEventLogV2Query = {
  getPoolCompletedEventLogV2?:  {
    __typename: "PoolCompletedEventLogV2",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPoolCompletedEventLogV2sQueryVariables = {
  filter?: ModelPoolCompletedEventLogV2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPoolCompletedEventLogV2sQuery = {
  listPoolCompletedEventLogV2s?:  {
    __typename: "ModelPoolCompletedEventLogV2Connection",
    items:  Array< {
      __typename: "PoolCompletedEventLogV2",
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
      decodedStatus: string,
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
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
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
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
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
      id: string,
      poolId: number,
      poolTitle: string,
      poolCategory: PoolCategory,
      poolType: poolType,
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    poolPlayersId: string,
    poolPlayerUserWalletId: string,
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
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
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
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
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
      poolStatus: poolStatus,
      poolEntryFee: number,
      poolTotal: number,
      poolWinningPayout: number,
      allowPlayerLeave: boolean,
      apiRequestHash: string,
      createdAt: string,
      updatedAt: string,
      poolPoolCreatorId: string,
      poolApiPoolAttributesId?: string | null,
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
    apiRequestHash: string,
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
    apiRequestHash: string,
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
    apiRequestHash: string,
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
    id: string,
    wallet: string,
    nickname?: string | null,
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
    id: string,
    wallet: string,
    nickname?: string | null,
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
    id: string,
    wallet: string,
    nickname?: string | null,
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

export type OnCreateCreatePoolEventLogV2Subscription = {
  onCreateCreatePoolEventLogV2?:  {
    __typename: "CreatePoolEventLogV2",
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

export type OnUpdateCreatePoolEventLogV2Subscription = {
  onUpdateCreatePoolEventLogV2?:  {
    __typename: "CreatePoolEventLogV2",
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

export type OnDeleteCreatePoolEventLogV2Subscription = {
  onDeleteCreatePoolEventLogV2?:  {
    __typename: "CreatePoolEventLogV2",
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

export type OnCreatePlayerJoinedPoolEventLogV2Subscription = {
  onCreatePlayerJoinedPoolEventLogV2?:  {
    __typename: "PlayerJoinedPoolEventLogV2",
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

export type OnUpdatePlayerJoinedPoolEventLogV2Subscription = {
  onUpdatePlayerJoinedPoolEventLogV2?:  {
    __typename: "PlayerJoinedPoolEventLogV2",
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

export type OnDeletePlayerJoinedPoolEventLogV2Subscription = {
  onDeletePlayerJoinedPoolEventLogV2?:  {
    __typename: "PlayerJoinedPoolEventLogV2",
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

export type OnCreatePlayerLeftPoolEventLogV2Subscription = {
  onCreatePlayerLeftPoolEventLogV2?:  {
    __typename: "PlayerLeftPoolEventLogV2",
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

export type OnUpdatePlayerLeftPoolEventLogV2Subscription = {
  onUpdatePlayerLeftPoolEventLogV2?:  {
    __typename: "PlayerLeftPoolEventLogV2",
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

export type OnDeletePlayerLeftPoolEventLogV2Subscription = {
  onDeletePlayerLeftPoolEventLogV2?:  {
    __typename: "PlayerLeftPoolEventLogV2",
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

export type OnCreatePoolAwaitingExecutionEventLogV2Subscription = {
  onCreatePoolAwaitingExecutionEventLogV2?:  {
    __typename: "PoolAwaitingExecutionEventLogV2",
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

export type OnUpdatePoolAwaitingExecutionEventLogV2Subscription = {
  onUpdatePoolAwaitingExecutionEventLogV2?:  {
    __typename: "PoolAwaitingExecutionEventLogV2",
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

export type OnDeletePoolAwaitingExecutionEventLogV2Subscription = {
  onDeletePoolAwaitingExecutionEventLogV2?:  {
    __typename: "PoolAwaitingExecutionEventLogV2",
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

export type OnCreatePoolCompletedEventLogV2Subscription = {
  onCreatePoolCompletedEventLogV2?:  {
    __typename: "PoolCompletedEventLogV2",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePoolCompletedEventLogV2Subscription = {
  onUpdatePoolCompletedEventLogV2?:  {
    __typename: "PoolCompletedEventLogV2",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePoolCompletedEventLogV2Subscription = {
  onDeletePoolCompletedEventLogV2?:  {
    __typename: "PoolCompletedEventLogV2",
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
    decodedStatus: string,
    decodedAuditRecordDrawId: string,
    decodedType: string,
    decodedDateTime: string,
    poolJsonData?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
