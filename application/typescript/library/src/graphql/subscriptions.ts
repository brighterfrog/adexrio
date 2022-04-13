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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
      }
      createdAt
      updatedAt
      poolPlayersId
      poolPlayerUserWalletId
    }
  }
`;
export const onCreateLotteryPoolAttributes = /* GraphQL */ `
  subscription OnCreateLotteryPoolAttributes {
    onCreateLotteryPoolAttributes {
      id
      auditRecordDrawId
      isAuditEnabled
      randomOrgUrlForResults
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
      }
      createdAt
      updatedAt
      lotteryPoolAttributesPoolId
    }
  }
`;
export const onUpdateLotteryPoolAttributes = /* GraphQL */ `
  subscription OnUpdateLotteryPoolAttributes {
    onUpdateLotteryPoolAttributes {
      id
      auditRecordDrawId
      isAuditEnabled
      randomOrgUrlForResults
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
      }
      createdAt
      updatedAt
      lotteryPoolAttributesPoolId
    }
  }
`;
export const onDeleteLotteryPoolAttributes = /* GraphQL */ `
  subscription OnDeleteLotteryPoolAttributes {
    onDeleteLotteryPoolAttributes {
      id
      auditRecordDrawId
      isAuditEnabled
      randomOrgUrlForResults
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
      }
      createdAt
      updatedAt
      lotteryPoolAttributesPoolId
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
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
      lotteryPoolAttributes {
        id
        auditRecordDrawId
        isAuditEnabled
        randomOrgUrlForResults
        createdAt
        updatedAt
        lotteryPoolAttributesPoolId
      }
      players {
        nextToken
      }
      createdAt
      updatedAt
      poolPoolCreatorId
      poolApiPoolAttributesId
      poolLotteryPoolAttributesId
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
      lotteryPoolAttributes {
        id
        auditRecordDrawId
        isAuditEnabled
        randomOrgUrlForResults
        createdAt
        updatedAt
        lotteryPoolAttributesPoolId
      }
      players {
        nextToken
      }
      createdAt
      updatedAt
      poolPoolCreatorId
      poolApiPoolAttributesId
      poolLotteryPoolAttributesId
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
      lotteryPoolAttributes {
        id
        auditRecordDrawId
        isAuditEnabled
        randomOrgUrlForResults
        createdAt
        updatedAt
        lotteryPoolAttributesPoolId
      }
      players {
        nextToken
      }
      createdAt
      updatedAt
      poolPoolCreatorId
      poolApiPoolAttributesId
      poolLotteryPoolAttributesId
    }
  }
`;
export const onCreatePoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  subscription OnCreatePoolSuccessfullBlockEventsProcessed {
    onCreatePoolSuccessfullBlockEventsProcessed {
      id
      positionField
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
      positionField
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
      positionField
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
export const onUpdateCreatePoolEventLog = /* GraphQL */ `
  subscription OnUpdateCreatePoolEventLog {
    onUpdateCreatePoolEventLog {
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
export const onDeleteCreatePoolEventLog = /* GraphQL */ `
  subscription OnDeleteCreatePoolEventLog {
    onDeleteCreatePoolEventLog {
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
export const onCreatePlayerJoinedPoolEventLog = /* GraphQL */ `
  subscription OnCreatePlayerJoinedPoolEventLog {
    onCreatePlayerJoinedPoolEventLog {
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
export const onUpdatePlayerJoinedPoolEventLog = /* GraphQL */ `
  subscription OnUpdatePlayerJoinedPoolEventLog {
    onUpdatePlayerJoinedPoolEventLog {
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
export const onDeletePlayerJoinedPoolEventLog = /* GraphQL */ `
  subscription OnDeletePlayerJoinedPoolEventLog {
    onDeletePlayerJoinedPoolEventLog {
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
export const onCreatePlayerLeftPoolEventLog = /* GraphQL */ `
  subscription OnCreatePlayerLeftPoolEventLog {
    onCreatePlayerLeftPoolEventLog {
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
export const onUpdatePlayerLeftPoolEventLog = /* GraphQL */ `
  subscription OnUpdatePlayerLeftPoolEventLog {
    onUpdatePlayerLeftPoolEventLog {
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
export const onDeletePlayerLeftPoolEventLog = /* GraphQL */ `
  subscription OnDeletePlayerLeftPoolEventLog {
    onDeletePlayerLeftPoolEventLog {
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
export const onCreatePoolAwaitingExecutionEventLog = /* GraphQL */ `
  subscription OnCreatePoolAwaitingExecutionEventLog {
    onCreatePoolAwaitingExecutionEventLog {
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
export const onUpdatePoolAwaitingExecutionEventLog = /* GraphQL */ `
  subscription OnUpdatePoolAwaitingExecutionEventLog {
    onUpdatePoolAwaitingExecutionEventLog {
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
export const onDeletePoolAwaitingExecutionEventLog = /* GraphQL */ `
  subscription OnDeletePoolAwaitingExecutionEventLog {
    onDeletePoolAwaitingExecutionEventLog {
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
export const onCreatePoolCompletedEventLog = /* GraphQL */ `
  subscription OnCreatePoolCompletedEventLog {
    onCreatePoolCompletedEventLog {
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
      decodedAuditRecordDrawId
      decodedType
      decodedDateTime
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePoolCompletedEventLog = /* GraphQL */ `
  subscription OnUpdatePoolCompletedEventLog {
    onUpdatePoolCompletedEventLog {
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
      decodedAuditRecordDrawId
      decodedType
      decodedDateTime
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePoolCompletedEventLog = /* GraphQL */ `
  subscription OnDeletePoolCompletedEventLog {
    onDeletePoolCompletedEventLog {
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
      decodedAuditRecordDrawId
      decodedType
      decodedDateTime
      poolJsonData
      createdAt
      updatedAt
    }
  }
`;
