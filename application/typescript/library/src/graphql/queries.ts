/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFeedback = /* GraphQL */ `
  query GetFeedback($id: ID!) {
    getFeedback(id: $id) {
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
export const listFeedbacks = /* GraphQL */ `
  query ListFeedbacks(
    $filter: ModelFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        comment
        commentType
        status
        wallet
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        wallet
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getErrorLog = /* GraphQL */ `
  query GetErrorLog($id: ID!) {
    getErrorLog(id: $id) {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
export const listErrorLogs = /* GraphQL */ `
  query ListErrorLogs(
    $filter: ModelErrorLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listErrorLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        stackTrace
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPoolPlayer = /* GraphQL */ `
  query GetPoolPlayer($userWalletId: String!, $poolId: Int!) {
    getPoolPlayer(userWalletId: $userWalletId, poolId: $poolId) {
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
export const listPoolPlayers = /* GraphQL */ `
  query ListPoolPlayers(
    $userWalletId: String
    $poolId: ModelIntKeyConditionInput
    $filter: ModelPoolPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPoolPlayers(
      userWalletId: $userWalletId
      poolId: $poolId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userWalletId
        status
        poolId
        createdAt
        updatedAt
        poolPlayersId
        poolPlayerUserWalletId
      }
      nextToken
    }
  }
`;
export const getApiPoolAttributes = /* GraphQL */ `
  query GetApiPoolAttributes($poolId: Int!) {
    getApiPoolAttributes(poolId: $poolId) {
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
export const listApiPoolAttributes = /* GraphQL */ `
  query ListApiPoolAttributes(
    $poolId: Int
    $filter: ModelApiPoolAttributesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listApiPoolAttributes(
      poolId: $poolId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPool = /* GraphQL */ `
  query GetPool($poolId: Int!) {
    getPool(poolId: $poolId) {
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
export const listPools = /* GraphQL */ `
  query ListPools(
    $poolId: Int
    $filter: ModelPoolFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPools(
      poolId: $poolId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  query GetPoolSuccessfullBlockEventsProcessed($id: Int!) {
    getPoolSuccessfullBlockEventsProcessed(id: $id) {
      id
      lambdaProcessorDecisionCheckForNextBlocknumber
      createdAt
      updatedAt
    }
  }
`;
export const listPoolSuccessfullBlockEventsProcesseds = /* GraphQL */ `
  query ListPoolSuccessfullBlockEventsProcesseds(
    $id: Int
    $filter: ModelPoolSuccessfullBlockEventsProcessedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPoolSuccessfullBlockEventsProcesseds(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        lambdaProcessorDecisionCheckForNextBlocknumber
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPoolSummaries = /* GraphQL */ `
  query GetPoolSummaries($id: ID!) {
    getPoolSummaries(id: $id) {
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
export const listPoolSummaries = /* GraphQL */ `
  query ListPoolSummaries(
    $filter: ModelPoolSummariesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoolSummaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const getUserWallet = /* GraphQL */ `
  query GetUserWallet($wallet: String!) {
    getUserWallet(wallet: $wallet) {
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
export const listUserWallets = /* GraphQL */ `
  query ListUserWallets(
    $wallet: String
    $filter: ModelUserWalletFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserWallets(
      wallet: $wallet
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
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
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEventLogMeta = /* GraphQL */ `
  query GetEventLogMeta($id: ID!) {
    getEventLogMeta(id: $id) {
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
export const listEventLogMetas = /* GraphQL */ `
  query ListEventLogMetas(
    $filter: ModelEventLogMetaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventLogMetas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCreatePoolEventDecoded = /* GraphQL */ `
  query GetCreatePoolEventDecoded(
    $txID: String!
    $gameId: Int!
    $player: String!
  ) {
    getCreatePoolEventDecoded(txID: $txID, gameId: $gameId, player: $player) {
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
export const listCreatePoolEventDecodeds = /* GraphQL */ `
  query ListCreatePoolEventDecodeds(
    $txID: String
    $gameIdPlayer: ModelCreatePoolEventDecodedPrimaryCompositeKeyConditionInput
    $filter: ModelCreatePoolEventDecodedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCreatePoolEventDecodeds(
      txID: $txID
      gameIdPlayer: $gameIdPlayer
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        createPoolEventDecodedCreatePoolEventLogId
      }
      nextToken
    }
  }
`;
export const getCreatePoolEventLog = /* GraphQL */ `
  query GetCreatePoolEventLog($id: ID!) {
    getCreatePoolEventLog(id: $id) {
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
export const listCreatePoolEventLogs = /* GraphQL */ `
  query ListCreatePoolEventLogs(
    $filter: ModelCreatePoolEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreatePoolEventLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        txID
        raw
        id
        createdAt
        updatedAt
        createPoolEventLogMetaId
        createPoolEventLogDecodedId
      }
      nextToken
    }
  }
`;
export const getPlayerJoinedPoolEventDecoded = /* GraphQL */ `
  query GetPlayerJoinedPoolEventDecoded(
    $txID: String!
    $gameId: Int!
    $player: String!
  ) {
    getPlayerJoinedPoolEventDecoded(
      txID: $txID
      gameId: $gameId
      player: $player
    ) {
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
export const listPlayerJoinedPoolEventDecodeds = /* GraphQL */ `
  query ListPlayerJoinedPoolEventDecodeds(
    $txID: String
    $gameIdPlayer: ModelPlayerJoinedPoolEventDecodedPrimaryCompositeKeyConditionInput
    $filter: ModelPlayerJoinedPoolEventDecodedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayerJoinedPoolEventDecodeds(
      txID: $txID
      gameIdPlayer: $gameIdPlayer
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        playerJoinedPoolEventDecodedPlayerJoinedPoolEventLogId
      }
      nextToken
    }
  }
`;
export const getPlayerJoinedPoolEventLog = /* GraphQL */ `
  query GetPlayerJoinedPoolEventLog($id: ID!) {
    getPlayerJoinedPoolEventLog(id: $id) {
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
export const listPlayerJoinedPoolEventLogs = /* GraphQL */ `
  query ListPlayerJoinedPoolEventLogs(
    $filter: ModelPlayerJoinedPoolEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerJoinedPoolEventLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        txID
        raw
        id
        createdAt
        updatedAt
        playerJoinedPoolEventLogMetaId
        playerJoinedPoolEventLogDecodedId
      }
      nextToken
    }
  }
`;
export const getPlayerLeftPoolEventDecoded = /* GraphQL */ `
  query GetPlayerLeftPoolEventDecoded(
    $txID: String!
    $gameId: Int!
    $player: String!
  ) {
    getPlayerLeftPoolEventDecoded(
      txID: $txID
      gameId: $gameId
      player: $player
    ) {
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
export const listPlayerLeftPoolEventDecodeds = /* GraphQL */ `
  query ListPlayerLeftPoolEventDecodeds(
    $txID: String
    $gameIdPlayer: ModelPlayerLeftPoolEventDecodedPrimaryCompositeKeyConditionInput
    $filter: ModelPlayerLeftPoolEventDecodedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayerLeftPoolEventDecodeds(
      txID: $txID
      gameIdPlayer: $gameIdPlayer
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        txID
        gameId
        player
        dateTime
        createdAt
        updatedAt
        playerLeftPoolEventDecodedPlayerLeftPoolEventLogId
      }
      nextToken
    }
  }
`;
export const getPlayerLeftPoolEventLog = /* GraphQL */ `
  query GetPlayerLeftPoolEventLog($id: ID!) {
    getPlayerLeftPoolEventLog(id: $id) {
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
export const listPlayerLeftPoolEventLogs = /* GraphQL */ `
  query ListPlayerLeftPoolEventLogs(
    $filter: ModelPlayerLeftPoolEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerLeftPoolEventLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        txID
        raw
        id
        createdAt
        updatedAt
        playerLeftPoolEventLogMetaId
        playerLeftPoolEventLogDecodedId
      }
      nextToken
    }
  }
`;
export const getPoolAwaitingExecutionEventDecoded = /* GraphQL */ `
  query GetPoolAwaitingExecutionEventDecoded(
    $txID: String!
    $gameId: Int!
    $status: String!
  ) {
    getPoolAwaitingExecutionEventDecoded(
      txID: $txID
      gameId: $gameId
      status: $status
    ) {
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
export const listPoolAwaitingExecutionEventDecodeds = /* GraphQL */ `
  query ListPoolAwaitingExecutionEventDecodeds(
    $txID: String
    $gameIdStatus: ModelPoolAwaitingExecutionEventDecodedPrimaryCompositeKeyConditionInput
    $filter: ModelPoolAwaitingExecutionEventDecodedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPoolAwaitingExecutionEventDecodeds(
      txID: $txID
      gameIdStatus: $gameIdStatus
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        txID
        gameId
        status
        dateTime
        createdAt
        updatedAt
        poolAwaitingExecutionEventDecodedPoolAwaitingExecutionEventLogId
      }
      nextToken
    }
  }
`;
export const getPoolAwaitingExecutionEventLog = /* GraphQL */ `
  query GetPoolAwaitingExecutionEventLog($id: ID!) {
    getPoolAwaitingExecutionEventLog(id: $id) {
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
export const listPoolAwaitingExecutionEventLogs = /* GraphQL */ `
  query ListPoolAwaitingExecutionEventLogs(
    $filter: ModelPoolAwaitingExecutionEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoolAwaitingExecutionEventLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        txID
        raw
        id
        createdAt
        updatedAt
        poolAwaitingExecutionEventLogMetaId
        poolAwaitingExecutionEventLogDecodedId
      }
      nextToken
    }
  }
`;
export const getPoolCompletedEventDecoded = /* GraphQL */ `
  query GetPoolCompletedEventDecoded(
    $txID: String!
    $gameId: Int!
    $player: String!
    $auditRecordDrawId: String!
  ) {
    getPoolCompletedEventDecoded(
      txID: $txID
      gameId: $gameId
      player: $player
      auditRecordDrawId: $auditRecordDrawId
    ) {
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
export const listPoolCompletedEventDecodeds = /* GraphQL */ `
  query ListPoolCompletedEventDecodeds(
    $txID: String
    $gameIdPlayerAuditRecordDrawId: ModelPoolCompletedEventDecodedPrimaryCompositeKeyConditionInput
    $filter: ModelPoolCompletedEventDecodedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPoolCompletedEventDecodeds(
      txID: $txID
      gameIdPlayerAuditRecordDrawId: $gameIdPlayerAuditRecordDrawId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPoolCompletedEventLog = /* GraphQL */ `
  query GetPoolCompletedEventLog($txID: String!) {
    getPoolCompletedEventLog(txID: $txID) {
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
export const listPoolCompletedEventLogs = /* GraphQL */ `
  query ListPoolCompletedEventLogs(
    $txID: String
    $filter: ModelPoolCompletedEventLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPoolCompletedEventLogs(
      txID: $txID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        txID
        raw
        createdAt
        updatedAt
        poolCompletedEventLogMetaId
        poolCompletedEventLogDecodedId
      }
      nextToken
    }
  }
`;
