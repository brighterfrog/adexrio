/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFeedback = /* GraphQL */ `
  subscription OnCreateFeedback {
    onCreateFeedback {
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
export const onUpdateFeedback = /* GraphQL */ `
  subscription OnUpdateFeedback {
    onUpdateFeedback {
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
export const onDeleteFeedback = /* GraphQL */ `
  subscription OnDeleteFeedback {
    onDeleteFeedback {
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
export const onUpdatePoolPlayer = /* GraphQL */ `
  subscription OnUpdatePoolPlayer {
    onUpdatePoolPlayer {
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
export const onDeletePoolPlayer = /* GraphQL */ `
  subscription OnDeletePoolPlayer {
    onDeletePoolPlayer {
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
export const onCreateApiPoolAttributes = /* GraphQL */ `
  subscription OnCreateApiPoolAttributes {
    onCreateApiPoolAttributes {
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
export const onUpdateApiPoolAttributes = /* GraphQL */ `
  subscription OnUpdateApiPoolAttributes {
    onUpdateApiPoolAttributes {
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
export const onDeleteApiPoolAttributes = /* GraphQL */ `
  subscription OnDeleteApiPoolAttributes {
    onDeleteApiPoolAttributes {
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
export const onCreatePool = /* GraphQL */ `
  subscription OnCreatePool {
    onCreatePool {
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
export const onUpdatePool = /* GraphQL */ `
  subscription OnUpdatePool {
    onUpdatePool {
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
export const onDeletePool = /* GraphQL */ `
  subscription OnDeletePool {
    onDeletePool {
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
export const onCreateCreatePoolEventLog = /* GraphQL */ `
  subscription OnCreateCreatePoolEventLog {
    onCreateCreatePoolEventLog {
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
export const onUpdateCreatePoolEventLog = /* GraphQL */ `
  subscription OnUpdateCreatePoolEventLog {
    onUpdateCreatePoolEventLog {
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
export const onDeleteCreatePoolEventLog = /* GraphQL */ `
  subscription OnDeleteCreatePoolEventLog {
    onDeleteCreatePoolEventLog {
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
export const onCreatePlayerJoinedPoolEventLog = /* GraphQL */ `
  subscription OnCreatePlayerJoinedPoolEventLog {
    onCreatePlayerJoinedPoolEventLog {
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
export const onUpdatePlayerJoinedPoolEventLog = /* GraphQL */ `
  subscription OnUpdatePlayerJoinedPoolEventLog {
    onUpdatePlayerJoinedPoolEventLog {
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
export const onDeletePlayerJoinedPoolEventLog = /* GraphQL */ `
  subscription OnDeletePlayerJoinedPoolEventLog {
    onDeletePlayerJoinedPoolEventLog {
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
export const onCreatePlayerLeftPoolEventLog = /* GraphQL */ `
  subscription OnCreatePlayerLeftPoolEventLog {
    onCreatePlayerLeftPoolEventLog {
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
export const onUpdatePlayerLeftPoolEventLog = /* GraphQL */ `
  subscription OnUpdatePlayerLeftPoolEventLog {
    onUpdatePlayerLeftPoolEventLog {
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
export const onDeletePlayerLeftPoolEventLog = /* GraphQL */ `
  subscription OnDeletePlayerLeftPoolEventLog {
    onDeletePlayerLeftPoolEventLog {
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
export const onCreatePoolAwaitingExecutionEventLog = /* GraphQL */ `
  subscription OnCreatePoolAwaitingExecutionEventLog {
    onCreatePoolAwaitingExecutionEventLog {
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
export const onUpdatePoolAwaitingExecutionEventLog = /* GraphQL */ `
  subscription OnUpdatePoolAwaitingExecutionEventLog {
    onUpdatePoolAwaitingExecutionEventLog {
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
export const onDeletePoolAwaitingExecutionEventLog = /* GraphQL */ `
  subscription OnDeletePoolAwaitingExecutionEventLog {
    onDeletePoolAwaitingExecutionEventLog {
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
export const onCreatePoolCompletedEventLog = /* GraphQL */ `
  subscription OnCreatePoolCompletedEventLog {
    onCreatePoolCompletedEventLog {
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
export const onUpdatePoolCompletedEventLog = /* GraphQL */ `
  subscription OnUpdatePoolCompletedEventLog {
    onUpdatePoolCompletedEventLog {
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
export const onDeletePoolCompletedEventLog = /* GraphQL */ `
  subscription OnDeletePoolCompletedEventLog {
    onDeletePoolCompletedEventLog {
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
