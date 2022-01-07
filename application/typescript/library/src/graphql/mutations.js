"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBrand = exports.updateBrand = exports.createBrand = exports.deleteUserWallet = exports.updateUserWallet = exports.createUserWallet = exports.deletePoolSummaries = exports.updatePoolSummaries = exports.createPoolSummaries = exports.deletePoolSuccessfullBlockEventsProcessed = exports.updatePoolSuccessfullBlockEventsProcessed = exports.createPoolSuccessfullBlockEventsProcessed = exports.deletePool = exports.updatePool = exports.createPool = exports.deleteApiPoolAttributes = exports.updateApiPoolAttributes = exports.createApiPoolAttributes = exports.deletePlayer = exports.updatePlayer = exports.createPlayer = exports.deleteErrorLog = exports.updateErrorLog = exports.createErrorLog = exports.deleteGamesSummary = exports.updateGamesSummary = exports.createGamesSummary = exports.deleteMessage = exports.updateMessage = exports.createMessage = exports.deleteFeedback = exports.updateFeedback = exports.createFeedback = exports.createIngestionEvent = void 0;
exports.createIngestionEvent = `
  mutation CreateIngestionEvent($input: CreateIngestionBucketEventInput!) {
    createIngestionEvent(input: $input) {
      s3
      sqs
    }
  }
`;
exports.createFeedback = `
  mutation CreateFeedback(
    $input: CreateFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    createFeedback(input: $input, condition: $condition) {
      id
      comment
      commentType
      status
      wallet
      createdAt
      updatedAt
    }
  }
`;
exports.updateFeedback = `
  mutation UpdateFeedback(
    $input: UpdateFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    updateFeedback(input: $input, condition: $condition) {
      id
      comment
      commentType
      status
      wallet
      createdAt
      updatedAt
    }
  }
`;
exports.deleteFeedback = `
  mutation DeleteFeedback(
    $input: DeleteFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    deleteFeedback(input: $input, condition: $condition) {
      id
      comment
      commentType
      status
      wallet
      createdAt
      updatedAt
    }
  }
`;
exports.createMessage = `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
exports.updateMessage = `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
exports.deleteMessage = `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
exports.createGamesSummary = `
  mutation CreateGamesSummary(
    $input: CreateGamesSummaryInput!
    $condition: ModelGamesSummaryConditionInput
  ) {
    createGamesSummary(input: $input, condition: $condition) {
      id
      totalCompletedGames
      totalUniquePlayers
      totalPayouts
      highestPayout
      createdAt
      updatedAt
    }
  }
`;
exports.updateGamesSummary = `
  mutation UpdateGamesSummary(
    $input: UpdateGamesSummaryInput!
    $condition: ModelGamesSummaryConditionInput
  ) {
    updateGamesSummary(input: $input, condition: $condition) {
      id
      totalCompletedGames
      totalUniquePlayers
      totalPayouts
      highestPayout
      createdAt
      updatedAt
    }
  }
`;
exports.deleteGamesSummary = `
  mutation DeleteGamesSummary(
    $input: DeleteGamesSummaryInput!
    $condition: ModelGamesSummaryConditionInput
  ) {
    deleteGamesSummary(input: $input, condition: $condition) {
      id
      totalCompletedGames
      totalUniquePlayers
      totalPayouts
      highestPayout
      createdAt
      updatedAt
    }
  }
