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
export const onCreateEventLogMeta = /* GraphQL */ `
  subscription OnCreateEventLogMeta {
    onCreateEventLogMeta {
      txID
      blockID
      blockNumber
      blockTimestamp
      txOrigin
      clauseIndex
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEventLogMeta = /* GraphQL */ `
  subscription OnUpdateEventLogMeta {
    onUpdateEventLogMeta {
      txID
      blockID
      blockNumber
      blockTimestamp
      txOrigin
      clauseIndex
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEventLogMeta = /* GraphQL */ `
  subscription OnDeleteEventLogMeta {
    onDeleteEventLogMeta {
      txID
      blockID
      blockNumber
      blockTimestamp
      txOrigin
      clauseIndex
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCreatePoolEventDecoded = /* GraphQL */ `
  subscription OnCreateCreatePoolEventDecoded {
    onCreateCreatePoolEventDecoded {
      txID
      gameId
      player
      dateTime
      createPoolEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        createPoolEventLogMetaId
        createPoolEventLogDecodedId
      }
      createdAt
      updatedAt
      createPoolEventDecodedCreatePoolEventLogId
    }
  }
`;
export const onUpdateCreatePoolEventDecoded = /* GraphQL */ `
  subscription OnUpdateCreatePoolEventDecoded {
    onUpdateCreatePoolEventDecoded {
      txID
      gameId
      player
      dateTime
      createPoolEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        createPoolEventLogMetaId
        createPoolEventLogDecodedId
      }
      createdAt
      updatedAt
      createPoolEventDecodedCreatePoolEventLogId
    }
  }
`;
export const onDeleteCreatePoolEventDecoded = /* GraphQL */ `
  subscription OnDeleteCreatePoolEventDecoded {
    onDeleteCreatePoolEventDecoded {
      txID
      gameId
      player
      dateTime
      createPoolEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        createPoolEventLogMetaId
        createPoolEventLogDecodedId
      }
      createdAt
      updatedAt
      createPoolEventDecodedCreatePoolEventLogId
    }
  }
`;
export const onCreateCreatePoolEventLog = /* GraphQL */ `
  subscription OnCreateCreatePoolEventLog {
    onCreateCreatePoolEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        createPoolEventDecodedCreatePoolEventLogId
      }
      id
      createdAt
      updatedAt
      createPoolEventLogMetaId
      createPoolEventLogDecodedId
    }
  }
`;
export const onUpdateCreatePoolEventLog = /* GraphQL */ `
  subscription OnUpdateCreatePoolEventLog {
    onUpdateCreatePoolEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        createPoolEventDecodedCreatePoolEventLogId
      }
      id
      createdAt
      updatedAt
      createPoolEventLogMetaId
      createPoolEventLogDecodedId
    }
  }
`;
export const onDeleteCreatePoolEventLog = /* GraphQL */ `
  subscription OnDeleteCreatePoolEventLog {
    onDeleteCreatePoolEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        createPoolEventDecodedCreatePoolEventLogId
      }
      id
      createdAt
      updatedAt
      createPoolEventLogMetaId
      createPoolEventLogDecodedId
    }
  }
`;
export const onCreatePlayerJoinedPoolEventDecoded = /* GraphQL */ `
  subscription OnCreatePlayerJoinedPoolEventDecoded {
    onCreatePlayerJoinedPoolEventDecoded {
      txID
      gameId
      player
      dateTime
      playerJoinedPoolEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        playerJoinedPoolEventLogMetaId
        playerJoinedPoolEventLogDecodedId
      }
      createdAt
      updatedAt
      playerJoinedPoolEventDecodedPlayerJoinedPoolEventLogId
    }
  }
`;
export const onUpdatePlayerJoinedPoolEventDecoded = /* GraphQL */ `
  subscription OnUpdatePlayerJoinedPoolEventDecoded {
    onUpdatePlayerJoinedPoolEventDecoded {
      txID
      gameId
      player
      dateTime
      playerJoinedPoolEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        playerJoinedPoolEventLogMetaId
        playerJoinedPoolEventLogDecodedId
      }
      createdAt
      updatedAt
      playerJoinedPoolEventDecodedPlayerJoinedPoolEventLogId
    }
  }
