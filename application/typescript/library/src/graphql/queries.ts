/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFeedback = /* GraphQL */ `
  query GetFeedback($id: ID!) {
    getFeedback(id: $id) {
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
export const listFeedbacks = /* GraphQL */ `
  query ListFeedbacks(
    $filter: ModelFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const getGamesSummary = /* GraphQL */ `
  query GetGamesSummary($id: Int!) {
    getGamesSummary(id: $id) {
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
export const listGamesSummarys = /* GraphQL */ `
  query ListGamesSummarys(
    $id: Int
    $filter: ModelGamesSummaryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGamesSummarys(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getApiPoolAttributes = /* GraphQL */ `
  query GetApiPoolAttributes($id: ID!) {
    getApiPoolAttributes(id: $id) {
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
export const listApiPoolAttributess = /* GraphQL */ `
  query ListApiPoolAttributess(
    $filter: ModelApiPoolAttributesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApiPoolAttributess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const getPool = /* GraphQL */ `
  query GetPool($id: ID!) {
    getPool(id: $id) {
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
export const listPools = /* GraphQL */ `
  query ListPools(
    $filter: ModelPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const getPoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  query GetPoolSuccessfullBlockEventsProcessed($id: ID!) {
    getPoolSuccessfullBlockEventsProcessed(id: $id) {
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
export const listPoolSuccessfullBlockEventsProcesseds = /* GraphQL */ `
  query ListPoolSuccessfullBlockEventsProcesseds(
    $filter: ModelPoolSuccessfullBlockEventsProcessedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoolSuccessfullBlockEventsProcesseds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const listPoolSummariess = /* GraphQL */ `
  query ListPoolSummariess(
    $filter: ModelPoolSummariesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoolSummariess(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  query GetUserWallet($id: ID!) {
    getUserWallet(id: $id) {
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
export const listUserWallets = /* GraphQL */ `
  query ListUserWallets(
    $filter: ModelUserWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
