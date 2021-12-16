/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIngestionEvent = /* GraphQL */ `
  mutation CreateIngestionEvent($input: CreateIngestionBucketEventInput!) {
    createIngestionEvent(input: $input) {
      s3
      sqs
    }
  }
`;
export const createFeedback = /* GraphQL */ `
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
export const updateFeedback = /* GraphQL */ `
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
export const deleteFeedback = /* GraphQL */ `
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
export const createMessage = /* GraphQL */ `
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
export const updateMessage = /* GraphQL */ `
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
export const deleteMessage = /* GraphQL */ `
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
export const createGamesSummary = /* GraphQL */ `
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
export const updateGamesSummary = /* GraphQL */ `
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
export const deleteGamesSummary = /* GraphQL */ `
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
export const createErrorLog = /* GraphQL */ `
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
export const updateErrorLog = /* GraphQL */ `
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
export const deleteErrorLog = /* GraphQL */ `
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
export const createPlayer = /* GraphQL */ `
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
export const updatePlayer = /* GraphQL */ `
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
export const deletePlayer = /* GraphQL */ `
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
export const createApiPoolAttributes = /* GraphQL */ `
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
export const updateApiPoolAttributes = /* GraphQL */ `
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
export const deleteApiPoolAttributes = /* GraphQL */ `
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
export const createPool = /* GraphQL */ `
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
export const updatePool = /* GraphQL */ `
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
export const deletePool = /* GraphQL */ `
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
export const createPoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
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
export const updatePoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
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
export const deletePoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
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
export const createPoolSummaries = /* GraphQL */ `
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
export const updatePoolSummaries = /* GraphQL */ `
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
export const deletePoolSummaries = /* GraphQL */ `
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
export const createUserWallet = /* GraphQL */ `
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
export const updateUserWallet = /* GraphQL */ `
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
export const deleteUserWallet = /* GraphQL */ `
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
export const createBrand = /* GraphQL */ `
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
export const updateBrand = /* GraphQL */ `
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
export const deleteBrand = /* GraphQL */ `
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