`;
export const onDeletePlayerJoinedPoolEventDecoded = /* GraphQL */ `
  subscription OnDeletePlayerJoinedPoolEventDecoded {
    onDeletePlayerJoinedPoolEventDecoded {
      txID
      gameId
      player
      dateTime
      playerJoinedPoolEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        playerJoinedPoolEventLogMetaId
        playerJoinedPoolEventLogDecodedId
      }
      createdAt
      updatedAt
      playerJoinedPoolEventDecodedPlayerJoinedPoolEventLogId
    }
  }
`;
export const onCreatePlayerJoinedPoolEventLog = /* GraphQL */ `
  subscription OnCreatePlayerJoinedPoolEventLog {
    onCreatePlayerJoinedPoolEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        playerJoinedPoolEventDecodedPlayerJoinedPoolEventLogId
      }
      id
      createdAt
      updatedAt
      playerJoinedPoolEventLogMetaId
      playerJoinedPoolEventLogDecodedId
    }
  }
`;
export const onUpdatePlayerJoinedPoolEventLog = /* GraphQL */ `
  subscription OnUpdatePlayerJoinedPoolEventLog {
    onUpdatePlayerJoinedPoolEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        playerJoinedPoolEventDecodedPlayerJoinedPoolEventLogId
      }
      id
      createdAt
      updatedAt
      playerJoinedPoolEventLogMetaId
      playerJoinedPoolEventLogDecodedId
    }
  }
`;
export const onDeletePlayerJoinedPoolEventLog = /* GraphQL */ `
  subscription OnDeletePlayerJoinedPoolEventLog {
    onDeletePlayerJoinedPoolEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        playerJoinedPoolEventDecodedPlayerJoinedPoolEventLogId
      }
      id
      createdAt
      updatedAt
      playerJoinedPoolEventLogMetaId
      playerJoinedPoolEventLogDecodedId
    }
  }
`;
export const onCreatePlayerLeftPoolEventDecoded = /* GraphQL */ `
  subscription OnCreatePlayerLeftPoolEventDecoded {
    onCreatePlayerLeftPoolEventDecoded {
      txID
      gameId
      player
      dateTime
      playerLeftPoolEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        playerLeftPoolEventLogMetaId
        playerLeftPoolEventLogDecodedId
      }
      createdAt
      updatedAt
      playerLeftPoolEventDecodedPlayerLeftPoolEventLogId
    }
  }
`;
export const onUpdatePlayerLeftPoolEventDecoded = /* GraphQL */ `
  subscription OnUpdatePlayerLeftPoolEventDecoded {
    onUpdatePlayerLeftPoolEventDecoded {
      txID
      gameId
      player
      dateTime
      playerLeftPoolEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        playerLeftPoolEventLogMetaId
        playerLeftPoolEventLogDecodedId
      }
      createdAt
      updatedAt
      playerLeftPoolEventDecodedPlayerLeftPoolEventLogId
    }
  }
`;
export const onDeletePlayerLeftPoolEventDecoded = /* GraphQL */ `
  subscription OnDeletePlayerLeftPoolEventDecoded {
    onDeletePlayerLeftPoolEventDecoded {
      txID
      gameId
      player
      dateTime
      playerLeftPoolEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        playerLeftPoolEventLogMetaId
        playerLeftPoolEventLogDecodedId
      }
      createdAt
      updatedAt
      playerLeftPoolEventDecodedPlayerLeftPoolEventLogId
    }
  }
`;
export const onCreatePlayerLeftPoolEventLog = /* GraphQL */ `
  subscription OnCreatePlayerLeftPoolEventLog {
    onCreatePlayerLeftPoolEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        playerLeftPoolEventDecodedPlayerLeftPoolEventLogId
      }
      id
      createdAt
      updatedAt
      playerLeftPoolEventLogMetaId
      playerLeftPoolEventLogDecodedId
    }
  }