`;
exports.createErrorLog = `
  mutation CreateErrorLog(
    $input: CreateErrorLogInput!
    $condition: ModelErrorLogConditionInput
  ) {
    createErrorLog(input: $input, condition: $condition) {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
exports.updateErrorLog = `
  mutation UpdateErrorLog(
    $input: UpdateErrorLogInput!
    $condition: ModelErrorLogConditionInput
  ) {
    updateErrorLog(input: $input, condition: $condition) {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
exports.deleteErrorLog = `
  mutation DeleteErrorLog(
    $input: DeleteErrorLogInput!
    $condition: ModelErrorLogConditionInput
  ) {
    deleteErrorLog(input: $input, condition: $condition) {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
exports.createPlayer = `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      userWallet {
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
  }
`;
exports.updatePlayer = `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      userWallet {
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
  }
`;
exports.deletePlayer = `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      userWallet {
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
  }
`;
exports.createApiPoolAttributes = `
  mutation CreateApiPoolAttributes(
    $input: CreateApiPoolAttributesInput!
    $condition: ModelApiPoolAttributesConditionInput
  ) {
    createApiPoolAttributes(input: $input, condition: $condition) {
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
  }
`;
exports.updateApiPoolAttributes = `
  mutation UpdateApiPoolAttributes(
    $input: UpdateApiPoolAttributesInput!
    $condition: ModelApiPoolAttributesConditionInput
  ) {
    updateApiPoolAttributes(input: $input, condition: $condition) {
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
  }
`;
exports.deleteApiPoolAttributes = `
  mutation DeleteApiPoolAttributes(
    $input: DeleteApiPoolAttributesInput!
    $condition: ModelApiPoolAttributesConditionInput
  ) {
    deleteApiPoolAttributes(input: $input, condition: $condition) {
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
  }
`;
exports.createPool = `
  mutation CreatePool(
    $input: CreatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    createPool(input: $input, condition: $condition) {
      id
      poolId
      poolTitle
      poolCategory
      poolCreator {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
exports.updatePool = `
  mutation UpdatePool(
    $input: UpdatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    updatePool(input: $input, condition: $condition) {
      id
      poolId
      poolTitle
      poolCategory
      poolCreator {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
exports.deletePool = `
  mutation DeletePool(
    $input: DeletePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    deletePool(input: $input, condition: $condition) {
      id
      poolId
      poolTitle
      poolCategory
      poolCreator {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
exports.createPoolSuccessfullBlockEventsProcessed = `
  mutation CreatePoolSuccessfullBlockEventsProcessed(
    $input: CreatePoolSuccessfullBlockEventsProcessedInput!
    $condition: ModelPoolSuccessfullBlockEventsProcessedConditionInput
  ) {
    createPoolSuccessfullBlockEventsProcessed(
      input: $input
      condition: $condition
    ) {
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
  }
`;
exports.updatePoolSuccessfullBlockEventsProcessed = `
  mutation UpdatePoolSuccessfullBlockEventsProcessed(
    $input: UpdatePoolSuccessfullBlockEventsProcessedInput!
    $condition: ModelPoolSuccessfullBlockEventsProcessedConditionInput
  ) {
    updatePoolSuccessfullBlockEventsProcessed(
      input: $input
      condition: $condition
    ) {
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
  }
`;
exports.deletePoolSuccessfullBlockEventsProcessed = `
  mutation DeletePoolSuccessfullBlockEventsProcessed(
    $input: DeletePoolSuccessfullBlockEventsProcessedInput!
    $condition: ModelPoolSuccessfullBlockEventsProcessedConditionInput
  ) {
    deletePoolSuccessfullBlockEventsProcessed(
      input: $input
      condition: $condition
    ) {
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
  }
`;
exports.createPoolSummaries = `
  mutation CreatePoolSummaries(
    $input: CreatePoolSummariesInput!
    $condition: ModelPoolSummariesConditionInput
  ) {
    createPoolSummaries(input: $input, condition: $condition) {
      id
      totalCompletedGames
      totalPlayers
      totalPayouts
      highestSingleWinnerPayout
      highestPoolPayout
      createdAt
      updatedAt
    }
  }
`;
exports.updatePoolSummaries = `
  mutation UpdatePoolSummaries(
    $input: UpdatePoolSummariesInput!
    $condition: ModelPoolSummariesConditionInput
  ) {
    updatePoolSummaries(input: $input, condition: $condition) {
      id
      totalCompletedGames
      totalPlayers
      totalPayouts
      highestSingleWinnerPayout
      highestPoolPayout
      createdAt
      updatedAt
    }
  }
`;
exports.deletePoolSummaries = `
  mutation DeletePoolSummaries(
    $input: DeletePoolSummariesInput!
    $condition: ModelPoolSummariesConditionInput
  ) {
    deletePoolSummaries(input: $input, condition: $condition) {
      id
      totalCompletedGames
      totalPlayers
      totalPayouts
      highestSingleWinnerPayout
      highestPoolPayout
      createdAt
      updatedAt
    }
  }
`;
exports.createUserWallet = `
  mutation CreateUserWallet(
    $input: CreateUserWalletInput!
    $condition: ModelUserWalletConditionInput
  ) {
    createUserWallet(input: $input, condition: $condition) {
      id
      wallet
      nickname
      chatlogo
      brands {
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
  }
`;
exports.updateUserWallet = `
  mutation UpdateUserWallet(
    $input: UpdateUserWalletInput!
    $condition: ModelUserWalletConditionInput
  ) {
    updateUserWallet(input: $input, condition: $condition) {
      id
      wallet
      nickname
      chatlogo
      brands {
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
  }
`;
exports.deleteUserWallet = `
  mutation DeleteUserWallet(
    $input: DeleteUserWalletInput!
    $condition: ModelUserWalletConditionInput
  ) {
    deleteUserWallet(input: $input, condition: $condition) {
      id
      wallet
      nickname
      chatlogo
      brands {
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
  }
`;
exports.createBrand = `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
      id
      wallet
      name
      rating
      logo
      createdAt
      updatedAt
    }
  }
`;
exports.updateBrand = `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
      id
      wallet
      name
      rating
      logo
      createdAt
      updatedAt
    }
  }
`;
exports.deleteBrand = `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
      id
      wallet
      name
      rating
      logo
      createdAt
      updatedAt
    }
  }
`;
//# sourceMappingURL=mutations.js.map