/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchCreatePoolEventLogs = /* GraphQL */ `
  query SearchCreatePoolEventLogs(
    $filter: SearchableCreatePoolEventLogFilterInput
    $sort: [SearchableCreatePoolEventLogSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCreatePoolEventLogAggregationInput]
  ) {
    searchCreatePoolEventLogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchPlayerJoinedPoolEventLogs = /* GraphQL */ `
  query SearchPlayerJoinedPoolEventLogs(
    $filter: SearchablePlayerJoinedPoolEventLogFilterInput
    $sort: [SearchablePlayerJoinedPoolEventLogSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePlayerJoinedPoolEventLogAggregationInput]
  ) {
    searchPlayerJoinedPoolEventLogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchPlayerLeftPoolEventLogs = /* GraphQL */ `
  query SearchPlayerLeftPoolEventLogs(
    $filter: SearchablePlayerLeftPoolEventLogFilterInput
    $sort: [SearchablePlayerLeftPoolEventLogSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePlayerLeftPoolEventLogAggregationInput]
  ) {
    searchPlayerLeftPoolEventLogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchPoolAwaitingExecutionEventLogs = /* GraphQL */ `
  query SearchPoolAwaitingExecutionEventLogs(
    $filter: SearchablePoolAwaitingExecutionEventLogFilterInput
    $sort: [SearchablePoolAwaitingExecutionEventLogSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePoolAwaitingExecutionEventLogAggregationInput]
  ) {
    searchPoolAwaitingExecutionEventLogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchPoolCompletedEventLogs = /* GraphQL */ `
  query SearchPoolCompletedEventLogs(
    $filter: SearchablePoolCompletedEventLogFilterInput
    $sort: [SearchablePoolCompletedEventLogSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePoolCompletedEventLogAggregationInput]
  ) {
    searchPoolCompletedEventLogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
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
export const getCreatePoolEventLog = /* GraphQL */ `
  query GetCreatePoolEventLog($txID: String!) {
    getCreatePoolEventLog(txID: $txID) {
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
export const listCreatePoolEventLogs = /* GraphQL */ `
  query ListCreatePoolEventLogs(
    $txID: String
    $filter: ModelCreatePoolEventLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCreatePoolEventLogs(
      txID: $txID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayerJoinedPoolEventLog = /* GraphQL */ `
  query GetPlayerJoinedPoolEventLog($txID: String!) {
    getPlayerJoinedPoolEventLog(txID: $txID) {
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
export const listPlayerJoinedPoolEventLogs = /* GraphQL */ `
  query ListPlayerJoinedPoolEventLogs(
    $txID: String
    $filter: ModelPlayerJoinedPoolEventLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayerJoinedPoolEventLogs(
      txID: $txID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayerLeftPoolEventLog = /* GraphQL */ `
  query GetPlayerLeftPoolEventLog($txID: String!) {
    getPlayerLeftPoolEventLog(txID: $txID) {
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
export const listPlayerLeftPoolEventLogs = /* GraphQL */ `
  query ListPlayerLeftPoolEventLogs(
    $txID: String
    $filter: ModelPlayerLeftPoolEventLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayerLeftPoolEventLogs(
      txID: $txID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPoolAwaitingExecutionEventLog = /* GraphQL */ `
  query GetPoolAwaitingExecutionEventLog($txID: String!) {
    getPoolAwaitingExecutionEventLog(txID: $txID) {
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
export const listPoolAwaitingExecutionEventLogs = /* GraphQL */ `
  query ListPoolAwaitingExecutionEventLogs(
    $txID: String
    $filter: ModelPoolAwaitingExecutionEventLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPoolAwaitingExecutionEventLogs(
      txID: $txID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPoolCompletedEventLog = /* GraphQL */ `
  query GetPoolCompletedEventLog($txID: String!) {
    getPoolCompletedEventLog(txID: $txID) {
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
      nextToken
    }
  }
`;