`;
export const onUpdatePlayerLeftPoolEventLog = /* GraphQL */ `
  subscription OnUpdatePlayerLeftPoolEventLog {
    onUpdatePlayerLeftPoolEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        playerLeftPoolEventDecodedPlayerLeftPoolEventLogId
      }
      id
      createdAt
      updatedAt
      playerLeftPoolEventLogMetaId
      playerLeftPoolEventLogDecodedId
    }
  }
`;
export const onDeletePlayerLeftPoolEventLog = /* GraphQL */ `
  subscription OnDeletePlayerLeftPoolEventLog {
    onDeletePlayerLeftPoolEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        playerLeftPoolEventDecodedPlayerLeftPoolEventLogId
      }
      id
      createdAt
      updatedAt
      playerLeftPoolEventLogMetaId
      playerLeftPoolEventLogDecodedId
    }
  }
`;
export const onCreatePoolAwaitingExecutionEventDecoded = /* GraphQL */ `
  subscription OnCreatePoolAwaitingExecutionEventDecoded {
    onCreatePoolAwaitingExecutionEventDecoded {
      txID
      gameId
      status
      dateTime
      poolAwaitingExecutionEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        poolAwaitingExecutionEventLogMetaId
        poolAwaitingExecutionEventLogDecodedId
      }
      createdAt
      updatedAt
      poolAwaitingExecutionEventDecodedPoolAwaitingExecutionEventLogId
    }
  }
`;
export const onUpdatePoolAwaitingExecutionEventDecoded = /* GraphQL */ `
  subscription OnUpdatePoolAwaitingExecutionEventDecoded {
    onUpdatePoolAwaitingExecutionEventDecoded {
      txID
      gameId
      status
      dateTime
      poolAwaitingExecutionEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        poolAwaitingExecutionEventLogMetaId
        poolAwaitingExecutionEventLogDecodedId
      }
      createdAt
      updatedAt
      poolAwaitingExecutionEventDecodedPoolAwaitingExecutionEventLogId
    }
  }
`;
export const onDeletePoolAwaitingExecutionEventDecoded = /* GraphQL */ `
  subscription OnDeletePoolAwaitingExecutionEventDecoded {
    onDeletePoolAwaitingExecutionEventDecoded {
      txID
      gameId
      status
      dateTime
      poolAwaitingExecutionEventLog {
        txID
        raw
        id
        createdAt
        updatedAt
        poolAwaitingExecutionEventLogMetaId
        poolAwaitingExecutionEventLogDecodedId
      }
      createdAt
      updatedAt
      poolAwaitingExecutionEventDecodedPoolAwaitingExecutionEventLogId
    }
  }
`;
export const onCreatePoolAwaitingExecutionEventLog = /* GraphQL */ `
  subscription OnCreatePoolAwaitingExecutionEventLog {
    onCreatePoolAwaitingExecutionEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        status
        dateTime
        createdAt
        updatedAt
        poolAwaitingExecutionEventDecodedPoolAwaitingExecutionEventLogId
      }
      id
      createdAt
      updatedAt
      poolAwaitingExecutionEventLogMetaId
      poolAwaitingExecutionEventLogDecodedId
    }
  }
`;
export const onUpdatePoolAwaitingExecutionEventLog = /* GraphQL */ `
  subscription OnUpdatePoolAwaitingExecutionEventLog {
    onUpdatePoolAwaitingExecutionEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        status
        dateTime
        createdAt
        updatedAt
        poolAwaitingExecutionEventDecodedPoolAwaitingExecutionEventLogId
      }
      id
      createdAt
      updatedAt
      poolAwaitingExecutionEventLogMetaId
      poolAwaitingExecutionEventLogDecodedId
    }
  }
