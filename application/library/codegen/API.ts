/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIngestionBucketPayload = {
  payload: string,
};

export type IngestionBucketResponse = {
  __typename: "IngestionBucketResponse",
  payloadId: string,
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

export type CreateGamesSummaryInput = {
  id: number,
  totalCompletedGames: number,
  totalUniquePlayers: number,
  totalPayouts: number,
  highestPayout: number,
};

export type ModelGamesSummaryConditionInput = {
  totalCompletedGames?: ModelIntInput | null,
  totalUniquePlayers?: ModelIntInput | null,
  totalPayouts?: ModelFloatInput | null,
  highestPayout?: ModelFloatInput | null,
  and?: Array< ModelGamesSummaryConditionInput | null > | null,
  or?: Array< ModelGamesSummaryConditionInput | null > | null,
  not?: ModelGamesSummaryConditionInput | null,
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

export type ModelFloatInput = {
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

export type GamesSummary = {
  __typename: "GamesSummary",
  id: number,
  totalCompletedGames: number,
  totalUniquePlayers: number,
  totalPayouts: number,
  highestPayout: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGamesSummaryInput = {
  id: number,
  totalCompletedGames?: number | null,
  totalUniquePlayers?: number | null,
  totalPayouts?: number | null,
  highestPayout?: number | null,
};

export type DeleteGamesSummaryInput = {
  id: number,
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

export type CreatePlayerInput = {
  id?: string | null,
  status: PlayerStatus,
  playerUserWalletId: string,
  playerPoolId: string,
};

export enum PlayerStatus {
  pending_pool_completion = "pending_pool_completion",
  withdrew = "withdrew",
  win = "win",
  lose = "lose",
}


export type ModelPlayerConditionInput = {
  status?: ModelPlayerStatusInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type ModelPlayerStatusInput = {
  eq?: PlayerStatus | null,
  ne?: PlayerStatus | null,
};

export type Player = {
  __typename: "Player",
  id: string,
  userWallet: UserWallet,
  status: PlayerStatus,
  pool: Pool,
  createdAt: string,
  updatedAt: string,
};

export type UserWallet = {
  __typename: "UserWallet",
  id: string,
  wallet: string,
  nickname: string,
  chatlogo?: string | null,
  brands?: Brand | null,
  totalWinnings: number,
  totalPools: number,
  totalCompletedPools: number,
  totalPoolsWon: number,
  createdAt: string,
  updatedAt: string,
};

export type Brand = {
  __typename: "Brand",
  id: string,
  wallet: string,
  name: string,
  rating: number,
  logo?: string | null,
  createdAt: string,
  updatedAt: string,
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
  requestHash: string,
  players?: ModelPlayerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum PoolCategory {
  other = "other",
  sports = "sports",
  gaming = "gaming",
  politics = "politics",
  grudge_match = "grudge_match",
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
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player >,
  nextToken?: string | null,
};

export type UpdatePlayerInput = {
  status?: PlayerStatus | null,
  playerUserWalletId?: string | null,
  playerPoolId?: string | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type CreateApiPoolAttributesInput = {
  id?: string | null,
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
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateApiPoolAttributesInput = {
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
  requestHash: string,
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
  requestHash?: ModelStringInput | null,
  and?: Array< ModelPoolConditionInput | null > | null,
  or?: Array< ModelPoolConditionInput | null > | null,
  not?: ModelPoolConditionInput | null,
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
  poolId?: number | null,
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
  id: string,
};

export type CreatePoolSuccessfullBlockEventsProcessedInput = {
  id?: string | null,
  lastBlockProcessedForCreatedEvents: number,
  lastBlockProcessedForCompletedEvents: number,
  lastBlockProcessedForPlayerJoinedPoolEvents: number,
  lastBlockProcessedForPlayerLeftPoolEvents: number,
  lastBlockProcessedForPoolAwaitingExecution: number,
  lambdaProcessorDecisionCheckForNextBlocknumber: number,
  historicalLastBlockLoadedForEvents: number,
};

export type ModelPoolSuccessfullBlockEventsProcessedConditionInput = {
  lastBlockProcessedForCreatedEvents?: ModelIntInput | null,
  lastBlockProcessedForCompletedEvents?: ModelIntInput | null,
  lastBlockProcessedForPlayerJoinedPoolEvents?: ModelIntInput | null,
  lastBlockProcessedForPlayerLeftPoolEvents?: ModelIntInput | null,
  lastBlockProcessedForPoolAwaitingExecution?: ModelIntInput | null,
  lambdaProcessorDecisionCheckForNextBlocknumber?: ModelIntInput | null,
  historicalLastBlockLoadedForEvents?: ModelIntInput | null,
  and?: Array< ModelPoolSuccessfullBlockEventsProcessedConditionInput | null > | null,
  or?: Array< ModelPoolSuccessfullBlockEventsProcessedConditionInput | null > | null,
  not?: ModelPoolSuccessfullBlockEventsProcessedConditionInput | null,
};

export type PoolSuccessfullBlockEventsProcessed = {
  __typename: "PoolSuccessfullBlockEventsProcessed",
  id: string,
  lastBlockProcessedForCreatedEvents: number,
  lastBlockProcessedForCompletedEvents: number,
  lastBlockProcessedForPlayerJoinedPoolEvents: number,
  lastBlockProcessedForPlayerLeftPoolEvents: number,
  lastBlockProcessedForPoolAwaitingExecution: number,
  lambdaProcessorDecisionCheckForNextBlocknumber: number,
  historicalLastBlockLoadedForEvents: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePoolSuccessfullBlockEventsProcessedInput = {
  id: string,
  lastBlockProcessedForCreatedEvents?: number | null,
  lastBlockProcessedForCompletedEvents?: number | null,
  lastBlockProcessedForPlayerJoinedPoolEvents?: number | null,
  lastBlockProcessedForPlayerLeftPoolEvents?: number | null,
  lastBlockProcessedForPoolAwaitingExecution?: number | null,
  lambdaProcessorDecisionCheckForNextBlocknumber?: number | null,
  historicalLastBlockLoadedForEvents?: number | null,
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
  nickname: string,
  chatlogo?: string | null,
  totalWinnings: number,
  totalPools: number,
  totalCompletedPools: number,
  totalPoolsWon: number,
  userWalletBrandsId?: string | null,
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
  userWalletBrandsId?: string | null,
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
};

export type ModelBrandConditionInput = {
  wallet?: ModelStringInput | null,
  name?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelBrandConditionInput | null > | null,
  or?: Array< ModelBrandConditionInput | null > | null,
  not?: ModelBrandConditionInput | null,
};

export type UpdateBrandInput = {
  id: string,
  wallet?: string | null,
  name?: string | null,
  rating?: number | null,
  logo?: string | null,
};

export type DeleteBrandInput = {
  id: string,
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
  items:  Array<Feedback >,
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

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message >,
  nextToken?: string | null,
};

export type ModelGamesSummaryFilterInput = {
  id?: ModelIntInput | null,
  totalCompletedGames?: ModelIntInput | null,
  totalUniquePlayers?: ModelIntInput | null,
  totalPayouts?: ModelFloatInput | null,
  highestPayout?: ModelFloatInput | null,
  and?: Array< ModelGamesSummaryFilterInput | null > | null,
  or?: Array< ModelGamesSummaryFilterInput | null > | null,
  not?: ModelGamesSummaryFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGamesSummaryConnection = {
  __typename: "ModelGamesSummaryConnection",
  items:  Array<GamesSummary >,
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
  items:  Array<ErrorLog >,
  nextToken?: string | null,
};

export type ModelPlayerFilterInput = {
  status?: ModelPlayerStatusInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelApiPoolAttributesFilterInput = {
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
};

export type ModelApiPoolAttributesConnection = {
  __typename: "ModelApiPoolAttributesConnection",
  items:  Array<ApiPoolAttributes >,
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
};

export type ModelPoolConnection = {
  __typename: "ModelPoolConnection",
  items:  Array<Pool >,
  nextToken?: string | null,
};

export type ModelPoolSuccessfullBlockEventsProcessedFilterInput = {
  id?: ModelIDInput | null,
  lastBlockProcessedForCreatedEvents?: ModelIntInput | null,
  lastBlockProcessedForCompletedEvents?: ModelIntInput | null,
  lastBlockProcessedForPlayerJoinedPoolEvents?: ModelIntInput | null,
  lastBlockProcessedForPlayerLeftPoolEvents?: ModelIntInput | null,
  lastBlockProcessedForPoolAwaitingExecution?: ModelIntInput | null,
  lambdaProcessorDecisionCheckForNextBlocknumber?: ModelIntInput | null,
  historicalLastBlockLoadedForEvents?: ModelIntInput | null,
  and?: Array< ModelPoolSuccessfullBlockEventsProcessedFilterInput | null > | null,
  or?: Array< ModelPoolSuccessfullBlockEventsProcessedFilterInput | null > | null,
  not?: ModelPoolSuccessfullBlockEventsProcessedFilterInput | null,
};

export type ModelPoolSuccessfullBlockEventsProcessedConnection = {
  __typename: "ModelPoolSuccessfullBlockEventsProcessedConnection",
  items:  Array<PoolSuccessfullBlockEventsProcessed >,
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
  items:  Array<PoolSummaries >,
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
  items:  Array<UserWallet >,
  nextToken?: string | null,
};

export type ModelBrandFilterInput = {
  id?: ModelIDInput | null,
  wallet?: ModelStringInput | null,
  name?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelBrandFilterInput | null > | null,
  or?: Array< ModelBrandFilterInput | null > | null,
  not?: ModelBrandFilterInput | null,
};

export type ModelBrandConnection = {
  __typename: "ModelBrandConnection",
  items:  Array<Brand >,
  nextToken?: string | null,
};

export type CreateIngestionEventMutationVariables = {
  input: CreateIngestionBucketPayload,
};

export type CreateIngestionEventMutation = {
  createIngestionEvent?:  {
    __typename: "IngestionBucketResponse",
    payloadId: string,
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

export type CreateGamesSummaryMutationVariables = {
  input: CreateGamesSummaryInput,
  condition?: ModelGamesSummaryConditionInput | null,
};

export type CreateGamesSummaryMutation = {
  createGamesSummary?:  {
    __typename: "GamesSummary",
    id: number,
    totalCompletedGames: number,
    totalUniquePlayers: number,
    totalPayouts: number,
    highestPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGamesSummaryMutationVariables = {
  input: UpdateGamesSummaryInput,
  condition?: ModelGamesSummaryConditionInput | null,
};

export type UpdateGamesSummaryMutation = {
  updateGamesSummary?:  {
    __typename: "GamesSummary",
    id: number,
    totalCompletedGames: number,
    totalUniquePlayers: number,
    totalPayouts: number,
    highestPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGamesSummaryMutationVariables = {
  input: DeleteGamesSummaryInput,
  condition?: ModelGamesSummaryConditionInput | null,
};

export type DeleteGamesSummaryMutation = {
  deleteGamesSummary?:  {
    __typename: "GamesSummary",
    id: number,
    totalCompletedGames: number,
    totalUniquePlayers: number,
    totalPayouts: number,
    highestPayout: number,
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

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      id: string,
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
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      id: string,
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
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      id: string,
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
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    lastBlockProcessedForCreatedEvents: number,
    lastBlockProcessedForCompletedEvents: number,
    lastBlockProcessedForPlayerJoinedPoolEvents: number,
    lastBlockProcessedForPlayerLeftPoolEvents: number,
    lastBlockProcessedForPoolAwaitingExecution: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    historicalLastBlockLoadedForEvents: number,
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
    lastBlockProcessedForCreatedEvents: number,
    lastBlockProcessedForCompletedEvents: number,
    lastBlockProcessedForPlayerJoinedPoolEvents: number,
    lastBlockProcessedForPlayerLeftPoolEvents: number,
    lastBlockProcessedForPoolAwaitingExecution: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    historicalLastBlockLoadedForEvents: number,
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
    lastBlockProcessedForCreatedEvents: number,
    lastBlockProcessedForCompletedEvents: number,
    lastBlockProcessedForPlayerJoinedPoolEvents: number,
    lastBlockProcessedForPlayerLeftPoolEvents: number,
    lastBlockProcessedForPoolAwaitingExecution: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    historicalLastBlockLoadedForEvents: number,
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
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "Brand",
      id: string,
      wallet: string,
      name: string,
      rating: number,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
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
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "Brand",
      id: string,
      wallet: string,
      name: string,
      rating: number,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
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
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "Brand",
      id: string,
      wallet: string,
      name: string,
      rating: number,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
    } >,
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
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetGamesSummaryQueryVariables = {
  id: number,
};

export type GetGamesSummaryQuery = {
  getGamesSummary?:  {
    __typename: "GamesSummary",
    id: number,
    totalCompletedGames: number,
    totalUniquePlayers: number,
    totalPayouts: number,
    highestPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesSummarysQueryVariables = {
  id?: number | null,
  filter?: ModelGamesSummaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGamesSummarysQuery = {
  listGamesSummarys?:  {
    __typename: "ModelGamesSummaryConnection",
    items:  Array< {
      __typename: "GamesSummary",
      id: number,
      totalCompletedGames: number,
      totalUniquePlayers: number,
      totalPayouts: number,
      highestPayout: number,
      createdAt: string,
      updatedAt: string,
    } >,
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
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      status: PlayerStatus,
      createdAt: string,
      updatedAt: string,
    } >,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApiPoolAttributessQueryVariables = {
  filter?: ModelApiPoolAttributesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApiPoolAttributessQuery = {
  listApiPoolAttributess?:  {
    __typename: "ModelApiPoolAttributesConnection",
    items:  Array< {
      __typename: "ApiPoolAttributes",
      id: string,
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
    } >,
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
      id: string,
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
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    } >,
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
    lastBlockProcessedForCreatedEvents: number,
    lastBlockProcessedForCompletedEvents: number,
    lastBlockProcessedForPlayerJoinedPoolEvents: number,
    lastBlockProcessedForPlayerLeftPoolEvents: number,
    lastBlockProcessedForPoolAwaitingExecution: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    historicalLastBlockLoadedForEvents: number,
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
      lastBlockProcessedForCreatedEvents: number,
      lastBlockProcessedForCompletedEvents: number,
      lastBlockProcessedForPlayerJoinedPoolEvents: number,
      lastBlockProcessedForPlayerLeftPoolEvents: number,
      lastBlockProcessedForPoolAwaitingExecution: number,
      lambdaProcessorDecisionCheckForNextBlocknumber: number,
      historicalLastBlockLoadedForEvents: number,
      createdAt: string,
      updatedAt: string,
    } >,
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

export type ListPoolSummariessQueryVariables = {
  filter?: ModelPoolSummariesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPoolSummariessQuery = {
  listPoolSummariess?:  {
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
    } >,
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
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "Brand",
      id: string,
      wallet: string,
      name: string,
      rating: number,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
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
      nickname: string,
      chatlogo?: string | null,
      totalWinnings: number,
      totalPools: number,
      totalCompletedPools: number,
      totalPoolsWon: number,
      createdAt: string,
      updatedAt: string,
    } >,
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
    createdAt: string,
    updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
    } >,
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

export type OnCreateGamesSummarySubscription = {
  onCreateGamesSummary?:  {
    __typename: "GamesSummary",
    id: number,
    totalCompletedGames: number,
    totalUniquePlayers: number,
    totalPayouts: number,
    highestPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGamesSummarySubscription = {
  onUpdateGamesSummary?:  {
    __typename: "GamesSummary",
    id: number,
    totalCompletedGames: number,
    totalUniquePlayers: number,
    totalPayouts: number,
    highestPayout: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGamesSummarySubscription = {
  onDeleteGamesSummary?:  {
    __typename: "GamesSummary",
    id: number,
    totalCompletedGames: number,
    totalUniquePlayers: number,
    totalPayouts: number,
    highestPayout: number,
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

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    userWallet:  {
      __typename: "UserWallet",
      id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApiPoolAttributesSubscription = {
  onCreateApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApiPoolAttributesSubscription = {
  onUpdateApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApiPoolAttributesSubscription = {
  onDeleteApiPoolAttributes?:  {
    __typename: "ApiPoolAttributes",
    id: string,
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
      requestHash: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      id: string,
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
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      id: string,
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
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      id: string,
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
    } | null,
    requestHash: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePoolSuccessfullBlockEventsProcessedSubscription = {
  onCreatePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    lastBlockProcessedForCreatedEvents: number,
    lastBlockProcessedForCompletedEvents: number,
    lastBlockProcessedForPlayerJoinedPoolEvents: number,
    lastBlockProcessedForPlayerLeftPoolEvents: number,
    lastBlockProcessedForPoolAwaitingExecution: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    historicalLastBlockLoadedForEvents: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePoolSuccessfullBlockEventsProcessedSubscription = {
  onUpdatePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    lastBlockProcessedForCreatedEvents: number,
    lastBlockProcessedForCompletedEvents: number,
    lastBlockProcessedForPlayerJoinedPoolEvents: number,
    lastBlockProcessedForPlayerLeftPoolEvents: number,
    lastBlockProcessedForPoolAwaitingExecution: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    historicalLastBlockLoadedForEvents: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePoolSuccessfullBlockEventsProcessedSubscription = {
  onDeletePoolSuccessfullBlockEventsProcessed?:  {
    __typename: "PoolSuccessfullBlockEventsProcessed",
    id: string,
    lastBlockProcessedForCreatedEvents: number,
    lastBlockProcessedForCompletedEvents: number,
    lastBlockProcessedForPlayerJoinedPoolEvents: number,
    lastBlockProcessedForPlayerLeftPoolEvents: number,
    lastBlockProcessedForPoolAwaitingExecution: number,
    lambdaProcessorDecisionCheckForNextBlocknumber: number,
    historicalLastBlockLoadedForEvents: number,
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
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "Brand",
      id: string,
      wallet: string,
      name: string,
      rating: number,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
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
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "Brand",
      id: string,
      wallet: string,
      name: string,
      rating: number,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
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
    nickname: string,
    chatlogo?: string | null,
    brands?:  {
      __typename: "Brand",
      id: string,
      wallet: string,
      name: string,
      rating: number,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
