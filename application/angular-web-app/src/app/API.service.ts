/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateFeedback: OnCreateFeedbackSubscription;
  onUpdateFeedback: OnUpdateFeedbackSubscription;
  onDeleteFeedback: OnDeleteFeedbackSubscription;
  onCreateMessage: OnCreateMessageSubscription;
  onUpdateMessage: OnUpdateMessageSubscription;
  onDeleteMessage: OnDeleteMessageSubscription;
  onCreateGamesSummary: OnCreateGamesSummarySubscription;
  onUpdateGamesSummary: OnUpdateGamesSummarySubscription;
  onDeleteGamesSummary: OnDeleteGamesSummarySubscription;
  onCreateErrorLog: OnCreateErrorLogSubscription;
  onUpdateErrorLog: OnUpdateErrorLogSubscription;
  onDeleteErrorLog: OnDeleteErrorLogSubscription;
  onCreatePlayer: OnCreatePlayerSubscription;
  onUpdatePlayer: OnUpdatePlayerSubscription;
  onDeletePlayer: OnDeletePlayerSubscription;
  onCreateApiPoolAttributes: OnCreateApiPoolAttributesSubscription;
  onUpdateApiPoolAttributes: OnUpdateApiPoolAttributesSubscription;
  onDeleteApiPoolAttributes: OnDeleteApiPoolAttributesSubscription;
  onCreatePool: OnCreatePoolSubscription;
  onUpdatePool: OnUpdatePoolSubscription;
  onDeletePool: OnDeletePoolSubscription;
  onCreatePoolSuccessfullBlockEventsProcessed: OnCreatePoolSuccessfullBlockEventsProcessedSubscription;
  onUpdatePoolSuccessfullBlockEventsProcessed: OnUpdatePoolSuccessfullBlockEventsProcessedSubscription;
  onDeletePoolSuccessfullBlockEventsProcessed: OnDeletePoolSuccessfullBlockEventsProcessedSubscription;
  onCreatePoolSummaries: OnCreatePoolSummariesSubscription;
  onUpdatePoolSummaries: OnUpdatePoolSummariesSubscription;
  onDeletePoolSummaries: OnDeletePoolSummariesSubscription;
  onCreateUserWallet: OnCreateUserWalletSubscription;
  onUpdateUserWallet: OnUpdateUserWalletSubscription;
  onDeleteUserWallet: OnDeleteUserWalletSubscription;
  onCreateBrand: OnCreateBrandSubscription;
  onUpdateBrand: OnUpdateBrandSubscription;
  onDeleteBrand: OnDeleteBrandSubscription;
};

export type CreateFeedbackInput = {
  id?: string | null;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
};

export enum feedbackType {
  general = "general",
  enhancement = "enhancement",
  bug = "bug",
  interest = "interest"
}

export enum feedbackStatus {
  pending = "pending",
  reviewed = "reviewed",
  projectItem = "projectItem"
}

