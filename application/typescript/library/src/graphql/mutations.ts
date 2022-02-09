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
      comment
      commentType
      status
      wallet
      id
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
      comment
      commentType
      status
      wallet
      id
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
      comment
      commentType
      status
      wallet
      id
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
export const createPoolPlayer = /* GraphQL */ `
  mutation CreatePoolPlayer(
    $input: CreatePoolPlayerInput!
    $condition: ModelPoolPlayerConditionInput
  ) {
    createPoolPlayer(input: $input, condition: $condition) {
      userWalletId
      userWallet {
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
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
      poolId
      createdAt
      updatedAt
      poolPlayersId
      poolPlayerUserWalletId
    }
  }
`;
export const updatePoolPlayer = /* GraphQL */ `
  mutation UpdatePoolPlayer(
    $input: UpdatePoolPlayerInput!
    $condition: ModelPoolPlayerConditionInput
  ) {
    updatePoolPlayer(input: $input, condition: $condition) {
      userWalletId
      userWallet {
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
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
      poolId
      createdAt
      updatedAt
      poolPlayersId
      poolPlayerUserWalletId
    }
  }
`;
export const deletePoolPlayer = /* GraphQL */ `
  mutation DeletePoolPlayer(
    $input: DeletePoolPlayerInput!
    $condition: ModelPoolPlayerConditionInput
  ) {
    deletePoolPlayer(input: $input, condition: $condition) {
      userWalletId
      userWallet {
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
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
      poolId
      createdAt
      updatedAt
      poolPlayersId
      poolPlayerUserWalletId
    }
  }
`;
export const createApiPoolAttributes = /* GraphQL */ `
  mutation CreateApiPoolAttributes(
    $input: CreateApiPoolAttributesInput!
    $condition: ModelApiPoolAttributesConditionInput
  ) {
    createApiPoolAttributes(input: $input, condition: $condition) {
      apiKey
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
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
      poolId
      createdAt
      updatedAt
      apiPoolAttributesPoolId
    }
  }
`;
export const updateApiPoolAttributes = /* GraphQL */ `
  mutation UpdateApiPoolAttributes(
    $input: UpdateApiPoolAttributesInput!
    $condition: ModelApiPoolAttributesConditionInput
  ) {
    updateApiPoolAttributes(input: $input, condition: $condition) {
      apiKey
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
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
      poolId
      createdAt
      updatedAt
      apiPoolAttributesPoolId
    }
  }
`;
export const deleteApiPoolAttributes = /* GraphQL */ `
  mutation DeleteApiPoolAttributes(
    $input: DeleteApiPoolAttributesInput!
    $condition: ModelApiPoolAttributesConditionInput
  ) {
    deleteApiPoolAttributes(input: $input, condition: $condition) {
      apiKey
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
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
      poolId
      createdAt
      updatedAt
      apiPoolAttributesPoolId
    }
  }
`;
export const createPool = /* GraphQL */ `
  mutation CreatePool(
    $input: CreatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    createPool(input: $input, condition: $condition) {
      poolId
      poolTitle
      poolCategory
      poolCreator {
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
        apiKey
        lockFundsDatetime
        executeWinnerDatetime
        apiUrlForResults
        verifiedUrlSchema
        poolCreatorPercentFeeToWithold
        apiWinnerOptionEntries
        apiwinnerResult
        poolApiDefaultSchema
        poolApiCustomSchema
        poolId
        createdAt
        updatedAt
        apiPoolAttributesPoolId
      }
      requestHash
      players {
        nextToken
      }
      createdAt
      updatedAt
      poolPoolCreatorId
      poolApiPoolAttributesId
    }
  }
`;
export const updatePool = /* GraphQL */ `
  mutation UpdatePool(
    $input: UpdatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    updatePool(input: $input, condition: $condition) {
      poolId
      poolTitle
      poolCategory
      poolCreator {
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
        apiKey
        lockFundsDatetime
        executeWinnerDatetime
        apiUrlForResults
        verifiedUrlSchema
        poolCreatorPercentFeeToWithold
        apiWinnerOptionEntries
        apiwinnerResult
        poolApiDefaultSchema
        poolApiCustomSchema
        poolId
        createdAt
        updatedAt
        apiPoolAttributesPoolId
      }
      requestHash
      players {
        nextToken
      }
      createdAt
      updatedAt
      poolPoolCreatorId
      poolApiPoolAttributesId
    }
  }
`;
export const deletePool = /* GraphQL */ `
  mutation DeletePool(
    $input: DeletePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    deletePool(input: $input, condition: $condition) {
      poolId
      poolTitle
      poolCategory
      poolCreator {
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
        apiKey
        lockFundsDatetime
        executeWinnerDatetime
        apiUrlForResults
        verifiedUrlSchema
        poolCreatorPercentFeeToWithold
        apiWinnerOptionEntries
        apiwinnerResult
        poolApiDefaultSchema
        poolApiCustomSchema
        poolId
        createdAt
        updatedAt
        apiPoolAttributesPoolId
      }
      requestHash
      players {
        nextToken
      }
      createdAt
      updatedAt
      poolPoolCreatorId
      poolApiPoolAttributesId
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
      lambdaProcessorDecisionCheckForNextBlocknumber
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
      lambdaProcessorDecisionCheckForNextBlocknumber
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
      lambdaProcessorDecisionCheckForNextBlocknumber
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
      wallet
      nickname
      chatlogo
      brands {
        nextToken
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
      wallet
      nickname
      chatlogo
      brands {
        nextToken
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
      wallet
      nickname
      chatlogo
      brands {
        nextToken
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
      completedPools
      failedPools
      createdAt
      updatedAt
      userWalletBrandsId
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
      completedPools
      failedPools
      createdAt
      updatedAt
      userWalletBrandsId
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
      completedPools
      failedPools
      createdAt
      updatedAt
      userWalletBrandsId
    }
  }
`;
export const createCreatePoolEventLog = /* GraphQL */ `
  mutation CreateCreatePoolEventLog(
    $input: CreateCreatePoolEventLogInput!
    $condition: ModelCreatePoolEventLogConditionInput
  ) {
    createCreatePoolEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedPlayer
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const updateCreatePoolEventLog = /* GraphQL */ `
  mutation UpdateCreatePoolEventLog(
    $input: UpdateCreatePoolEventLogInput!
    $condition: ModelCreatePoolEventLogConditionInput
  ) {
    updateCreatePoolEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedPlayer
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const deleteCreatePoolEventLog = /* GraphQL */ `
  mutation DeleteCreatePoolEventLog(
    $input: DeleteCreatePoolEventLogInput!
    $condition: ModelCreatePoolEventLogConditionInput
  ) {
    deleteCreatePoolEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedPlayer
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const createPlayerJoinedPoolEventLog = /* GraphQL */ `
  mutation CreatePlayerJoinedPoolEventLog(
    $input: CreatePlayerJoinedPoolEventLogInput!
    $condition: ModelPlayerJoinedPoolEventLogConditionInput
  ) {
    createPlayerJoinedPoolEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedPlayer
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayerJoinedPoolEventLog = /* GraphQL */ `
  mutation UpdatePlayerJoinedPoolEventLog(
    $input: UpdatePlayerJoinedPoolEventLogInput!
    $condition: ModelPlayerJoinedPoolEventLogConditionInput
  ) {
    updatePlayerJoinedPoolEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedPlayer
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayerJoinedPoolEventLog = /* GraphQL */ `
  mutation DeletePlayerJoinedPoolEventLog(
    $input: DeletePlayerJoinedPoolEventLogInput!
    $condition: ModelPlayerJoinedPoolEventLogConditionInput
  ) {
    deletePlayerJoinedPoolEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedPlayer
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const createPlayerLeftPoolEventLog = /* GraphQL */ `
  mutation CreatePlayerLeftPoolEventLog(
    $input: CreatePlayerLeftPoolEventLogInput!
    $condition: ModelPlayerLeftPoolEventLogConditionInput
  ) {
    createPlayerLeftPoolEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedPlayer
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayerLeftPoolEventLog = /* GraphQL */ `
  mutation UpdatePlayerLeftPoolEventLog(
    $input: UpdatePlayerLeftPoolEventLogInput!
    $condition: ModelPlayerLeftPoolEventLogConditionInput
  ) {
    updatePlayerLeftPoolEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedPlayer
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayerLeftPoolEventLog = /* GraphQL */ `
  mutation DeletePlayerLeftPoolEventLog(
    $input: DeletePlayerLeftPoolEventLogInput!
    $condition: ModelPlayerLeftPoolEventLogConditionInput
  ) {
    deletePlayerLeftPoolEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedPlayer
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const createPoolAwaitingExecutionEventLog = /* GraphQL */ `
  mutation CreatePoolAwaitingExecutionEventLog(
    $input: CreatePoolAwaitingExecutionEventLogInput!
    $condition: ModelPoolAwaitingExecutionEventLogConditionInput
  ) {
    createPoolAwaitingExecutionEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedStatus
      decodedType
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const updatePoolAwaitingExecutionEventLog = /* GraphQL */ `
  mutation UpdatePoolAwaitingExecutionEventLog(
    $input: UpdatePoolAwaitingExecutionEventLogInput!
    $condition: ModelPoolAwaitingExecutionEventLogConditionInput
  ) {
    updatePoolAwaitingExecutionEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedStatus
      decodedType
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const deletePoolAwaitingExecutionEventLog = /* GraphQL */ `
  mutation DeletePoolAwaitingExecutionEventLog(
    $input: DeletePoolAwaitingExecutionEventLogInput!
    $condition: ModelPoolAwaitingExecutionEventLogConditionInput
  ) {
    deletePoolAwaitingExecutionEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedGameId
      decodedStatus
      decodedType
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const createPoolCompletedEventLog = /* GraphQL */ `
  mutation CreatePoolCompletedEventLog(
    $input: CreatePoolCompletedEventLogInput!
    $condition: ModelPoolCompletedEventLogConditionInput
  ) {
    createPoolCompletedEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedWinningPayout
      decodedGameId
      decodedPlayer
      decodedStatus
      decodedAuditRecordDrawId
      decodedType
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const updatePoolCompletedEventLog = /* GraphQL */ `
  mutation UpdatePoolCompletedEventLog(
    $input: UpdatePoolCompletedEventLogInput!
    $condition: ModelPoolCompletedEventLogConditionInput
  ) {
    updatePoolCompletedEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedWinningPayout
      decodedGameId
      decodedPlayer
      decodedStatus
      decodedAuditRecordDrawId
      decodedType
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
export const deletePoolCompletedEventLog = /* GraphQL */ `
  mutation DeletePoolCompletedEventLog(
    $input: DeletePoolCompletedEventLogInput!
    $condition: ModelPoolCompletedEventLogConditionInput
  ) {
    deletePoolCompletedEventLog(input: $input, condition: $condition) {
      txID
      raw
      metaBlockID
      metaBlockNumber
      metaBlockTimestamp
      metaTxOrigin
      metaClauseIndex
      decodedWinningPayout
      decodedGameId
      decodedPlayer
      decodedStatus
      decodedAuditRecordDrawId
      decodedType
      decodedDateTime
      createdAt
      updatedAt
    }
  }
`;
