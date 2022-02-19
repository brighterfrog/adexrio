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
      id
      userWalletId
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
        apiRequestHash
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
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
      id
      userWalletId
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
        apiRequestHash
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
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
      id
      userWalletId
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
        apiRequestHash
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
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
      id
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
        apiRequestHash
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
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
      id
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
        apiRequestHash
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
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
      id
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
        apiRequestHash
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
      }
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
        createdAt
        updatedAt
        apiPoolAttributesPoolId
      }
      apiRequestHash
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
        createdAt
        updatedAt
        apiPoolAttributesPoolId
      }
      apiRequestHash
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
        createdAt
        updatedAt
        apiPoolAttributesPoolId
      }
      apiRequestHash
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
      id
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
      id
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
      id
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
export const createCreatePoolEventLogV2 = /* GraphQL */ `
  mutation CreateCreatePoolEventLogV2(
    $input: CreateCreatePoolEventLogV2Input!
    $condition: ModelCreatePoolEventLogV2ConditionInput
  ) {
    createCreatePoolEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const updateCreatePoolEventLogV2 = /* GraphQL */ `
  mutation UpdateCreatePoolEventLogV2(
    $input: UpdateCreatePoolEventLogV2Input!
    $condition: ModelCreatePoolEventLogV2ConditionInput
  ) {
    updateCreatePoolEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const deleteCreatePoolEventLogV2 = /* GraphQL */ `
  mutation DeleteCreatePoolEventLogV2(
    $input: DeleteCreatePoolEventLogV2Input!
    $condition: ModelCreatePoolEventLogV2ConditionInput
  ) {
    deleteCreatePoolEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const createPlayerJoinedPoolEventLogV2 = /* GraphQL */ `
  mutation CreatePlayerJoinedPoolEventLogV2(
    $input: CreatePlayerJoinedPoolEventLogV2Input!
    $condition: ModelPlayerJoinedPoolEventLogV2ConditionInput
  ) {
    createPlayerJoinedPoolEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayerJoinedPoolEventLogV2 = /* GraphQL */ `
  mutation UpdatePlayerJoinedPoolEventLogV2(
    $input: UpdatePlayerJoinedPoolEventLogV2Input!
    $condition: ModelPlayerJoinedPoolEventLogV2ConditionInput
  ) {
    updatePlayerJoinedPoolEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayerJoinedPoolEventLogV2 = /* GraphQL */ `
  mutation DeletePlayerJoinedPoolEventLogV2(
    $input: DeletePlayerJoinedPoolEventLogV2Input!
    $condition: ModelPlayerJoinedPoolEventLogV2ConditionInput
  ) {
    deletePlayerJoinedPoolEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const createPlayerLeftPoolEventLogV2 = /* GraphQL */ `
  mutation CreatePlayerLeftPoolEventLogV2(
    $input: CreatePlayerLeftPoolEventLogV2Input!
    $condition: ModelPlayerLeftPoolEventLogV2ConditionInput
  ) {
    createPlayerLeftPoolEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayerLeftPoolEventLogV2 = /* GraphQL */ `
  mutation UpdatePlayerLeftPoolEventLogV2(
    $input: UpdatePlayerLeftPoolEventLogV2Input!
    $condition: ModelPlayerLeftPoolEventLogV2ConditionInput
  ) {
    updatePlayerLeftPoolEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayerLeftPoolEventLogV2 = /* GraphQL */ `
  mutation DeletePlayerLeftPoolEventLogV2(
    $input: DeletePlayerLeftPoolEventLogV2Input!
    $condition: ModelPlayerLeftPoolEventLogV2ConditionInput
  ) {
    deletePlayerLeftPoolEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const createPoolAwaitingExecutionEventLogV2 = /* GraphQL */ `
  mutation CreatePoolAwaitingExecutionEventLogV2(
    $input: CreatePoolAwaitingExecutionEventLogV2Input!
    $condition: ModelPoolAwaitingExecutionEventLogV2ConditionInput
  ) {
    createPoolAwaitingExecutionEventLogV2(
      input: $input
      condition: $condition
    ) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const updatePoolAwaitingExecutionEventLogV2 = /* GraphQL */ `
  mutation UpdatePoolAwaitingExecutionEventLogV2(
    $input: UpdatePoolAwaitingExecutionEventLogV2Input!
    $condition: ModelPoolAwaitingExecutionEventLogV2ConditionInput
  ) {
    updatePoolAwaitingExecutionEventLogV2(
      input: $input
      condition: $condition
    ) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const deletePoolAwaitingExecutionEventLogV2 = /* GraphQL */ `
  mutation DeletePoolAwaitingExecutionEventLogV2(
    $input: DeletePoolAwaitingExecutionEventLogV2Input!
    $condition: ModelPoolAwaitingExecutionEventLogV2ConditionInput
  ) {
    deletePoolAwaitingExecutionEventLogV2(
      input: $input
      condition: $condition
    ) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const createPoolCompletedEventLogV2 = /* GraphQL */ `
  mutation CreatePoolCompletedEventLogV2(
    $input: CreatePoolCompletedEventLogV2Input!
    $condition: ModelPoolCompletedEventLogV2ConditionInput
  ) {
    createPoolCompletedEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const updatePoolCompletedEventLogV2 = /* GraphQL */ `
  mutation UpdatePoolCompletedEventLogV2(
    $input: UpdatePoolCompletedEventLogV2Input!
    $condition: ModelPoolCompletedEventLogV2ConditionInput
  ) {
    updatePoolCompletedEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const deletePoolCompletedEventLogV2 = /* GraphQL */ `
  mutation DeletePoolCompletedEventLogV2(
    $input: DeletePoolCompletedEventLogV2Input!
    $condition: ModelPoolCompletedEventLogV2ConditionInput
  ) {
    deletePoolCompletedEventLogV2(input: $input, condition: $condition) {
      id
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
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