export type ModelFeedbackConditionInput = {
  comment?: ModelStringInput | null;
  commentType?: ModelfeedbackTypeInput | null;
  status?: ModelfeedbackStatusInput | null;
  wallet?: ModelStringInput | null;
  and?: Array<ModelFeedbackConditionInput | null> | null;
  or?: Array<ModelFeedbackConditionInput | null> | null;
  not?: ModelFeedbackConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelfeedbackTypeInput = {
  eq?: feedbackType | null;
  ne?: feedbackType | null;
};

export type ModelfeedbackStatusInput = {
  eq?: feedbackStatus | null;
  ne?: feedbackStatus | null;
};

export type Feedback = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFeedbackInput = {
  comment?: string | null;
  commentType?: feedbackType | null;
  status?: feedbackStatus | null;
  wallet?: string | null;
};

export type DeleteFeedbackInput = {
  id: string;
};

export type CreateMessageInput = {
  id?: string | null;
  message: string;
  wallet: string;
  createdAt?: string | null;
};

export type ModelMessageConditionInput = {
  message?: ModelStringInput | null;
  wallet?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type Message = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMessageInput = {
  id: string;
  message?: string | null;
  wallet?: string | null;
  createdAt?: string | null;
};

export type DeleteMessageInput = {
  id: string;
};

export type CreateGamesSummaryInput = {
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
};

export type ModelGamesSummaryConditionInput = {
  totalCompletedGames?: ModelIntInput | null;
  totalUniquePlayers?: ModelIntInput | null;
  totalPayouts?: ModelFloatInput | null;
  highestPayout?: ModelFloatInput | null;
  and?: Array<ModelGamesSummaryConditionInput | null> | null;
  or?: Array<ModelGamesSummaryConditionInput | null> | null;
  not?: ModelGamesSummaryConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type GamesSummary = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGamesSummaryInput = {
  id: number;
  totalCompletedGames?: number | null;
  totalUniquePlayers?: number | null;
  totalPayouts?: number | null;
  highestPayout?: number | null;
};

export type DeleteGamesSummaryInput = {
  id: number;
};

export type CreateErrorLogInput = {
  id?: string | null;
  createdAt?: string | null;
  stackTrace: string;
};

export type ModelErrorLogConditionInput = {
  createdAt?: ModelStringInput | null;
  stackTrace?: ModelStringInput | null;
  and?: Array<ModelErrorLogConditionInput | null> | null;
  or?: Array<ModelErrorLogConditionInput | null> | null;
  not?: ModelErrorLogConditionInput | null;
};

export type ErrorLog = {
  __typename: "ErrorLog";
  id: string;
  createdAt: string;
  stackTrace: string;
  updatedAt: string;
};

export type UpdateErrorLogInput = {
  id: string;
  createdAt?: string | null;
  stackTrace?: string | null;
};

export type DeleteErrorLogInput = {
  id: string;
};

export type CreatePlayerInput = {
  id?: string | null;
  status: PlayerStatus;
  playerUserWalletId: string;
  playerPoolId: string;
};

export enum PlayerStatus {
  pending_pool_completion = "pending_pool_completion",
  withdrew = "withdrew",
  win = "win",
  lose = "lose"
}

export type ModelPlayerConditionInput = {
  status?: ModelPlayerStatusInput | null;
  and?: Array<ModelPlayerConditionInput | null> | null;
  or?: Array<ModelPlayerConditionInput | null> | null;
  not?: ModelPlayerConditionInput | null;
};

export type ModelPlayerStatusInput = {
  eq?: PlayerStatus | null;
  ne?: PlayerStatus | null;
};

export type Player = {
  __typename: "Player";
  id: string;
  userWallet: UserWallet;
  status: PlayerStatus;
  pool: Pool;
  createdAt: string;
  updatedAt: string;
};

export type UserWallet = {
  __typename: "UserWallet";
  id: string;
  wallet: string;
  nickname: string;
  chatlogo?: string | null;
  brands?: Brand | null;
  totalWinnings: number;
  totalPools: number;
  totalCompletedPools: number;
  totalPoolsWon: number;
  createdAt: string;
  updatedAt: string;
};

export type Brand = {
  __typename: "Brand";
  id: string;
  wallet: string;
  name: string;
  rating: number;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Pool = {
  __typename: "Pool";
  id: string;
  poolId: number;
  poolTitle: string;
  poolCategory: PoolCategory;
  poolCreator: UserWallet;
  poolType: poolType;
  poolStatus: poolStatus;
  poolEntryFee: number;
  poolTotal: number;
  poolWinningPayout: number;
  allowPlayerLeave: boolean;
  apiPoolAttributes?: ApiPoolAttributes | null;
  requestHash: string;
  players?: ModelPlayerConnection | null;
  createdAt: string;
  updatedAt: string;
};

export enum PoolCategory {
  other = "other",
  sports = "sports",
  gaming = "gaming",
  politics = "politics",
  grudge_match = "grudge_match"
}

export enum poolType {
  lottery = "lottery",
  manual = "manual",
  api = "api",
  custom_builder = "custom_builder"
}

export enum poolStatus {
  awaiting = "awaiting",
  completed = "completed",
  terminated = "terminated"
}

export type ApiPoolAttributes = {
  __typename: "ApiPoolAttributes";
  id: string;
  lockFundsDatetime: string;
  executeWinnerDatetime: string;
  apiUrlForResults: string;
  verifiedUrlSchema: boolean;
  poolCreatorPercentFeeToWithold: number;
  apiWinnerOptionEntries: string;
  apiwinnerResult: string;
  poolApiDefaultSchema: string;
  poolApiCustomSchema?: string | null;
  pool?: Pool | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection";
  items: Array<Player>;
  nextToken?: string | null;
};

export type UpdatePlayerInput = {
  status?: PlayerStatus | null;
  playerUserWalletId?: string | null;
  playerPoolId?: string | null;
};

export type DeletePlayerInput = {
  id: string;
};

export type CreateApiPoolAttributesInput = {
  id?: string | null;
  lockFundsDatetime: string;
  executeWinnerDatetime: string;
  apiUrlForResults: string;
  verifiedUrlSchema: boolean;
  poolCreatorPercentFeeToWithold: number;
  apiWinnerOptionEntries: string;
  apiwinnerResult: string;
  poolApiDefaultSchema: string;
  poolApiCustomSchema?: string | null;
  apiPoolAttributesPoolId?: string | null;
};

export type ModelApiPoolAttributesConditionInput = {
  lockFundsDatetime?: ModelStringInput | null;
  executeWinnerDatetime?: ModelStringInput | null;
  apiUrlForResults?: ModelStringInput | null;
  verifiedUrlSchema?: ModelBooleanInput | null;
  poolCreatorPercentFeeToWithold?: ModelIntInput | null;
  apiWinnerOptionEntries?: ModelStringInput | null;
  apiwinnerResult?: ModelStringInput | null;
  poolApiDefaultSchema?: ModelStringInput | null;
  poolApiCustomSchema?: ModelStringInput | null;
  and?: Array<ModelApiPoolAttributesConditionInput | null> | null;
  or?: Array<ModelApiPoolAttributesConditionInput | null> | null;
  not?: ModelApiPoolAttributesConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateApiPoolAttributesInput = {
  lockFundsDatetime?: string | null;
  executeWinnerDatetime?: string | null;
  apiUrlForResults?: string | null;
  verifiedUrlSchema?: boolean | null;
  poolCreatorPercentFeeToWithold?: number | null;
  apiWinnerOptionEntries?: string | null;
  apiwinnerResult?: string | null;
  poolApiDefaultSchema?: string | null;
  poolApiCustomSchema?: string | null;
  apiPoolAttributesPoolId?: string | null;
};

export type DeleteApiPoolAttributesInput = {
  id: string;
};

export type CreatePoolInput = {
  id?: string | null;
  poolId: number;
  poolTitle: string;
  poolCategory: PoolCategory;
  poolType: poolType;
  poolStatus: poolStatus;
  poolEntryFee: number;
  poolTotal: number;
  poolWinningPayout: number;
  allowPlayerLeave: boolean;
  requestHash: string;
  poolPoolCreatorId: string;
  poolApiPoolAttributesId?: string | null;
};

export type ModelPoolConditionInput = {
  poolId?: ModelIntInput | null;
  poolTitle?: ModelStringInput | null;
  poolCategory?: ModelPoolCategoryInput | null;
  poolType?: ModelpoolTypeInput | null;
  poolStatus?: ModelpoolStatusInput | null;
  poolEntryFee?: ModelIntInput | null;
  poolTotal?: ModelIntInput | null;
  poolWinningPayout?: ModelIntInput | null;
  allowPlayerLeave?: ModelBooleanInput | null;
  requestHash?: ModelStringInput | null;
  and?: Array<ModelPoolConditionInput | null> | null;
  or?: Array<ModelPoolConditionInput | null> | null;
  not?: ModelPoolConditionInput | null;
};

export type ModelPoolCategoryInput = {
  eq?: PoolCategory | null;
  ne?: PoolCategory | null;
};

export type ModelpoolTypeInput = {
  eq?: poolType | null;
  ne?: poolType | null;
};

export type ModelpoolStatusInput = {
  eq?: poolStatus | null;
  ne?: poolStatus | null;
};

export type UpdatePoolInput = {
  poolId?: number | null;
  poolTitle?: string | null;
  poolCategory?: PoolCategory | null;
  poolType?: poolType | null;
  poolStatus?: poolStatus | null;
  poolEntryFee?: number | null;
  poolTotal?: number | null;
  poolWinningPayout?: number | null;
  allowPlayerLeave?: boolean | null;
  requestHash?: string | null;
  poolPoolCreatorId?: string | null;
  poolApiPoolAttributesId?: string | null;
};

export type DeletePoolInput = {
  id: string;
};

export type CreatePoolSuccessfullBlockEventsProcessedInput = {
  id?: string | null;
  lastBlockProcessedForCreatedEvents: number;
  lastBlockProcessedForCompletedEvents: number;
  lastBlockProcessedForPlayerJoinedPoolEvents: number;
  lastBlockProcessedForPlayerLeftPoolEvents: number;
  lastBlockProcessedForPoolAwaitingExecution: number;
  lambdaProcessorDecisionCheckForNextBlocknumber: number;
  historicalLastBlockLoadedForEvents: number;
};

export type ModelPoolSuccessfullBlockEventsProcessedConditionInput = {
  lastBlockProcessedForCreatedEvents?: ModelIntInput | null;
  lastBlockProcessedForCompletedEvents?: ModelIntInput | null;
  lastBlockProcessedForPlayerJoinedPoolEvents?: ModelIntInput | null;
  lastBlockProcessedForPlayerLeftPoolEvents?: ModelIntInput | null;
  lastBlockProcessedForPoolAwaitingExecution?: ModelIntInput | null;
  lambdaProcessorDecisionCheckForNextBlocknumber?: ModelIntInput | null;
  historicalLastBlockLoadedForEvents?: ModelIntInput | null;
  and?: Array<ModelPoolSuccessfullBlockEventsProcessedConditionInput | null> | null;
  or?: Array<ModelPoolSuccessfullBlockEventsProcessedConditionInput | null> | null;
  not?: ModelPoolSuccessfullBlockEventsProcessedConditionInput | null;
};

export type PoolSuccessfullBlockEventsProcessed = {
  __typename: "PoolSuccessfullBlockEventsProcessed";
  id: string;
  lastBlockProcessedForCreatedEvents: number;
  lastBlockProcessedForCompletedEvents: number;
  lastBlockProcessedForPlayerJoinedPoolEvents: number;
  lastBlockProcessedForPlayerLeftPoolEvents: number;
  lastBlockProcessedForPoolAwaitingExecution: number;
  lambdaProcessorDecisionCheckForNextBlocknumber: number;
  historicalLastBlockLoadedForEvents: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePoolSuccessfullBlockEventsProcessedInput = {
  id: string;
  lastBlockProcessedForCreatedEvents?: number | null;
  lastBlockProcessedForCompletedEvents?: number | null;
  lastBlockProcessedForPlayerJoinedPoolEvents?: number | null;
  lastBlockProcessedForPlayerLeftPoolEvents?: number | null;
  lastBlockProcessedForPoolAwaitingExecution?: number | null;
  lambdaProcessorDecisionCheckForNextBlocknumber?: number | null;
  historicalLastBlockLoadedForEvents?: number | null;
};

export type DeletePoolSuccessfullBlockEventsProcessedInput = {
  id: string;
};

export type CreatePoolSummariesInput = {
  id?: string | null;
  totalCompletedGames: number;
  totalPlayers: number;
  totalPayouts: number;
  highestSingleWinnerPayout: number;
  highestPoolPayout: number;
};

export type ModelPoolSummariesConditionInput = {
  totalCompletedGames?: ModelIntInput | null;
  totalPlayers?: ModelIntInput | null;
  totalPayouts?: ModelIntInput | null;
  highestSingleWinnerPayout?: ModelIntInput | null;
  highestPoolPayout?: ModelIntInput | null;
  and?: Array<ModelPoolSummariesConditionInput | null> | null;
  or?: Array<ModelPoolSummariesConditionInput | null> | null;
  not?: ModelPoolSummariesConditionInput | null;
};

export type PoolSummaries = {
  __typename: "PoolSummaries";
  id: string;
  totalCompletedGames: number;
  totalPlayers: number;
  totalPayouts: number;
  highestSingleWinnerPayout: number;
  highestPoolPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePoolSummariesInput = {
  id: string;
  totalCompletedGames?: number | null;
  totalPlayers?: number | null;
  totalPayouts?: number | null;
  highestSingleWinnerPayout?: number | null;
  highestPoolPayout?: number | null;
};

export type DeletePoolSummariesInput = {
  id: string;
};

export type CreateUserWalletInput = {
  id?: string | null;
  wallet: string;
  nickname: string;
  chatlogo?: string | null;
  totalWinnings: number;
  totalPools: number;
  totalCompletedPools: number;
  totalPoolsWon: number;
  userWalletBrandsId?: string | null;
};

export type ModelUserWalletConditionInput = {
  wallet?: ModelStringInput | null;
  nickname?: ModelStringInput | null;
  chatlogo?: ModelStringInput | null;
  totalWinnings?: ModelIntInput | null;
  totalPools?: ModelIntInput | null;
  totalCompletedPools?: ModelIntInput | null;
  totalPoolsWon?: ModelIntInput | null;
  and?: Array<ModelUserWalletConditionInput | null> | null;
  or?: Array<ModelUserWalletConditionInput | null> | null;
  not?: ModelUserWalletConditionInput | null;
};

export type UpdateUserWalletInput = {
  id: string;
  wallet?: string | null;
  nickname?: string | null;
  chatlogo?: string | null;
  totalWinnings?: number | null;
  totalPools?: number | null;
  totalCompletedPools?: number | null;
  totalPoolsWon?: number | null;
  userWalletBrandsId?: string | null;
};

export type DeleteUserWalletInput = {
  id: string;
};

export type CreateBrandInput = {
  id?: string | null;
  wallet: string;
  name: string;
  rating: number;
  logo?: string | null;
};

export type ModelBrandConditionInput = {
  wallet?: ModelStringInput | null;
  name?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  logo?: ModelStringInput | null;
  and?: Array<ModelBrandConditionInput | null> | null;
  or?: Array<ModelBrandConditionInput | null> | null;
  not?: ModelBrandConditionInput | null;
};

export type UpdateBrandInput = {
  id: string;
  wallet?: string | null;
  name?: string | null;
  rating?: number | null;
  logo?: string | null;
};

export type DeleteBrandInput = {
  id: string;
};

export type ModelFeedbackFilterInput = {
  comment?: ModelStringInput | null;
  commentType?: ModelfeedbackTypeInput | null;
  status?: ModelfeedbackStatusInput | null;
  wallet?: ModelStringInput | null;
  and?: Array<ModelFeedbackFilterInput | null> | null;
  or?: Array<ModelFeedbackFilterInput | null> | null;
  not?: ModelFeedbackFilterInput | null;
};

export type ModelFeedbackConnection = {
  __typename: "ModelFeedbackConnection";
  items: Array<Feedback>;
  nextToken?: string | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  message?: ModelStringInput | null;
  wallet?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items: Array<Message>;
  nextToken?: string | null;
};

export type ModelGamesSummaryFilterInput = {
  id?: ModelIntInput | null;
  totalCompletedGames?: ModelIntInput | null;
  totalUniquePlayers?: ModelIntInput | null;
  totalPayouts?: ModelFloatInput | null;
  highestPayout?: ModelFloatInput | null;
  and?: Array<ModelGamesSummaryFilterInput | null> | null;
  or?: Array<ModelGamesSummaryFilterInput | null> | null;
  not?: ModelGamesSummaryFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelGamesSummaryConnection = {
  __typename: "ModelGamesSummaryConnection";
  items: Array<GamesSummary>;
  nextToken?: string | null;
};

export type ModelErrorLogFilterInput = {
  id?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  stackTrace?: ModelStringInput | null;
  and?: Array<ModelErrorLogFilterInput | null> | null;
  or?: Array<ModelErrorLogFilterInput | null> | null;
  not?: ModelErrorLogFilterInput | null;
};

export type ModelErrorLogConnection = {
  __typename: "ModelErrorLogConnection";
  items: Array<ErrorLog>;
  nextToken?: string | null;
};

export type ModelPlayerFilterInput = {
  status?: ModelPlayerStatusInput | null;
  and?: Array<ModelPlayerFilterInput | null> | null;
  or?: Array<ModelPlayerFilterInput | null> | null;
  not?: ModelPlayerFilterInput | null;
};

export type ModelApiPoolAttributesFilterInput = {
  lockFundsDatetime?: ModelStringInput | null;
  executeWinnerDatetime?: ModelStringInput | null;
  apiUrlForResults?: ModelStringInput | null;
  verifiedUrlSchema?: ModelBooleanInput | null;
  poolCreatorPercentFeeToWithold?: ModelIntInput | null;
  apiWinnerOptionEntries?: ModelStringInput | null;
  apiwinnerResult?: ModelStringInput | null;
  poolApiDefaultSchema?: ModelStringInput | null;
  poolApiCustomSchema?: ModelStringInput | null;
  and?: Array<ModelApiPoolAttributesFilterInput | null> | null;
  or?: Array<ModelApiPoolAttributesFilterInput | null> | null;
  not?: ModelApiPoolAttributesFilterInput | null;
};

export type ModelApiPoolAttributesConnection = {
  __typename: "ModelApiPoolAttributesConnection";
  items: Array<ApiPoolAttributes>;
  nextToken?: string | null;
};

export type ModelPoolFilterInput = {
  poolId?: ModelIntInput | null;
  poolTitle?: ModelStringInput | null;
  poolCategory?: ModelPoolCategoryInput | null;
  poolType?: ModelpoolTypeInput | null;
  poolStatus?: ModelpoolStatusInput | null;
  poolEntryFee?: ModelIntInput | null;
  poolTotal?: ModelIntInput | null;
  poolWinningPayout?: ModelIntInput | null;
  allowPlayerLeave?: ModelBooleanInput | null;
  requestHash?: ModelStringInput | null;
  and?: Array<ModelPoolFilterInput | null> | null;
  or?: Array<ModelPoolFilterInput | null> | null;
  not?: ModelPoolFilterInput | null;
};

export type ModelPoolConnection = {
  __typename: "ModelPoolConnection";
  items: Array<Pool>;
  nextToken?: string | null;
};

export type ModelPoolSuccessfullBlockEventsProcessedFilterInput = {
  id?: ModelIDInput | null;
  lastBlockProcessedForCreatedEvents?: ModelIntInput | null;
  lastBlockProcessedForCompletedEvents?: ModelIntInput | null;
  lastBlockProcessedForPlayerJoinedPoolEvents?: ModelIntInput | null;
  lastBlockProcessedForPlayerLeftPoolEvents?: ModelIntInput | null;
  lastBlockProcessedForPoolAwaitingExecution?: ModelIntInput | null;
  lambdaProcessorDecisionCheckForNextBlocknumber?: ModelIntInput | null;
  historicalLastBlockLoadedForEvents?: ModelIntInput | null;
  and?: Array<ModelPoolSuccessfullBlockEventsProcessedFilterInput | null> | null;
  or?: Array<ModelPoolSuccessfullBlockEventsProcessedFilterInput | null> | null;
  not?: ModelPoolSuccessfullBlockEventsProcessedFilterInput | null;
};

export type ModelPoolSuccessfullBlockEventsProcessedConnection = {
  __typename: "ModelPoolSuccessfullBlockEventsProcessedConnection";
  items: Array<PoolSuccessfullBlockEventsProcessed>;
  nextToken?: string | null;
};

export type ModelPoolSummariesFilterInput = {
  id?: ModelIDInput | null;
  totalCompletedGames?: ModelIntInput | null;
  totalPlayers?: ModelIntInput | null;
  totalPayouts?: ModelIntInput | null;
  highestSingleWinnerPayout?: ModelIntInput | null;
  highestPoolPayout?: ModelIntInput | null;
  and?: Array<ModelPoolSummariesFilterInput | null> | null;
  or?: Array<ModelPoolSummariesFilterInput | null> | null;
  not?: ModelPoolSummariesFilterInput | null;
};

export type ModelPoolSummariesConnection = {
  __typename: "ModelPoolSummariesConnection";
  items: Array<PoolSummaries>;
  nextToken?: string | null;
};

export type ModelUserWalletFilterInput = {
  id?: ModelIDInput | null;
  wallet?: ModelStringInput | null;
  nickname?: ModelStringInput | null;
  chatlogo?: ModelStringInput | null;
  totalWinnings?: ModelIntInput | null;
  totalPools?: ModelIntInput | null;
  totalCompletedPools?: ModelIntInput | null;
  totalPoolsWon?: ModelIntInput | null;
  and?: Array<ModelUserWalletFilterInput | null> | null;
  or?: Array<ModelUserWalletFilterInput | null> | null;
  not?: ModelUserWalletFilterInput | null;
};

export type ModelUserWalletConnection = {
  __typename: "ModelUserWalletConnection";
  items: Array<UserWallet>;
  nextToken?: string | null;
};

export type ModelBrandFilterInput = {
  id?: ModelIDInput | null;
  wallet?: ModelStringInput | null;
  name?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  logo?: ModelStringInput | null;
  and?: Array<ModelBrandFilterInput | null> | null;
  or?: Array<ModelBrandFilterInput | null> | null;
  not?: ModelBrandFilterInput | null;
};

export type ModelBrandConnection = {
  __typename: "ModelBrandConnection";
  items: Array<Brand>;
  nextToken?: string | null;
};

export type CreateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateGamesSummaryMutation = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGamesSummaryMutation = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteGamesSummaryMutation = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateErrorLogMutation = {
  __typename: "ErrorLog";
  id: string;
  createdAt: string;
  stackTrace: string;
  updatedAt: string;
};

export type UpdateErrorLogMutation = {
  __typename: "ErrorLog";
  id: string;
  createdAt: string;
  stackTrace: string;
  updatedAt: string;
};

export type DeleteErrorLogMutation = {
  __typename: "ErrorLog";
  id: string;
  createdAt: string;
  stackTrace: string;
  updatedAt: string;
};

export type CreatePlayerMutation = {
  __typename: "Player";
  id: string;
  userWallet: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  status: PlayerStatus;
  pool: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdatePlayerMutation = {
  __typename: "Player";
  id: string;
  userWallet: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  status: PlayerStatus;
  pool: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeletePlayerMutation = {
  __typename: "Player";
  id: string;
  userWallet: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  status: PlayerStatus;
  pool: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateApiPoolAttributesMutation = {
  __typename: "ApiPoolAttributes";
  id: string;
  lockFundsDatetime: string;
  executeWinnerDatetime: string;
  apiUrlForResults: string;
  verifiedUrlSchema: boolean;
  poolCreatorPercentFeeToWithold: number;
  apiWinnerOptionEntries: string;
  apiwinnerResult: string;
  poolApiDefaultSchema: string;
  poolApiCustomSchema?: string | null;
  pool?: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateApiPoolAttributesMutation = {
  __typename: "ApiPoolAttributes";
  id: string;
  lockFundsDatetime: string;
  executeWinnerDatetime: string;
  apiUrlForResults: string;
  verifiedUrlSchema: boolean;
  poolCreatorPercentFeeToWithold: number;
  apiWinnerOptionEntries: string;
  apiwinnerResult: string;
  poolApiDefaultSchema: string;
  poolApiCustomSchema?: string | null;
  pool?: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteApiPoolAttributesMutation = {
  __typename: "ApiPoolAttributes";
  id: string;
  lockFundsDatetime: string;
  executeWinnerDatetime: string;
  apiUrlForResults: string;
  verifiedUrlSchema: boolean;
  poolCreatorPercentFeeToWithold: number;
  apiWinnerOptionEntries: string;
  apiwinnerResult: string;
  poolApiDefaultSchema: string;
  poolApiCustomSchema?: string | null;
  pool?: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePoolMutation = {
  __typename: "Pool";
  id: string;
  poolId: number;
  poolTitle: string;
  poolCategory: PoolCategory;
  poolCreator: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  poolType: poolType;
  poolStatus: poolStatus;
  poolEntryFee: number;
  poolTotal: number;
  poolWinningPayout: number;
  allowPlayerLeave: boolean;
  apiPoolAttributes?: {
    __typename: "ApiPoolAttributes";
    id: string;
    lockFundsDatetime: string;
    executeWinnerDatetime: string;
    apiUrlForResults: string;
    verifiedUrlSchema: boolean;
    poolCreatorPercentFeeToWithold: number;
    apiWinnerOptionEntries: string;
    apiwinnerResult: string;
    poolApiDefaultSchema: string;
    poolApiCustomSchema?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  requestHash: string;
  players?: {
    __typename: "ModelPlayerConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePoolMutation = {
  __typename: "Pool";
  id: string;
  poolId: number;
  poolTitle: string;
  poolCategory: PoolCategory;
  poolCreator: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  poolType: poolType;
  poolStatus: poolStatus;
  poolEntryFee: number;
  poolTotal: number;
  poolWinningPayout: number;
  allowPlayerLeave: boolean;
  apiPoolAttributes?: {
    __typename: "ApiPoolAttributes";
    id: string;
    lockFundsDatetime: string;
    executeWinnerDatetime: string;
    apiUrlForResults: string;
    verifiedUrlSchema: boolean;
    poolCreatorPercentFeeToWithold: number;
    apiWinnerOptionEntries: string;
    apiwinnerResult: string;
    poolApiDefaultSchema: string;
    poolApiCustomSchema?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  requestHash: string;
  players?: {
    __typename: "ModelPlayerConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePoolMutation = {
  __typename: "Pool";
  id: string;
  poolId: number;
  poolTitle: string;
  poolCategory: PoolCategory;
  poolCreator: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  poolType: poolType;
  poolStatus: poolStatus;
  poolEntryFee: number;
  poolTotal: number;
  poolWinningPayout: number;
  allowPlayerLeave: boolean;
  apiPoolAttributes?: {
    __typename: "ApiPoolAttributes";
    id: string;
    lockFundsDatetime: string;
    executeWinnerDatetime: string;
    apiUrlForResults: string;
    verifiedUrlSchema: boolean;
    poolCreatorPercentFeeToWithold: number;
    apiWinnerOptionEntries: string;
    apiwinnerResult: string;
    poolApiDefaultSchema: string;
    poolApiCustomSchema?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  requestHash: string;
  players?: {
    __typename: "ModelPlayerConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePoolSuccessfullBlockEventsProcessedMutation = {
  __typename: "PoolSuccessfullBlockEventsProcessed";
  id: string;
  lastBlockProcessedForCreatedEvents: number;
  lastBlockProcessedForCompletedEvents: number;
  lastBlockProcessedForPlayerJoinedPoolEvents: number;
  lastBlockProcessedForPlayerLeftPoolEvents: number;
  lastBlockProcessedForPoolAwaitingExecution: number;
  lambdaProcessorDecisionCheckForNextBlocknumber: number;
  historicalLastBlockLoadedForEvents: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePoolSuccessfullBlockEventsProcessedMutation = {
  __typename: "PoolSuccessfullBlockEventsProcessed";
  id: string;
  lastBlockProcessedForCreatedEvents: number;
  lastBlockProcessedForCompletedEvents: number;
  lastBlockProcessedForPlayerJoinedPoolEvents: number;
  lastBlockProcessedForPlayerLeftPoolEvents: number;
  lastBlockProcessedForPoolAwaitingExecution: number;
  lambdaProcessorDecisionCheckForNextBlocknumber: number;
  historicalLastBlockLoadedForEvents: number;
  createdAt: string;
  updatedAt: string;
};

export type DeletePoolSuccessfullBlockEventsProcessedMutation = {
  __typename: "PoolSuccessfullBlockEventsProcessed";
  id: string;
  lastBlockProcessedForCreatedEvents: number;
  lastBlockProcessedForCompletedEvents: number;
  lastBlockProcessedForPlayerJoinedPoolEvents: number;
  lastBlockProcessedForPlayerLeftPoolEvents: number;
  lastBlockProcessedForPoolAwaitingExecution: number;
  lambdaProcessorDecisionCheckForNextBlocknumber: number;
  historicalLastBlockLoadedForEvents: number;
  createdAt: string;
  updatedAt: string;
};

export type CreatePoolSummariesMutation = {
  __typename: "PoolSummaries";
  id: string;
  totalCompletedGames: number;
  totalPlayers: number;
  totalPayouts: number;
  highestSingleWinnerPayout: number;
  highestPoolPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePoolSummariesMutation = {
  __typename: "PoolSummaries";
  id: string;
  totalCompletedGames: number;
  totalPlayers: number;
  totalPayouts: number;
  highestSingleWinnerPayout: number;
  highestPoolPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type DeletePoolSummariesMutation = {
  __typename: "PoolSummaries";
  id: string;
  totalCompletedGames: number;
  totalPlayers: number;
  totalPayouts: number;
  highestSingleWinnerPayout: number;
  highestPoolPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserWalletMutation = {
  __typename: "UserWallet";
  id: string;
  wallet: string;
  nickname: string;
  chatlogo?: string | null;
  brands?: {
    __typename: "Brand";
    id: string;
    wallet: string;
    name: string;
    rating: number;
    logo?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  totalWinnings: number;
  totalPools: number;
  totalCompletedPools: number;
  totalPoolsWon: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserWalletMutation = {
  __typename: "UserWallet";
  id: string;
  wallet: string;
  nickname: string;
  chatlogo?: string | null;
  brands?: {
    __typename: "Brand";
    id: string;
    wallet: string;
    name: string;
    rating: number;
    logo?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  totalWinnings: number;
  totalPools: number;
  totalCompletedPools: number;
  totalPoolsWon: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserWalletMutation = {
  __typename: "UserWallet";
  id: string;
  wallet: string;
  nickname: string;
  chatlogo?: string | null;
  brands?: {
    __typename: "Brand";
    id: string;
    wallet: string;
    name: string;
    rating: number;
    logo?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  totalWinnings: number;
  totalPools: number;
  totalCompletedPools: number;
  totalPoolsWon: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateBrandMutation = {
  __typename: "Brand";
  id: string;
  wallet: string;
  name: string;
  rating: number;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBrandMutation = {
  __typename: "Brand";
  id: string;
  wallet: string;
  name: string;
  rating: number;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBrandMutation = {
  __typename: "Brand";
  id: string;
  wallet: string;
  name: string;
  rating: number;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetFeedbackQuery = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type ListFeedbacksQuery = {
  __typename: "ModelFeedbackConnection";
  items: Array<{
    __typename: "Feedback";
    id: string;
    comment: string;
    commentType: feedbackType;
    status: feedbackStatus;
    wallet: string;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    message: string;
    wallet: string;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetGamesSummaryQuery = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type ListGamesSummarysQuery = {
  __typename: "ModelGamesSummaryConnection";
  items: Array<{
    __typename: "GamesSummary";
    id: number;
    totalCompletedGames: number;
    totalUniquePlayers: number;
    totalPayouts: number;
    highestPayout: number;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetErrorLogQuery = {
  __typename: "ErrorLog";
  id: string;
  createdAt: string;
  stackTrace: string;
  updatedAt: string;
};

export type ListErrorLogsQuery = {
  __typename: "ModelErrorLogConnection";
  items: Array<{
    __typename: "ErrorLog";
    id: string;
    createdAt: string;
    stackTrace: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetPlayerQuery = {
  __typename: "Player";
  id: string;
  userWallet: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  status: PlayerStatus;
  pool: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListPlayersQuery = {
  __typename: "ModelPlayerConnection";
  items: Array<{
    __typename: "Player";
    id: string;
    status: PlayerStatus;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetApiPoolAttributesQuery = {
  __typename: "ApiPoolAttributes";
  id: string;
  lockFundsDatetime: string;
  executeWinnerDatetime: string;
  apiUrlForResults: string;
  verifiedUrlSchema: boolean;
  poolCreatorPercentFeeToWithold: number;
  apiWinnerOptionEntries: string;
  apiwinnerResult: string;
  poolApiDefaultSchema: string;
  poolApiCustomSchema?: string | null;
  pool?: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListApiPoolAttributessQuery = {
  __typename: "ModelApiPoolAttributesConnection";
  items: Array<{
    __typename: "ApiPoolAttributes";
    id: string;
    lockFundsDatetime: string;
    executeWinnerDatetime: string;
    apiUrlForResults: string;
    verifiedUrlSchema: boolean;
    poolCreatorPercentFeeToWithold: number;
    apiWinnerOptionEntries: string;
    apiwinnerResult: string;
    poolApiDefaultSchema: string;
    poolApiCustomSchema?: string | null;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetPoolQuery = {
  __typename: "Pool";
  id: string;
  poolId: number;
  poolTitle: string;
  poolCategory: PoolCategory;
  poolCreator: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  poolType: poolType;
  poolStatus: poolStatus;
  poolEntryFee: number;
  poolTotal: number;
  poolWinningPayout: number;
  allowPlayerLeave: boolean;
  apiPoolAttributes?: {
    __typename: "ApiPoolAttributes";
    id: string;
    lockFundsDatetime: string;
    executeWinnerDatetime: string;
    apiUrlForResults: string;
    verifiedUrlSchema: boolean;
    poolCreatorPercentFeeToWithold: number;
    apiWinnerOptionEntries: string;
    apiwinnerResult: string;
    poolApiDefaultSchema: string;
    poolApiCustomSchema?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  requestHash: string;
  players?: {
    __typename: "ModelPlayerConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPoolsQuery = {
  __typename: "ModelPoolConnection";
  items: Array<{
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetPoolSuccessfullBlockEventsProcessedQuery = {
  __typename: "PoolSuccessfullBlockEventsProcessed";
  id: string;
  lastBlockProcessedForCreatedEvents: number;
  lastBlockProcessedForCompletedEvents: number;
  lastBlockProcessedForPlayerJoinedPoolEvents: number;
  lastBlockProcessedForPlayerLeftPoolEvents: number;
  lastBlockProcessedForPoolAwaitingExecution: number;
  lambdaProcessorDecisionCheckForNextBlocknumber: number;
  historicalLastBlockLoadedForEvents: number;
  createdAt: string;
  updatedAt: string;
};

export type ListPoolSuccessfullBlockEventsProcessedsQuery = {
  __typename: "ModelPoolSuccessfullBlockEventsProcessedConnection";
  items: Array<{
    __typename: "PoolSuccessfullBlockEventsProcessed";
    id: string;
    lastBlockProcessedForCreatedEvents: number;
    lastBlockProcessedForCompletedEvents: number;
    lastBlockProcessedForPlayerJoinedPoolEvents: number;
    lastBlockProcessedForPlayerLeftPoolEvents: number;
    lastBlockProcessedForPoolAwaitingExecution: number;
    lambdaProcessorDecisionCheckForNextBlocknumber: number;
    historicalLastBlockLoadedForEvents: number;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetPoolSummariesQuery = {
  __typename: "PoolSummaries";
  id: string;
  totalCompletedGames: number;
  totalPlayers: number;
  totalPayouts: number;
  highestSingleWinnerPayout: number;
  highestPoolPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type ListPoolSummariessQuery = {
  __typename: "ModelPoolSummariesConnection";
  items: Array<{
    __typename: "PoolSummaries";
    id: string;
    totalCompletedGames: number;
    totalPlayers: number;
    totalPayouts: number;
    highestSingleWinnerPayout: number;
    highestPoolPayout: number;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetUserWalletQuery = {
  __typename: "UserWallet";
  id: string;
  wallet: string;
  nickname: string;
  chatlogo?: string | null;
  brands?: {
    __typename: "Brand";
    id: string;
    wallet: string;
    name: string;
    rating: number;
    logo?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  totalWinnings: number;
  totalPools: number;
  totalCompletedPools: number;
  totalPoolsWon: number;
  createdAt: string;
  updatedAt: string;
};

export type ListUserWalletsQuery = {
  __typename: "ModelUserWalletConnection";
  items: Array<{
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetBrandQuery = {
  __typename: "Brand";
  id: string;
  wallet: string;
  name: string;
  rating: number;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBrandsQuery = {
  __typename: "ModelBrandConnection";
  items: Array<{
    __typename: "Brand";
    id: string;
    wallet: string;
    name: string;
    rating: number;
    logo?: string | null;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type OnCreateFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateGamesSummarySubscription = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateGamesSummarySubscription = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteGamesSummarySubscription = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateErrorLogSubscription = {
  __typename: "ErrorLog";
  id: string;
  createdAt: string;
  stackTrace: string;
  updatedAt: string;
};

export type OnUpdateErrorLogSubscription = {
  __typename: "ErrorLog";
  id: string;
  createdAt: string;
  stackTrace: string;
  updatedAt: string;
};

export type OnDeleteErrorLogSubscription = {
  __typename: "ErrorLog";
  id: string;
  createdAt: string;
  stackTrace: string;
  updatedAt: string;
};

export type OnCreatePlayerSubscription = {
  __typename: "Player";
  id: string;
  userWallet: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  status: PlayerStatus;
  pool: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePlayerSubscription = {
  __typename: "Player";
  id: string;
  userWallet: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  status: PlayerStatus;
  pool: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePlayerSubscription = {
  __typename: "Player";
  id: string;
  userWallet: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  status: PlayerStatus;
  pool: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateApiPoolAttributesSubscription = {
  __typename: "ApiPoolAttributes";
  id: string;
  lockFundsDatetime: string;
  executeWinnerDatetime: string;
  apiUrlForResults: string;
  verifiedUrlSchema: boolean;
  poolCreatorPercentFeeToWithold: number;
  apiWinnerOptionEntries: string;
  apiwinnerResult: string;
  poolApiDefaultSchema: string;
  poolApiCustomSchema?: string | null;
  pool?: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateApiPoolAttributesSubscription = {
  __typename: "ApiPoolAttributes";
  id: string;
  lockFundsDatetime: string;
  executeWinnerDatetime: string;
  apiUrlForResults: string;
  verifiedUrlSchema: boolean;
  poolCreatorPercentFeeToWithold: number;
  apiWinnerOptionEntries: string;
  apiwinnerResult: string;
  poolApiDefaultSchema: string;
  poolApiCustomSchema?: string | null;
  pool?: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteApiPoolAttributesSubscription = {
  __typename: "ApiPoolAttributes";
  id: string;
  lockFundsDatetime: string;
  executeWinnerDatetime: string;
  apiUrlForResults: string;
  verifiedUrlSchema: boolean;
  poolCreatorPercentFeeToWithold: number;
  apiWinnerOptionEntries: string;
  apiwinnerResult: string;
  poolApiDefaultSchema: string;
  poolApiCustomSchema?: string | null;
  pool?: {
    __typename: "Pool";
    id: string;
    poolId: number;
    poolTitle: string;
    poolCategory: PoolCategory;
    poolType: poolType;
    poolStatus: poolStatus;
    poolEntryFee: number;
    poolTotal: number;
    poolWinningPayout: number;
    allowPlayerLeave: boolean;
    requestHash: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePoolSubscription = {
  __typename: "Pool";
  id: string;
  poolId: number;
  poolTitle: string;
  poolCategory: PoolCategory;
  poolCreator: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  poolType: poolType;
  poolStatus: poolStatus;
  poolEntryFee: number;
  poolTotal: number;
  poolWinningPayout: number;
  allowPlayerLeave: boolean;
  apiPoolAttributes?: {
    __typename: "ApiPoolAttributes";
    id: string;
    lockFundsDatetime: string;
    executeWinnerDatetime: string;
    apiUrlForResults: string;
    verifiedUrlSchema: boolean;
    poolCreatorPercentFeeToWithold: number;
    apiWinnerOptionEntries: string;
    apiwinnerResult: string;
    poolApiDefaultSchema: string;
    poolApiCustomSchema?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  requestHash: string;
  players?: {
    __typename: "ModelPlayerConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePoolSubscription = {
  __typename: "Pool";
  id: string;
  poolId: number;
  poolTitle: string;
  poolCategory: PoolCategory;
  poolCreator: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  poolType: poolType;
  poolStatus: poolStatus;
  poolEntryFee: number;
  poolTotal: number;
  poolWinningPayout: number;
  allowPlayerLeave: boolean;
  apiPoolAttributes?: {
    __typename: "ApiPoolAttributes";
    id: string;
    lockFundsDatetime: string;
    executeWinnerDatetime: string;
    apiUrlForResults: string;
    verifiedUrlSchema: boolean;
    poolCreatorPercentFeeToWithold: number;
    apiWinnerOptionEntries: string;
    apiwinnerResult: string;
    poolApiDefaultSchema: string;
    poolApiCustomSchema?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  requestHash: string;
  players?: {
    __typename: "ModelPlayerConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePoolSubscription = {
  __typename: "Pool";
  id: string;
  poolId: number;
  poolTitle: string;
  poolCategory: PoolCategory;
  poolCreator: {
    __typename: "UserWallet";
    id: string;
    wallet: string;
    nickname: string;
    chatlogo?: string | null;
    totalWinnings: number;
    totalPools: number;
    totalCompletedPools: number;
    totalPoolsWon: number;
    createdAt: string;
    updatedAt: string;
  };
  poolType: poolType;
  poolStatus: poolStatus;
  poolEntryFee: number;
  poolTotal: number;
  poolWinningPayout: number;
  allowPlayerLeave: boolean;
  apiPoolAttributes?: {
    __typename: "ApiPoolAttributes";
    id: string;
    lockFundsDatetime: string;
    executeWinnerDatetime: string;
    apiUrlForResults: string;
    verifiedUrlSchema: boolean;
    poolCreatorPercentFeeToWithold: number;
    apiWinnerOptionEntries: string;
    apiwinnerResult: string;
    poolApiDefaultSchema: string;
    poolApiCustomSchema?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  requestHash: string;
  players?: {
    __typename: "ModelPlayerConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePoolSuccessfullBlockEventsProcessedSubscription = {
  __typename: "PoolSuccessfullBlockEventsProcessed";
  id: string;
  lastBlockProcessedForCreatedEvents: number;
  lastBlockProcessedForCompletedEvents: number;
  lastBlockProcessedForPlayerJoinedPoolEvents: number;
  lastBlockProcessedForPlayerLeftPoolEvents: number;
  lastBlockProcessedForPoolAwaitingExecution: number;
  lambdaProcessorDecisionCheckForNextBlocknumber: number;
  historicalLastBlockLoadedForEvents: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePoolSuccessfullBlockEventsProcessedSubscription = {
  __typename: "PoolSuccessfullBlockEventsProcessed";
  id: string;
  lastBlockProcessedForCreatedEvents: number;
  lastBlockProcessedForCompletedEvents: number;
  lastBlockProcessedForPlayerJoinedPoolEvents: number;
  lastBlockProcessedForPlayerLeftPoolEvents: number;
  lastBlockProcessedForPoolAwaitingExecution: number;
  lambdaProcessorDecisionCheckForNextBlocknumber: number;
  historicalLastBlockLoadedForEvents: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePoolSuccessfullBlockEventsProcessedSubscription = {
  __typename: "PoolSuccessfullBlockEventsProcessed";
  id: string;
  lastBlockProcessedForCreatedEvents: number;
  lastBlockProcessedForCompletedEvents: number;
  lastBlockProcessedForPlayerJoinedPoolEvents: number;
  lastBlockProcessedForPlayerLeftPoolEvents: number;
  lastBlockProcessedForPoolAwaitingExecution: number;
  lambdaProcessorDecisionCheckForNextBlocknumber: number;
  historicalLastBlockLoadedForEvents: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePoolSummariesSubscription = {
  __typename: "PoolSummaries";
  id: string;
  totalCompletedGames: number;
  totalPlayers: number;
  totalPayouts: number;
  highestSingleWinnerPayout: number;
  highestPoolPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePoolSummariesSubscription = {
  __typename: "PoolSummaries";
  id: string;
  totalCompletedGames: number;
  totalPlayers: number;
  totalPayouts: number;
  highestSingleWinnerPayout: number;
  highestPoolPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePoolSummariesSubscription = {
  __typename: "PoolSummaries";
  id: string;
  totalCompletedGames: number;
  totalPlayers: number;
  totalPayouts: number;
  highestSingleWinnerPayout: number;
  highestPoolPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserWalletSubscription = {
  __typename: "UserWallet";
  id: string;
  wallet: string;
  nickname: string;
  chatlogo?: string | null;
  brands?: {
    __typename: "Brand";
    id: string;
    wallet: string;
    name: string;
    rating: number;
    logo?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  totalWinnings: number;
  totalPools: number;
  totalCompletedPools: number;
  totalPoolsWon: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserWalletSubscription = {
  __typename: "UserWallet";
  id: string;
  wallet: string;
  nickname: string;
  chatlogo?: string | null;
  brands?: {
    __typename: "Brand";
    id: string;
    wallet: string;
    name: string;
    rating: number;
    logo?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  totalWinnings: number;
  totalPools: number;
  totalCompletedPools: number;
  totalPoolsWon: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserWalletSubscription = {
  __typename: "UserWallet";
  id: string;
  wallet: string;
  nickname: string;
  chatlogo?: string | null;
  brands?: {
    __typename: "Brand";
    id: string;
    wallet: string;
    name: string;
    rating: number;
    logo?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  totalWinnings: number;
  totalPools: number;
  totalCompletedPools: number;
  totalPoolsWon: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBrandSubscription = {
  __typename: "Brand";
  id: string;
  wallet: string;
  name: string;
  rating: number;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBrandSubscription = {
  __typename: "Brand";
  id: string;
  wallet: string;
  name: string;
  rating: number;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBrandSubscription = {
  __typename: "Brand";
  id: string;
  wallet: string;
  name: string;
  rating: number;
  logo?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFeedback(
    input: CreateFeedbackInput,
    condition?: ModelFeedbackConditionInput
  ): Promise<CreateFeedbackMutation> {
    const statement = `mutation CreateFeedback($input: CreateFeedbackInput!, $condition: ModelFeedbackConditionInput) {
        createFeedback(input: $input, condition: $condition) {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFeedbackMutation>response.data.createFeedback;
  }
  async UpdateFeedback(
    input: UpdateFeedbackInput,
    condition?: ModelFeedbackConditionInput
  ): Promise<UpdateFeedbackMutation> {
    const statement = `mutation UpdateFeedback($input: UpdateFeedbackInput!, $condition: ModelFeedbackConditionInput) {
        updateFeedback(input: $input, condition: $condition) {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFeedbackMutation>response.data.updateFeedback;
  }
  async DeleteFeedback(
    input: DeleteFeedbackInput,
    condition?: ModelFeedbackConditionInput
  ): Promise<DeleteFeedbackMutation> {
    const statement = `mutation DeleteFeedback($input: DeleteFeedbackInput!, $condition: ModelFeedbackConditionInput) {
        deleteFeedback(input: $input, condition: $condition) {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFeedbackMutation>response.data.deleteFeedback;
  }
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
        updateMessage(input: $input, condition: $condition) {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
        deleteMessage(input: $input, condition: $condition) {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async CreateGamesSummary(
    input: CreateGamesSummaryInput,
    condition?: ModelGamesSummaryConditionInput
  ): Promise<CreateGamesSummaryMutation> {
    const statement = `mutation CreateGamesSummary($input: CreateGamesSummaryInput!, $condition: ModelGamesSummaryConditionInput) {
        createGamesSummary(input: $input, condition: $condition) {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGamesSummaryMutation>response.data.createGamesSummary;
  }
  async UpdateGamesSummary(
    input: UpdateGamesSummaryInput,
    condition?: ModelGamesSummaryConditionInput
  ): Promise<UpdateGamesSummaryMutation> {
    const statement = `mutation UpdateGamesSummary($input: UpdateGamesSummaryInput!, $condition: ModelGamesSummaryConditionInput) {
        updateGamesSummary(input: $input, condition: $condition) {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGamesSummaryMutation>response.data.updateGamesSummary;
  }
  async DeleteGamesSummary(
    input: DeleteGamesSummaryInput,
    condition?: ModelGamesSummaryConditionInput
  ): Promise<DeleteGamesSummaryMutation> {
    const statement = `mutation DeleteGamesSummary($input: DeleteGamesSummaryInput!, $condition: ModelGamesSummaryConditionInput) {
        deleteGamesSummary(input: $input, condition: $condition) {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGamesSummaryMutation>response.data.deleteGamesSummary;
  }
  async CreateErrorLog(
    input: CreateErrorLogInput,
    condition?: ModelErrorLogConditionInput
  ): Promise<CreateErrorLogMutation> {
    const statement = `mutation CreateErrorLog($input: CreateErrorLogInput!, $condition: ModelErrorLogConditionInput) {
        createErrorLog(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateErrorLogMutation>response.data.createErrorLog;
  }
  async UpdateErrorLog(
    input: UpdateErrorLogInput,
    condition?: ModelErrorLogConditionInput
  ): Promise<UpdateErrorLogMutation> {
    const statement = `mutation UpdateErrorLog($input: UpdateErrorLogInput!, $condition: ModelErrorLogConditionInput) {
        updateErrorLog(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateErrorLogMutation>response.data.updateErrorLog;
  }
  async DeleteErrorLog(
    input: DeleteErrorLogInput,
    condition?: ModelErrorLogConditionInput
  ): Promise<DeleteErrorLogMutation> {
    const statement = `mutation DeleteErrorLog($input: DeleteErrorLogInput!, $condition: ModelErrorLogConditionInput) {
        deleteErrorLog(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteErrorLogMutation>response.data.deleteErrorLog;
  }
  async CreatePlayer(
    input: CreatePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<CreatePlayerMutation> {
    const statement = `mutation CreatePlayer($input: CreatePlayerInput!, $condition: ModelPlayerConditionInput) {
        createPlayer(input: $input, condition: $condition) {
          __typename
          id
          userWallet {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          status
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlayerMutation>response.data.createPlayer;
  }
  async UpdatePlayer(
    input: UpdatePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<UpdatePlayerMutation> {
    const statement = `mutation UpdatePlayer($input: UpdatePlayerInput!, $condition: ModelPlayerConditionInput) {
        updatePlayer(input: $input, condition: $condition) {
          __typename
          id
          userWallet {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          status
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlayerMutation>response.data.updatePlayer;
  }
  async DeletePlayer(
    input: DeletePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<DeletePlayerMutation> {
    const statement = `mutation DeletePlayer($input: DeletePlayerInput!, $condition: ModelPlayerConditionInput) {
        deletePlayer(input: $input, condition: $condition) {
          __typename
          id
          userWallet {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          status
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlayerMutation>response.data.deletePlayer;
  }
  async CreateApiPoolAttributes(
    input: CreateApiPoolAttributesInput,
    condition?: ModelApiPoolAttributesConditionInput
  ): Promise<CreateApiPoolAttributesMutation> {
    const statement = `mutation CreateApiPoolAttributes($input: CreateApiPoolAttributesInput!, $condition: ModelApiPoolAttributesConditionInput) {
        createApiPoolAttributes(input: $input, condition: $condition) {
          __typename
          id
          lockFundsDatetime
          executeWinnerDatetime
          apiUrlForResults
          verifiedUrlSchema
          poolCreatorPercentFeeToWithold
          apiWinnerOptionEntries
          apiwinnerResult
          poolApiDefaultSchema
          poolApiCustomSchema
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateApiPoolAttributesMutation>(
      response.data.createApiPoolAttributes
    );
  }
  async UpdateApiPoolAttributes(
    input: UpdateApiPoolAttributesInput,
    condition?: ModelApiPoolAttributesConditionInput
  ): Promise<UpdateApiPoolAttributesMutation> {
    const statement = `mutation UpdateApiPoolAttributes($input: UpdateApiPoolAttributesInput!, $condition: ModelApiPoolAttributesConditionInput) {
        updateApiPoolAttributes(input: $input, condition: $condition) {
          __typename
          id
          lockFundsDatetime
          executeWinnerDatetime
          apiUrlForResults
          verifiedUrlSchema
          poolCreatorPercentFeeToWithold
          apiWinnerOptionEntries
          apiwinnerResult
          poolApiDefaultSchema
          poolApiCustomSchema
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateApiPoolAttributesMutation>(
      response.data.updateApiPoolAttributes
    );
  }
  async DeleteApiPoolAttributes(
    input: DeleteApiPoolAttributesInput,
    condition?: ModelApiPoolAttributesConditionInput
  ): Promise<DeleteApiPoolAttributesMutation> {
    const statement = `mutation DeleteApiPoolAttributes($input: DeleteApiPoolAttributesInput!, $condition: ModelApiPoolAttributesConditionInput) {
        deleteApiPoolAttributes(input: $input, condition: $condition) {
          __typename
          id
          lockFundsDatetime
          executeWinnerDatetime
          apiUrlForResults
          verifiedUrlSchema
          poolCreatorPercentFeeToWithold
          apiWinnerOptionEntries
          apiwinnerResult
          poolApiDefaultSchema
          poolApiCustomSchema
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteApiPoolAttributesMutation>(
      response.data.deleteApiPoolAttributes
    );
  }
  async CreatePool(
    input: CreatePoolInput,
    condition?: ModelPoolConditionInput
  ): Promise<CreatePoolMutation> {
    const statement = `mutation CreatePool($input: CreatePoolInput!, $condition: ModelPoolConditionInput) {
        createPool(input: $input, condition: $condition) {
          __typename
          id
          poolId
          poolTitle
          poolCategory
          poolCreator {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          poolType
          poolStatus
          poolEntryFee
          poolTotal
          poolWinningPayout
          allowPlayerLeave
          apiPoolAttributes {
            __typename
            id
            lockFundsDatetime
            executeWinnerDatetime
            apiUrlForResults
            verifiedUrlSchema
            poolCreatorPercentFeeToWithold
            apiWinnerOptionEntries
            apiwinnerResult
            poolApiDefaultSchema
            poolApiCustomSchema
            createdAt
            updatedAt
          }
          requestHash
          players {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePoolMutation>response.data.createPool;
  }
  async UpdatePool(
    input: UpdatePoolInput,
    condition?: ModelPoolConditionInput
  ): Promise<UpdatePoolMutation> {
    const statement = `mutation UpdatePool($input: UpdatePoolInput!, $condition: ModelPoolConditionInput) {
        updatePool(input: $input, condition: $condition) {
          __typename
          id
          poolId
          poolTitle
          poolCategory
          poolCreator {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          poolType
          poolStatus
          poolEntryFee
          poolTotal
          poolWinningPayout
          allowPlayerLeave
          apiPoolAttributes {
            __typename
            id
            lockFundsDatetime
            executeWinnerDatetime
            apiUrlForResults
            verifiedUrlSchema
            poolCreatorPercentFeeToWithold
            apiWinnerOptionEntries
            apiwinnerResult
            poolApiDefaultSchema
            poolApiCustomSchema
            createdAt
            updatedAt
          }
          requestHash
          players {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePoolMutation>response.data.updatePool;
  }
  async DeletePool(
    input: DeletePoolInput,
    condition?: ModelPoolConditionInput
  ): Promise<DeletePoolMutation> {
    const statement = `mutation DeletePool($input: DeletePoolInput!, $condition: ModelPoolConditionInput) {
        deletePool(input: $input, condition: $condition) {
          __typename
          id
          poolId
          poolTitle
          poolCategory
          poolCreator {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          poolType
          poolStatus
          poolEntryFee
          poolTotal
          poolWinningPayout
          allowPlayerLeave
          apiPoolAttributes {
            __typename
            id
            lockFundsDatetime
            executeWinnerDatetime
            apiUrlForResults
            verifiedUrlSchema
            poolCreatorPercentFeeToWithold
            apiWinnerOptionEntries
            apiwinnerResult
            poolApiDefaultSchema
            poolApiCustomSchema
            createdAt
            updatedAt
          }
          requestHash
          players {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePoolMutation>response.data.deletePool;
  }
  async CreatePoolSuccessfullBlockEventsProcessed(
    input: CreatePoolSuccessfullBlockEventsProcessedInput,
    condition?: ModelPoolSuccessfullBlockEventsProcessedConditionInput
  ): Promise<CreatePoolSuccessfullBlockEventsProcessedMutation> {
    const statement = `mutation CreatePoolSuccessfullBlockEventsProcessed($input: CreatePoolSuccessfullBlockEventsProcessedInput!, $condition: ModelPoolSuccessfullBlockEventsProcessedConditionInput) {
        createPoolSuccessfullBlockEventsProcessed(input: $input, condition: $condition) {
          __typename
          id
          lastBlockProcessedForCreatedEvents
          lastBlockProcessedForCompletedEvents
          lastBlockProcessedForPlayerJoinedPoolEvents
          lastBlockProcessedForPlayerLeftPoolEvents
          lastBlockProcessedForPoolAwaitingExecution
          lambdaProcessorDecisionCheckForNextBlocknumber
          historicalLastBlockLoadedForEvents
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePoolSuccessfullBlockEventsProcessedMutation>(
      response.data.createPoolSuccessfullBlockEventsProcessed
    );
  }
  async UpdatePoolSuccessfullBlockEventsProcessed(
    input: UpdatePoolSuccessfullBlockEventsProcessedInput,
    condition?: ModelPoolSuccessfullBlockEventsProcessedConditionInput
  ): Promise<UpdatePoolSuccessfullBlockEventsProcessedMutation> {
    const statement = `mutation UpdatePoolSuccessfullBlockEventsProcessed($input: UpdatePoolSuccessfullBlockEventsProcessedInput!, $condition: ModelPoolSuccessfullBlockEventsProcessedConditionInput) {
        updatePoolSuccessfullBlockEventsProcessed(input: $input, condition: $condition) {
          __typename
          id
          lastBlockProcessedForCreatedEvents
          lastBlockProcessedForCompletedEvents
          lastBlockProcessedForPlayerJoinedPoolEvents
          lastBlockProcessedForPlayerLeftPoolEvents
          lastBlockProcessedForPoolAwaitingExecution
          lambdaProcessorDecisionCheckForNextBlocknumber
          historicalLastBlockLoadedForEvents
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePoolSuccessfullBlockEventsProcessedMutation>(
      response.data.updatePoolSuccessfullBlockEventsProcessed
    );
  }
  async DeletePoolSuccessfullBlockEventsProcessed(
    input: DeletePoolSuccessfullBlockEventsProcessedInput,
    condition?: ModelPoolSuccessfullBlockEventsProcessedConditionInput
  ): Promise<DeletePoolSuccessfullBlockEventsProcessedMutation> {
    const statement = `mutation DeletePoolSuccessfullBlockEventsProcessed($input: DeletePoolSuccessfullBlockEventsProcessedInput!, $condition: ModelPoolSuccessfullBlockEventsProcessedConditionInput) {
        deletePoolSuccessfullBlockEventsProcessed(input: $input, condition: $condition) {
          __typename
          id
          lastBlockProcessedForCreatedEvents
          lastBlockProcessedForCompletedEvents
          lastBlockProcessedForPlayerJoinedPoolEvents
          lastBlockProcessedForPlayerLeftPoolEvents
          lastBlockProcessedForPoolAwaitingExecution
          lambdaProcessorDecisionCheckForNextBlocknumber
          historicalLastBlockLoadedForEvents
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePoolSuccessfullBlockEventsProcessedMutation>(
      response.data.deletePoolSuccessfullBlockEventsProcessed
    );
  }
  async CreatePoolSummaries(
    input: CreatePoolSummariesInput,
    condition?: ModelPoolSummariesConditionInput
  ): Promise<CreatePoolSummariesMutation> {
    const statement = `mutation CreatePoolSummaries($input: CreatePoolSummariesInput!, $condition: ModelPoolSummariesConditionInput) {
        createPoolSummaries(input: $input, condition: $condition) {
          __typename
          id
          totalCompletedGames
          totalPlayers
          totalPayouts
          highestSingleWinnerPayout
          highestPoolPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePoolSummariesMutation>response.data.createPoolSummaries;
  }
  async UpdatePoolSummaries(
    input: UpdatePoolSummariesInput,
    condition?: ModelPoolSummariesConditionInput
  ): Promise<UpdatePoolSummariesMutation> {
    const statement = `mutation UpdatePoolSummaries($input: UpdatePoolSummariesInput!, $condition: ModelPoolSummariesConditionInput) {
        updatePoolSummaries(input: $input, condition: $condition) {
          __typename
          id
          totalCompletedGames
          totalPlayers
          totalPayouts
          highestSingleWinnerPayout
          highestPoolPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePoolSummariesMutation>response.data.updatePoolSummaries;
  }
  async DeletePoolSummaries(
    input: DeletePoolSummariesInput,
    condition?: ModelPoolSummariesConditionInput
  ): Promise<DeletePoolSummariesMutation> {
    const statement = `mutation DeletePoolSummaries($input: DeletePoolSummariesInput!, $condition: ModelPoolSummariesConditionInput) {
        deletePoolSummaries(input: $input, condition: $condition) {
          __typename
          id
          totalCompletedGames
          totalPlayers
          totalPayouts
          highestSingleWinnerPayout
          highestPoolPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePoolSummariesMutation>response.data.deletePoolSummaries;
  }
  async CreateUserWallet(
    input: CreateUserWalletInput,
    condition?: ModelUserWalletConditionInput
  ): Promise<CreateUserWalletMutation> {
    const statement = `mutation CreateUserWallet($input: CreateUserWalletInput!, $condition: ModelUserWalletConditionInput) {
        createUserWallet(input: $input, condition: $condition) {
          __typename
          id
          wallet
          nickname
          chatlogo
          brands {
            __typename
            id
            wallet
            name
            rating
            logo
            createdAt
            updatedAt
          }
          totalWinnings
          totalPools
          totalCompletedPools
          totalPoolsWon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserWalletMutation>response.data.createUserWallet;
  }
  async UpdateUserWallet(
    input: UpdateUserWalletInput,
    condition?: ModelUserWalletConditionInput
  ): Promise<UpdateUserWalletMutation> {
    const statement = `mutation UpdateUserWallet($input: UpdateUserWalletInput!, $condition: ModelUserWalletConditionInput) {
        updateUserWallet(input: $input, condition: $condition) {
          __typename
          id
          wallet
          nickname
          chatlogo
          brands {
            __typename
            id
            wallet
            name
            rating
            logo
            createdAt
            updatedAt
          }
          totalWinnings
          totalPools
          totalCompletedPools
          totalPoolsWon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserWalletMutation>response.data.updateUserWallet;
  }
  async DeleteUserWallet(
    input: DeleteUserWalletInput,
    condition?: ModelUserWalletConditionInput
  ): Promise<DeleteUserWalletMutation> {
    const statement = `mutation DeleteUserWallet($input: DeleteUserWalletInput!, $condition: ModelUserWalletConditionInput) {
        deleteUserWallet(input: $input, condition: $condition) {
          __typename
          id
          wallet
          nickname
          chatlogo
          brands {
            __typename
            id
            wallet
            name
            rating
            logo
            createdAt
            updatedAt
          }
          totalWinnings
          totalPools
          totalCompletedPools
          totalPoolsWon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserWalletMutation>response.data.deleteUserWallet;
  }
  async CreateBrand(
    input: CreateBrandInput,
    condition?: ModelBrandConditionInput
  ): Promise<CreateBrandMutation> {
    const statement = `mutation CreateBrand($input: CreateBrandInput!, $condition: ModelBrandConditionInput) {
        createBrand(input: $input, condition: $condition) {
          __typename
          id
          wallet
          name
          rating
          logo
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBrandMutation>response.data.createBrand;
  }
  async UpdateBrand(
    input: UpdateBrandInput,
    condition?: ModelBrandConditionInput
  ): Promise<UpdateBrandMutation> {
    const statement = `mutation UpdateBrand($input: UpdateBrandInput!, $condition: ModelBrandConditionInput) {
        updateBrand(input: $input, condition: $condition) {
          __typename
          id
          wallet
          name
          rating
          logo
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBrandMutation>response.data.updateBrand;
  }
  async DeleteBrand(
    input: DeleteBrandInput,
    condition?: ModelBrandConditionInput
  ): Promise<DeleteBrandMutation> {
    const statement = `mutation DeleteBrand($input: DeleteBrandInput!, $condition: ModelBrandConditionInput) {
        deleteBrand(input: $input, condition: $condition) {
          __typename
          id
          wallet
          name
          rating
          logo
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBrandMutation>response.data.deleteBrand;
  }
  async GetFeedback(id: string): Promise<GetFeedbackQuery> {
    const statement = `query GetFeedback($id: ID!) {
        getFeedback(id: $id) {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFeedbackQuery>response.data.getFeedback;
  }
  async ListFeedbacks(
    filter?: ModelFeedbackFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFeedbacksQuery> {
    const statement = `query ListFeedbacks($filter: ModelFeedbackFilterInput, $limit: Int, $nextToken: String) {
        listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            comment
            commentType
            status
            wallet
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFeedbacksQuery>response.data.listFeedbacks;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            message
            wallet
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagesQuery>response.data.listMessages;
  }
  async GetGamesSummary(id: number): Promise<GetGamesSummaryQuery> {
    const statement = `query GetGamesSummary($id: Int!) {
        getGamesSummary(id: $id) {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGamesSummaryQuery>response.data.getGamesSummary;
  }
  async ListGamesSummarys(
    id?: number,
    filter?: ModelGamesSummaryFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListGamesSummarysQuery> {
    const statement = `query ListGamesSummarys($id: Int, $filter: ModelGamesSummaryFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listGamesSummarys(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            totalCompletedGames
            totalUniquePlayers
            totalPayouts
            highestPayout
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGamesSummarysQuery>response.data.listGamesSummarys;
  }
  async GetErrorLog(id: string): Promise<GetErrorLogQuery> {
    const statement = `query GetErrorLog($id: ID!) {
        getErrorLog(id: $id) {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetErrorLogQuery>response.data.getErrorLog;
  }
  async ListErrorLogs(
    filter?: ModelErrorLogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListErrorLogsQuery> {
    const statement = `query ListErrorLogs($filter: ModelErrorLogFilterInput, $limit: Int, $nextToken: String) {
        listErrorLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdAt
            stackTrace
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListErrorLogsQuery>response.data.listErrorLogs;
  }
  async GetPlayer(id: string): Promise<GetPlayerQuery> {
    const statement = `query GetPlayer($id: ID!) {
        getPlayer(id: $id) {
          __typename
          id
          userWallet {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          status
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlayerQuery>response.data.getPlayer;
  }
  async ListPlayers(
    filter?: ModelPlayerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlayersQuery> {
    const statement = `query ListPlayers($filter: ModelPlayerFilterInput, $limit: Int, $nextToken: String) {
        listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPlayersQuery>response.data.listPlayers;
  }
  async GetApiPoolAttributes(id: string): Promise<GetApiPoolAttributesQuery> {
    const statement = `query GetApiPoolAttributes($id: ID!) {
        getApiPoolAttributes(id: $id) {
          __typename
          id
          lockFundsDatetime
          executeWinnerDatetime
          apiUrlForResults
          verifiedUrlSchema
          poolCreatorPercentFeeToWithold
          apiWinnerOptionEntries
          apiwinnerResult
          poolApiDefaultSchema
          poolApiCustomSchema
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetApiPoolAttributesQuery>response.data.getApiPoolAttributes;
  }
  async ListApiPoolAttributess(
    filter?: ModelApiPoolAttributesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListApiPoolAttributessQuery> {
    const statement = `query ListApiPoolAttributess($filter: ModelApiPoolAttributesFilterInput, $limit: Int, $nextToken: String) {
        listApiPoolAttributess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            lockFundsDatetime
            executeWinnerDatetime
            apiUrlForResults
            verifiedUrlSchema
            poolCreatorPercentFeeToWithold
            apiWinnerOptionEntries
            apiwinnerResult
            poolApiDefaultSchema
            poolApiCustomSchema
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListApiPoolAttributessQuery>response.data.listApiPoolAttributess;
  }
  async GetPool(id: string): Promise<GetPoolQuery> {
    const statement = `query GetPool($id: ID!) {
        getPool(id: $id) {
          __typename
          id
          poolId
          poolTitle
          poolCategory
          poolCreator {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          poolType
          poolStatus
          poolEntryFee
          poolTotal
          poolWinningPayout
          allowPlayerLeave
          apiPoolAttributes {
            __typename
            id
            lockFundsDatetime
            executeWinnerDatetime
            apiUrlForResults
            verifiedUrlSchema
            poolCreatorPercentFeeToWithold
            apiWinnerOptionEntries
            apiwinnerResult
            poolApiDefaultSchema
            poolApiCustomSchema
            createdAt
            updatedAt
          }
          requestHash
          players {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPoolQuery>response.data.getPool;
  }
  async ListPools(
    filter?: ModelPoolFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPoolsQuery> {
    const statement = `query ListPools($filter: ModelPoolFilterInput, $limit: Int, $nextToken: String) {
        listPools(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPoolsQuery>response.data.listPools;
  }
  async GetPoolSuccessfullBlockEventsProcessed(
    id: string
  ): Promise<GetPoolSuccessfullBlockEventsProcessedQuery> {
    const statement = `query GetPoolSuccessfullBlockEventsProcessed($id: ID!) {
        getPoolSuccessfullBlockEventsProcessed(id: $id) {
          __typename
          id
          lastBlockProcessedForCreatedEvents
          lastBlockProcessedForCompletedEvents
          lastBlockProcessedForPlayerJoinedPoolEvents
          lastBlockProcessedForPlayerLeftPoolEvents
          lastBlockProcessedForPoolAwaitingExecution
          lambdaProcessorDecisionCheckForNextBlocknumber
          historicalLastBlockLoadedForEvents
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPoolSuccessfullBlockEventsProcessedQuery>(
      response.data.getPoolSuccessfullBlockEventsProcessed
    );
  }
  async ListPoolSuccessfullBlockEventsProcesseds(
    filter?: ModelPoolSuccessfullBlockEventsProcessedFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPoolSuccessfullBlockEventsProcessedsQuery> {
    const statement = `query ListPoolSuccessfullBlockEventsProcesseds($filter: ModelPoolSuccessfullBlockEventsProcessedFilterInput, $limit: Int, $nextToken: String) {
        listPoolSuccessfullBlockEventsProcesseds(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            lastBlockProcessedForCreatedEvents
            lastBlockProcessedForCompletedEvents
            lastBlockProcessedForPlayerJoinedPoolEvents
            lastBlockProcessedForPlayerLeftPoolEvents
            lastBlockProcessedForPoolAwaitingExecution
            lambdaProcessorDecisionCheckForNextBlocknumber
            historicalLastBlockLoadedForEvents
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPoolSuccessfullBlockEventsProcessedsQuery>(
      response.data.listPoolSuccessfullBlockEventsProcesseds
    );
  }
  async GetPoolSummaries(id: string): Promise<GetPoolSummariesQuery> {
    const statement = `query GetPoolSummaries($id: ID!) {
        getPoolSummaries(id: $id) {
          __typename
          id
          totalCompletedGames
          totalPlayers
          totalPayouts
          highestSingleWinnerPayout
          highestPoolPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPoolSummariesQuery>response.data.getPoolSummaries;
  }
  async ListPoolSummariess(
    filter?: ModelPoolSummariesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPoolSummariessQuery> {
    const statement = `query ListPoolSummariess($filter: ModelPoolSummariesFilterInput, $limit: Int, $nextToken: String) {
        listPoolSummariess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            totalCompletedGames
            totalPlayers
            totalPayouts
            highestSingleWinnerPayout
            highestPoolPayout
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPoolSummariessQuery>response.data.listPoolSummariess;
  }
  async GetUserWallet(id: string): Promise<GetUserWalletQuery> {
    const statement = `query GetUserWallet($id: ID!) {
        getUserWallet(id: $id) {
          __typename
          id
          wallet
          nickname
          chatlogo
          brands {
            __typename
            id
            wallet
            name
            rating
            logo
            createdAt
            updatedAt
          }
          totalWinnings
          totalPools
          totalCompletedPools
          totalPoolsWon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserWalletQuery>response.data.getUserWallet;
  }
  async ListUserWallets(
    filter?: ModelUserWalletFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserWalletsQuery> {
    const statement = `query ListUserWallets($filter: ModelUserWalletFilterInput, $limit: Int, $nextToken: String) {
        listUserWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserWalletsQuery>response.data.listUserWallets;
  }
  async GetBrand(id: string): Promise<GetBrandQuery> {
    const statement = `query GetBrand($id: ID!) {
        getBrand(id: $id) {
          __typename
          id
          wallet
          name
          rating
          logo
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBrandQuery>response.data.getBrand;
  }
  async ListBrands(
    filter?: ModelBrandFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBrandsQuery> {
    const statement = `query ListBrands($filter: ModelBrandFilterInput, $limit: Int, $nextToken: String) {
        listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            wallet
            name
            rating
            logo
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBrandsQuery>response.data.listBrands;
  }
  OnCreateFeedbackListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFeedback">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFeedback {
        onCreateFeedback {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFeedback">>
  >;

  OnUpdateFeedbackListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFeedback">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFeedback {
        onUpdateFeedback {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFeedback">>
  >;

  OnDeleteFeedbackListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFeedback">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFeedback {
        onDeleteFeedback {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFeedback">>
  >;

  OnCreateMessageListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMessage">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMessage">>
  >;

  OnUpdateMessageListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMessage">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessage {
        onUpdateMessage {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMessage">>
  >;

  OnDeleteMessageListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMessage">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessage {
        onDeleteMessage {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMessage">>
  >;

  OnCreateGamesSummaryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateGamesSummary">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateGamesSummary {
        onCreateGamesSummary {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateGamesSummary">>
  >;

  OnUpdateGamesSummaryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateGamesSummary">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateGamesSummary {
        onUpdateGamesSummary {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateGamesSummary">>
  >;

  OnDeleteGamesSummaryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteGamesSummary">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteGamesSummary {
        onDeleteGamesSummary {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteGamesSummary">>
  >;

  OnCreateErrorLogListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateErrorLog">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateErrorLog {
        onCreateErrorLog {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateErrorLog">>
  >;

  OnUpdateErrorLogListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateErrorLog">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateErrorLog {
        onUpdateErrorLog {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateErrorLog">>
  >;

  OnDeleteErrorLogListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteErrorLog">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteErrorLog {
        onDeleteErrorLog {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteErrorLog">>
  >;

  OnCreatePlayerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePlayer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlayer {
        onCreatePlayer {
          __typename
          id
          userWallet {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          status
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePlayer">>
  >;

  OnUpdatePlayerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePlayer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlayer {
        onUpdatePlayer {
          __typename
          id
          userWallet {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          status
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePlayer">>
  >;

  OnDeletePlayerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePlayer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlayer {
        onDeletePlayer {
          __typename
          id
          userWallet {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          status
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePlayer">>
  >;

  OnCreateApiPoolAttributesListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateApiPoolAttributes">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateApiPoolAttributes {
        onCreateApiPoolAttributes {
          __typename
          id
          lockFundsDatetime
          executeWinnerDatetime
          apiUrlForResults
          verifiedUrlSchema
          poolCreatorPercentFeeToWithold
          apiWinnerOptionEntries
          apiwinnerResult
          poolApiDefaultSchema
          poolApiCustomSchema
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateApiPoolAttributes">
    >
  >;

  OnUpdateApiPoolAttributesListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateApiPoolAttributes">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApiPoolAttributes {
        onUpdateApiPoolAttributes {
          __typename
          id
          lockFundsDatetime
          executeWinnerDatetime
          apiUrlForResults
          verifiedUrlSchema
          poolCreatorPercentFeeToWithold
          apiWinnerOptionEntries
          apiwinnerResult
          poolApiDefaultSchema
          poolApiCustomSchema
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateApiPoolAttributes">
    >
  >;

  OnDeleteApiPoolAttributesListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteApiPoolAttributes">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApiPoolAttributes {
        onDeleteApiPoolAttributes {
          __typename
          id
          lockFundsDatetime
          executeWinnerDatetime
          apiUrlForResults
          verifiedUrlSchema
          poolCreatorPercentFeeToWithold
          apiWinnerOptionEntries
          apiwinnerResult
          poolApiDefaultSchema
          poolApiCustomSchema
          pool {
            __typename
            id
            poolId
            poolTitle
            poolCategory
            poolType
            poolStatus
            poolEntryFee
            poolTotal
            poolWinningPayout
            allowPlayerLeave
            requestHash
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteApiPoolAttributes">
    >
  >;

  OnCreatePoolListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePool">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePool {
        onCreatePool {
          __typename
          id
          poolId
          poolTitle
          poolCategory
          poolCreator {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          poolType
          poolStatus
          poolEntryFee
          poolTotal
          poolWinningPayout
          allowPlayerLeave
          apiPoolAttributes {
            __typename
            id
            lockFundsDatetime
            executeWinnerDatetime
            apiUrlForResults
            verifiedUrlSchema
            poolCreatorPercentFeeToWithold
            apiWinnerOptionEntries
            apiwinnerResult
            poolApiDefaultSchema
            poolApiCustomSchema
            createdAt
            updatedAt
          }
          requestHash
          players {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePool">>
  >;

  OnUpdatePoolListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePool">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePool {
        onUpdatePool {
          __typename
          id
          poolId
          poolTitle
          poolCategory
          poolCreator {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          poolType
          poolStatus
          poolEntryFee
          poolTotal
          poolWinningPayout
          allowPlayerLeave
          apiPoolAttributes {
            __typename
            id
            lockFundsDatetime
            executeWinnerDatetime
            apiUrlForResults
            verifiedUrlSchema
            poolCreatorPercentFeeToWithold
            apiWinnerOptionEntries
            apiwinnerResult
            poolApiDefaultSchema
            poolApiCustomSchema
            createdAt
            updatedAt
          }
          requestHash
          players {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePool">>
  >;

  OnDeletePoolListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePool">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePool {
        onDeletePool {
          __typename
          id
          poolId
          poolTitle
          poolCategory
          poolCreator {
            __typename
            id
            wallet
            nickname
            chatlogo
            totalWinnings
            totalPools
            totalCompletedPools
            totalPoolsWon
            createdAt
            updatedAt
          }
          poolType
          poolStatus
          poolEntryFee
          poolTotal
          poolWinningPayout
          allowPlayerLeave
          apiPoolAttributes {
            __typename
            id
            lockFundsDatetime
            executeWinnerDatetime
            apiUrlForResults
            verifiedUrlSchema
            poolCreatorPercentFeeToWithold
            apiWinnerOptionEntries
            apiwinnerResult
            poolApiDefaultSchema
            poolApiCustomSchema
            createdAt
            updatedAt
          }
          requestHash
          players {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePool">>
  >;

  OnCreatePoolSuccessfullBlockEventsProcessedListener: Observable<
    SubscriptionResponse<
      Pick<
        __SubscriptionContainer,
        "onCreatePoolSuccessfullBlockEventsProcessed"
      >
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePoolSuccessfullBlockEventsProcessed {
        onCreatePoolSuccessfullBlockEventsProcessed {
          __typename
          id
          lastBlockProcessedForCreatedEvents
          lastBlockProcessedForCompletedEvents
          lastBlockProcessedForPlayerJoinedPoolEvents
          lastBlockProcessedForPlayerLeftPoolEvents
          lastBlockProcessedForPoolAwaitingExecution
          lambdaProcessorDecisionCheckForNextBlocknumber
          historicalLastBlockLoadedForEvents
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<
        __SubscriptionContainer,
        "onCreatePoolSuccessfullBlockEventsProcessed"
      >
    >
  >;

  OnUpdatePoolSuccessfullBlockEventsProcessedListener: Observable<
    SubscriptionResponse<
      Pick<
        __SubscriptionContainer,
        "onUpdatePoolSuccessfullBlockEventsProcessed"
      >
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePoolSuccessfullBlockEventsProcessed {
        onUpdatePoolSuccessfullBlockEventsProcessed {
          __typename
          id
          lastBlockProcessedForCreatedEvents
          lastBlockProcessedForCompletedEvents
          lastBlockProcessedForPlayerJoinedPoolEvents
          lastBlockProcessedForPlayerLeftPoolEvents
          lastBlockProcessedForPoolAwaitingExecution
          lambdaProcessorDecisionCheckForNextBlocknumber
          historicalLastBlockLoadedForEvents
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<
        __SubscriptionContainer,
        "onUpdatePoolSuccessfullBlockEventsProcessed"
      >
    >
  >;

  OnDeletePoolSuccessfullBlockEventsProcessedListener: Observable<
    SubscriptionResponse<
      Pick<
        __SubscriptionContainer,
        "onDeletePoolSuccessfullBlockEventsProcessed"
      >
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePoolSuccessfullBlockEventsProcessed {
        onDeletePoolSuccessfullBlockEventsProcessed {
          __typename
          id
          lastBlockProcessedForCreatedEvents
          lastBlockProcessedForCompletedEvents
          lastBlockProcessedForPlayerJoinedPoolEvents
          lastBlockProcessedForPlayerLeftPoolEvents
          lastBlockProcessedForPoolAwaitingExecution
          lambdaProcessorDecisionCheckForNextBlocknumber
          historicalLastBlockLoadedForEvents
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<
        __SubscriptionContainer,
        "onDeletePoolSuccessfullBlockEventsProcessed"
      >
    >
  >;

  OnCreatePoolSummariesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePoolSummaries">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePoolSummaries {
        onCreatePoolSummaries {
          __typename
          id
          totalCompletedGames
          totalPlayers
          totalPayouts
          highestSingleWinnerPayout
          highestPoolPayout
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePoolSummaries">>
  >;

  OnUpdatePoolSummariesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePoolSummaries">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePoolSummaries {
        onUpdatePoolSummaries {
          __typename
          id
          totalCompletedGames
          totalPlayers
          totalPayouts
          highestSingleWinnerPayout
          highestPoolPayout
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePoolSummaries">>
  >;

  OnDeletePoolSummariesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePoolSummaries">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePoolSummaries {
        onDeletePoolSummaries {
          __typename
          id
          totalCompletedGames
          totalPlayers
          totalPayouts
          highestSingleWinnerPayout
          highestPoolPayout
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePoolSummaries">>
  >;

  OnCreateUserWalletListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUserWallet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUserWallet {
        onCreateUserWallet {
          __typename
          id
          wallet
          nickname
          chatlogo
          brands {
            __typename
            id
            wallet
            name
            rating
            logo
            createdAt
            updatedAt
          }
          totalWinnings
          totalPools
          totalCompletedPools
          totalPoolsWon
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUserWallet">>
  >;

  OnUpdateUserWalletListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUserWallet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUserWallet {
        onUpdateUserWallet {
          __typename
          id
          wallet
          nickname
          chatlogo
          brands {
            __typename
            id
            wallet
            name
            rating
            logo
            createdAt
            updatedAt
          }
          totalWinnings
          totalPools
          totalCompletedPools
          totalPoolsWon
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUserWallet">>
  >;

  OnDeleteUserWalletListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUserWallet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUserWallet {
        onDeleteUserWallet {
          __typename
          id
          wallet
          nickname
          chatlogo
          brands {
            __typename
            id
            wallet
            name
            rating
            logo
            createdAt
            updatedAt
          }
          totalWinnings
          totalPools
          totalCompletedPools
          totalPoolsWon
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUserWallet">>
  >;

  OnCreateBrandListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBrand">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBrand {
        onCreateBrand {
          __typename
          id
          wallet
          name
          rating
          logo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBrand">>
  >;

  OnUpdateBrandListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBrand">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBrand {
        onUpdateBrand {
          __typename
          id
          wallet
          name
          rating
          logo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBrand">>
  >;

  OnDeleteBrandListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBrand">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBrand {
        onDeleteBrand {
          __typename
          id
          wallet
          name
          rating
          logo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBrand">>
  >;
}