`;
export const onDeletePoolAwaitingExecutionEventLog = /* GraphQL */ `
  subscription OnDeletePoolAwaitingExecutionEventLog {
    onDeletePoolAwaitingExecutionEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        status
        dateTime
        createdAt
        updatedAt
        poolAwaitingExecutionEventDecodedPoolAwaitingExecutionEventLogId
      }
      id
      createdAt
      updatedAt
      poolAwaitingExecutionEventLogMetaId
      poolAwaitingExecutionEventLogDecodedId
    }
  }
`;
export const onCreatePoolCompletedEventDecoded = /* GraphQL */ `
  subscription OnCreatePoolCompletedEventDecoded {
    onCreatePoolCompletedEventDecoded {
      txID
      gameId
      player
      dateTime
      winningPayout
      transactionId
      auditRecordDrawId
      poolCompletedEventLog {
        txID
        raw
        createdAt
        updatedAt
        poolCompletedEventLogMetaId
        poolCompletedEventLogDecodedId
      }
      createdAt
      updatedAt
      poolCompletedEventDecodedPoolCompletedEventLogId
    }
  }
`;
export const onUpdatePoolCompletedEventDecoded = /* GraphQL */ `
  subscription OnUpdatePoolCompletedEventDecoded {
    onUpdatePoolCompletedEventDecoded {
      txID
      gameId
      player
      dateTime
      winningPayout
      transactionId
      auditRecordDrawId
      poolCompletedEventLog {
        txID
        raw
        createdAt
        updatedAt
        poolCompletedEventLogMetaId
        poolCompletedEventLogDecodedId
      }
      createdAt
      updatedAt
      poolCompletedEventDecodedPoolCompletedEventLogId
    }
  }
`;
export const onDeletePoolCompletedEventDecoded = /* GraphQL */ `
  subscription OnDeletePoolCompletedEventDecoded {
    onDeletePoolCompletedEventDecoded {
      txID
      gameId
      player
      dateTime
      winningPayout
      transactionId
      auditRecordDrawId
      poolCompletedEventLog {
        txID
        raw
        createdAt
        updatedAt
        poolCompletedEventLogMetaId
        poolCompletedEventLogDecodedId
      }
      createdAt
      updatedAt
      poolCompletedEventDecodedPoolCompletedEventLogId
    }
  }
`;
export const onCreatePoolCompletedEventLog = /* GraphQL */ `
  subscription OnCreatePoolCompletedEventLog {
    onCreatePoolCompletedEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        winningPayout
        transactionId
        auditRecordDrawId
        createdAt
        updatedAt
        poolCompletedEventDecodedPoolCompletedEventLogId
      }
      createdAt
      updatedAt
      poolCompletedEventLogMetaId
      poolCompletedEventLogDecodedId
    }
  }
`;
export const onUpdatePoolCompletedEventLog = /* GraphQL */ `
  subscription OnUpdatePoolCompletedEventLog {
    onUpdatePoolCompletedEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        winningPayout
        transactionId
        auditRecordDrawId
        createdAt
        updatedAt
        poolCompletedEventDecodedPoolCompletedEventLogId
      }
      createdAt
      updatedAt
      poolCompletedEventLogMetaId
      poolCompletedEventLogDecodedId
    }
  }
`;
export const onDeletePoolCompletedEventLog = /* GraphQL */ `
  subscription OnDeletePoolCompletedEventLog {
    onDeletePoolCompletedEventLog {
      txID
      raw
      meta {
        txID
        blockID
        blockNumber
        blockTimestamp
        txOrigin
        clauseIndex
        id
        createdAt
        updatedAt
      }
      decoded {
        txID
        gameId
        player
        dateTime
        winningPayout
        transactionId
        auditRecordDrawId
        createdAt
        updatedAt
        poolCompletedEventDecodedPoolCompletedEventLogId
      }
      createdAt
      updatedAt
      poolCompletedEventLogMetaId
      poolCompletedEventLogDecodedId
    }
  }
`;
