/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchFeedbacks = /* GraphQL */ `
  query SearchFeedbacks(
    $filter: SearchableFeedbackFilterInput
    $sort: [SearchableFeedbackSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableFeedbackAggregationInput]
  ) {
    searchFeedbacks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
export const searchMessages = /* GraphQL */ `
  query SearchMessages(
    $filter: SearchableMessageFilterInput
    $sort: [SearchableMessageSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableMessageAggregationInput]
  ) {
    searchMessages(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        message
        wallet
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
export const searchPoolPlayers = /* GraphQL */ `
  query SearchPoolPlayers(
    $filter: SearchablePoolPlayerFilterInput
    $sort: [SearchablePoolPlayerSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePoolPlayerAggregationInput]
  ) {
    searchPoolPlayers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        status
        createdAt
        updatedAt
        poolPlayersId
        poolPlayerUserWalletId
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
export const searchApiPoolAttributes = /* GraphQL */ `
  query SearchApiPoolAttributes(
    $filter: SearchableApiPoolAttributesFilterInput
    $sort: [SearchableApiPoolAttributesSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableApiPoolAttributesAggregationInput]
  ) {
    searchApiPoolAttributes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
export const searchPools = /* GraphQL */ `
  query SearchPools(
    $filter: SearchablePoolFilterInput
    $sort: [SearchablePoolSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePoolAggregationInput]
  ) {
    searchPools(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
        apiRequestHash
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
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
export const searchPoolSummaries = /* GraphQL */ `
  query SearchPoolSummaries(
    $filter: SearchablePoolSummariesFilterInput
    $sort: [SearchablePoolSummariesSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePoolSummariesAggregationInput]
  ) {
    searchPoolSummaries(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
export const searchUserWallets = /* GraphQL */ `
  query SearchUserWallets(
    $filter: SearchableUserWalletFilterInput
    $sort: [SearchableUserWalletSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserWalletAggregationInput]
  ) {
    searchUserWallets(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
export const searchBrands = /* GraphQL */ `
  query SearchBrands(
    $filter: SearchableBrandFilterInput
    $sort: [SearchableBrandSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBrandAggregationInput]
  ) {
    searchBrands(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
export const searchCreatePoolEventLogV2s = /* GraphQL */ `
  query SearchCreatePoolEventLogV2s(
    $filter: SearchableCreatePoolEventLogV2FilterInput
    $sort: [SearchableCreatePoolEventLogV2SortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCreatePoolEventLogV2AggregationInput]
  ) {
    searchCreatePoolEventLogV2s(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
export const searchPlayerJoinedPoolEventLogV2s = /* GraphQL */ `
  query SearchPlayerJoinedPoolEventLogV2s(
    $filter: SearchablePlayerJoinedPoolEventLogV2FilterInput
    $sort: [SearchablePlayerJoinedPoolEventLogV2SortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePlayerJoinedPoolEventLogV2AggregationInput]
  ) {
    searchPlayerJoinedPoolEventLogV2s(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
export const searchPlayerLeftPoolEventLogV2s = /* GraphQL */ `
  query SearchPlayerLeftPoolEventLogV2s(
    $filter: SearchablePlayerLeftPoolEventLogV2FilterInput
    $sort: [SearchablePlayerLeftPoolEventLogV2SortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePlayerLeftPoolEventLogV2AggregationInput]
  ) {
    searchPlayerLeftPoolEventLogV2s(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
export const searchPoolAwaitingExecutionEventLogV2s = /* GraphQL */ `
  query SearchPoolAwaitingExecutionEventLogV2s(
    $filter: SearchablePoolAwaitingExecutionEventLogV2FilterInput
    $sort: [SearchablePoolAwaitingExecutionEventLogV2SortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePoolAwaitingExecutionEventLogV2AggregationInput]
  ) {
    searchPoolAwaitingExecutionEventLogV2s(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
export const searchPoolCompletedEventLogV2s = /* GraphQL */ `
  query SearchPoolCompletedEventLogV2s(
    $filter: SearchablePoolCompletedEventLogV2FilterInput
    $sort: [SearchablePoolCompletedEventLogV2SortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePoolCompletedEventLogV2AggregationInput]
  ) {
    searchPoolCompletedEventLogV2s(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
  query GetPoolPlayer($id: ID!) {
    getPoolPlayer(id: $id) {
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
export const listPoolPlayers = /* GraphQL */ `
  query ListPoolPlayers(
    $filter: ModelPoolPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoolPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
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
  query GetApiPoolAttributes($id: ID!) {
    getApiPoolAttributes(id: $id) {
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
export const listApiPoolAttributes = /* GraphQL */ `
  query ListApiPoolAttributes(
    $filter: ModelApiPoolAttributesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApiPoolAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        apiRequestHash
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
  query GetUserWallet($id: ID!) {
    getUserWallet(id: $id) {
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
export const getCreatePoolEventLogV2 = /* GraphQL */ `
  query GetCreatePoolEventLogV2($id: ID!) {
    getCreatePoolEventLogV2(id: $id) {
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
export const listCreatePoolEventLogV2s = /* GraphQL */ `
  query ListCreatePoolEventLogV2s(
    $filter: ModelCreatePoolEventLogV2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreatePoolEventLogV2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayerJoinedPoolEventLogV2 = /* GraphQL */ `
  query GetPlayerJoinedPoolEventLogV2($id: ID!) {
    getPlayerJoinedPoolEventLogV2(id: $id) {
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
export const listPlayerJoinedPoolEventLogV2s = /* GraphQL */ `
  query ListPlayerJoinedPoolEventLogV2s(
    $filter: ModelPlayerJoinedPoolEventLogV2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerJoinedPoolEventLogV2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayerLeftPoolEventLogV2 = /* GraphQL */ `
  query GetPlayerLeftPoolEventLogV2($txID: String!) {
    getPlayerLeftPoolEventLogV2(txID: $txID) {
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
export const listPlayerLeftPoolEventLogV2s = /* GraphQL */ `
  query ListPlayerLeftPoolEventLogV2s(
    $txID: String
    $filter: ModelPlayerLeftPoolEventLogV2FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayerLeftPoolEventLogV2s(
      txID: $txID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPoolAwaitingExecutionEventLogV2 = /* GraphQL */ `
  query GetPoolAwaitingExecutionEventLogV2($id: ID!) {
    getPoolAwaitingExecutionEventLogV2(id: $id) {
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
export const listPoolAwaitingExecutionEventLogV2s = /* GraphQL */ `
  query ListPoolAwaitingExecutionEventLogV2s(
    $filter: ModelPoolAwaitingExecutionEventLogV2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoolAwaitingExecutionEventLogV2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPoolCompletedEventLogV2 = /* GraphQL */ `
  query GetPoolCompletedEventLogV2($id: ID!) {
    getPoolCompletedEventLogV2(id: $id) {
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
export const listPoolCompletedEventLogV2s = /* GraphQL */ `
  query ListPoolCompletedEventLogV2s(
    $filter: ModelPoolCompletedEventLogV2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoolCompletedEventLogV2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
