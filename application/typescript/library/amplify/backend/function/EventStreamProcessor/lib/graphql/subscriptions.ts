/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFeedback = /* GraphQL */ `
  subscription OnCreateFeedback {
    onCreateFeedback {
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
export const onUpdateFeedback = /* GraphQL */ `
  subscription OnUpdateFeedback {
    onUpdateFeedback {
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
export const onDeleteFeedback = /* GraphQL */ `
  subscription OnDeleteFeedback {
    onDeleteFeedback {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
export const onCreateErrorLog = /* GraphQL */ `
  subscription OnCreateErrorLog {
    onCreateErrorLog {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
export const onUpdateErrorLog = /* GraphQL */ `
  subscription OnUpdateErrorLog {
    onUpdateErrorLog {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
export const onDeleteErrorLog = /* GraphQL */ `
  subscription OnDeleteErrorLog {
    onDeleteErrorLog {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
export const onCreatePoolPlayer = /* GraphQL */ `
  subscription OnCreatePoolPlayer {
    onCreatePoolPlayer {
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
export const onUpdatePoolPlayer = /* GraphQL */ `
  subscription OnUpdatePoolPlayer {
    onUpdatePoolPlayer {
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
export const onDeletePoolPlayer = /* GraphQL */ `
  subscription OnDeletePoolPlayer {
    onDeletePoolPlayer {
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
export const onCreateApiPoolAttributes = /* GraphQL */ `
  subscription OnCreateApiPoolAttributes {
    onCreateApiPoolAttributes {
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
export const onUpdateApiPoolAttributes = /* GraphQL */ `
  subscription OnUpdateApiPoolAttributes {
    onUpdateApiPoolAttributes {
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
export const onDeleteApiPoolAttributes = /* GraphQL */ `
  subscription OnDeleteApiPoolAttributes {
    onDeleteApiPoolAttributes {
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
export const onCreatePool = /* GraphQL */ `
  subscription OnCreatePool {
    onCreatePool {
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
export const onUpdatePool = /* GraphQL */ `
  subscription OnUpdatePool {
    onUpdatePool {
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
export const onDeletePool = /* GraphQL */ `
  subscription OnDeletePool {
    onDeletePool {
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
export const onCreatePoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  subscription OnCreatePoolSuccessfullBlockEventsProcessed {
    onCreatePoolSuccessfullBlockEventsProcessed {
      id
      lambdaProcessorDecisionCheckForNextBlocknumber
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  subscription OnUpdatePoolSuccessfullBlockEventsProcessed {
    onUpdatePoolSuccessfullBlockEventsProcessed {
      id
      lambdaProcessorDecisionCheckForNextBlocknumber
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  subscription OnDeletePoolSuccessfullBlockEventsProcessed {
    onDeletePoolSuccessfullBlockEventsProcessed {
      id
      lambdaProcessorDecisionCheckForNextBlocknumber
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePoolSummaries = /* GraphQL */ `
  subscription OnCreatePoolSummaries {
    onCreatePoolSummaries {
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
export const onUpdatePoolSummaries = /* GraphQL */ `
  subscription OnUpdatePoolSummaries {
    onUpdatePoolSummaries {
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
export const onDeletePoolSummaries = /* GraphQL */ `
  subscription OnDeletePoolSummaries {
    onDeletePoolSummaries {
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
export const onCreateUserWallet = /* GraphQL */ `
  subscription OnCreateUserWallet {
    onCreateUserWallet {
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
export const onUpdateUserWallet = /* GraphQL */ `
  subscription OnUpdateUserWallet {
    onUpdateUserWallet {
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
export const onDeleteUserWallet = /* GraphQL */ `
  subscription OnDeleteUserWallet {
    onDeleteUserWallet {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
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
export const onCreateCreatePoolEventLogV2 = /* GraphQL */ `
  subscription OnCreateCreatePoolEventLogV2 {
    onCreateCreatePoolEventLogV2 {
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
export const onUpdateCreatePoolEventLogV2 = /* GraphQL */ `
  subscription OnUpdateCreatePoolEventLogV2 {
    onUpdateCreatePoolEventLogV2 {
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
export const onDeleteCreatePoolEventLogV2 = /* GraphQL */ `
  subscription OnDeleteCreatePoolEventLogV2 {
    onDeleteCreatePoolEventLogV2 {
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
export const onCreatePlayerJoinedPoolEventLogV2 = /* GraphQL */ `
  subscription OnCreatePlayerJoinedPoolEventLogV2 {
    onCreatePlayerJoinedPoolEventLogV2 {
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
export const onUpdatePlayerJoinedPoolEventLogV2 = /* GraphQL */ `
  subscription OnUpdatePlayerJoinedPoolEventLogV2 {
    onUpdatePlayerJoinedPoolEventLogV2 {
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
export const onDeletePlayerJoinedPoolEventLogV2 = /* GraphQL */ `
  subscription OnDeletePlayerJoinedPoolEventLogV2 {
    onDeletePlayerJoinedPoolEventLogV2 {
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
export const onCreatePlayerLeftPoolEventLogV2 = /* GraphQL */ `
  subscription OnCreatePlayerLeftPoolEventLogV2 {
    onCreatePlayerLeftPoolEventLogV2 {
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
export const onUpdatePlayerLeftPoolEventLogV2 = /* GraphQL */ `
  subscription OnUpdatePlayerLeftPoolEventLogV2 {
    onUpdatePlayerLeftPoolEventLogV2 {
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
export const onDeletePlayerLeftPoolEventLogV2 = /* GraphQL */ `
  subscription OnDeletePlayerLeftPoolEventLogV2 {
    onDeletePlayerLeftPoolEventLogV2 {
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
export const onCreatePoolAwaitingExecutionEventLogV2 = /* GraphQL */ `
  subscription OnCreatePoolAwaitingExecutionEventLogV2 {
    onCreatePoolAwaitingExecutionEventLogV2 {
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
export const onUpdatePoolAwaitingExecutionEventLogV2 = /* GraphQL */ `
  subscription OnUpdatePoolAwaitingExecutionEventLogV2 {
    onUpdatePoolAwaitingExecutionEventLogV2 {
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
export const onDeletePoolAwaitingExecutionEventLogV2 = /* GraphQL */ `
  subscription OnDeletePoolAwaitingExecutionEventLogV2 {
    onDeletePoolAwaitingExecutionEventLogV2 {
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
export const onCreatePoolCompletedEventLogV2 = /* GraphQL */ `
  subscription OnCreatePoolCompletedEventLogV2 {
    onCreatePoolCompletedEventLogV2 {
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
export const onUpdatePoolCompletedEventLogV2 = /* GraphQL */ `
  subscription OnUpdatePoolCompletedEventLogV2 {
    onUpdatePoolCompletedEventLogV2 {
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
export const onDeletePoolCompletedEventLogV2 = /* GraphQL */ `
  subscription OnDeletePoolCompletedEventLogV2 {
    onDeletePoolCompletedEventLogV2 {
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
