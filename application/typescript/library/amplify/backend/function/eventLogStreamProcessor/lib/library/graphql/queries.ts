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
        userWalletId
        status
        poolId
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
export const searchLotteryPoolAttributes = /* GraphQL */ `
  query SearchLotteryPoolAttributes(
    $filter: SearchableLotteryPoolAttributesFilterInput
    $sort: [SearchableLotteryPoolAttributesSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableLotteryPoolAttributesAggregationInput]
  ) {
    searchLotteryPoolAttributes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        auditRecordDrawId
        isAuditEnabled
        randomOrgUrlForResults
        poolId
        createdAt
        updatedAt
        lotteryPoolAttributesPoolId
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
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
      userWalletId
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
    $filter: ModelPoolPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoolPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
export const getLotteryPoolAttributes = /* GraphQL */ `
  query GetLotteryPoolAttributes($id: ID!) {
    getLotteryPoolAttributes(id: $id) {
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
      poolId
      createdAt
      updatedAt
      lotteryPoolAttributesPoolId
    }
  }
`;
export const listLotteryPoolAttributes = /* GraphQL */ `
  query ListLotteryPoolAttributes(
    $filter: ModelLotteryPoolAttributesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLotteryPoolAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        auditRecordDrawId
        isAuditEnabled
        randomOrgUrlForResults
        poolId
        createdAt
        updatedAt
        lotteryPoolAttributesPoolId
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
        poolId
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
      }
      nextToken
    }
  }
`;
export const getPoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  query GetPoolSuccessfullBlockEventsProcessed($id: ID!) {
    getPoolSuccessfullBlockEventsProcessed(id: $id) {
      id
      positionField
      lambdaProcessorDecisionCheckForNextBlocknumber
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
        positionField
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
  query GetCreatePoolEventLog($id: ID!) {
    getCreatePoolEventLog(id: $id) {
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
export const getPlayerJoinedPoolEventLog = /* GraphQL */ `
  query GetPlayerJoinedPoolEventLog($id: ID!) {
    getPlayerJoinedPoolEventLog(id: $id) {
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
export const getPlayerLeftPoolEventLog = /* GraphQL */ `
  query GetPlayerLeftPoolEventLog($id: ID!) {
    getPlayerLeftPoolEventLog(id: $id) {
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
export const getPoolAwaitingExecutionEventLog = /* GraphQL */ `
  query GetPoolAwaitingExecutionEventLog($id: ID!) {
    getPoolAwaitingExecutionEventLog(id: $id) {
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
export const getPoolCompletedEventLog = /* GraphQL */ `
  query GetPoolCompletedEventLog($id: ID!) {
    getPoolCompletedEventLog(id: $id) {
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
export const listPoolCompletedEventLogs = /* GraphQL */ `
  query ListPoolCompletedEventLogs(
    $filter: ModelPoolCompletedEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoolCompletedEventLogs(
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
export const getPoolPlayerbyUserWalletIdPoolIdStatusIdIndex = /* GraphQL */ `
  query GetPoolPlayerbyUserWalletIdPoolIdStatusIdIndex(
    $userWalletId: String!
    $poolIdStatus: ModelPoolPlayerByUserWalletIdPoolIdStatusIdCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPoolPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPoolPlayerbyUserWalletIdPoolIdStatusIdIndex(
      userWalletId: $userWalletId
      poolIdStatus: $poolIdStatus
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
export const getPoolPlayerbyPoolIdWalletIdIndex = /* GraphQL */ `
  query GetPoolPlayerbyPoolIdWalletIdIndex(
    $poolId: String!
    $userWalletId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPoolPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPoolPlayerbyPoolIdWalletIdIndex(
      poolId: $poolId
      userWalletId: $userWalletId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
export const getLotteryPoolAttributesByPoolIdIndex = /* GraphQL */ `
  query GetLotteryPoolAttributesByPoolIdIndex(
    $poolId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLotteryPoolAttributesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getLotteryPoolAttributesByPoolIdIndex(
      poolId: $poolId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        auditRecordDrawId
        isAuditEnabled
        randomOrgUrlForResults
        poolId
        createdAt
        updatedAt
        lotteryPoolAttributesPoolId
      }
      nextToken
    }
  }
`;
export const getPoolByPoolIdIndex = /* GraphQL */ `
  query GetPoolByPoolIdIndex(
    $poolId: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPoolByPoolIdIndex(
      poolId: $poolId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        createdAt
        updatedAt
        poolPoolCreatorId
        poolApiPoolAttributesId
        poolLotteryPoolAttributesId
      }
      nextToken
    }
  }
`;
export const poolSuccessfullBlockEventsProcessedByPositionFieldIndex = /* GraphQL */ `
  query PoolSuccessfullBlockEventsProcessedByPositionFieldIndex(
    $positionField: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelPoolSuccessfullBlockEventsProcessedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    poolSuccessfullBlockEventsProcessedByPositionFieldIndex(
      positionField: $positionField
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        positionField
        lambdaProcessorDecisionCheckForNextBlocknumber
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userWalletByWalletAddressIndex = /* GraphQL */ `
  query UserWalletByWalletAddressIndex(
    $wallet: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userWalletByWalletAddressIndex(
      wallet: $wallet
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wallet
        nickname
        chatlogo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCreatePoolEventLogbyTxId = /* GraphQL */ `
  query GetCreatePoolEventLogbyTxId(
    $txID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCreatePoolEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCreatePoolEventLogbyTxId(
      txID: $txID
      sortDirection: $sortDirection
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
export const getPlayerJoinedPoolEventLogbyTxId = /* GraphQL */ `
  query GetPlayerJoinedPoolEventLogbyTxId(
    $txID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerJoinedPoolEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPlayerJoinedPoolEventLogbyTxId(
      txID: $txID
      sortDirection: $sortDirection
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
export const getPlayerLeftPoolEventLogbyTxId = /* GraphQL */ `
  query GetPlayerLeftPoolEventLogbyTxId(
    $txID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerLeftPoolEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPlayerLeftPoolEventLogbyTxId(
      txID: $txID
      sortDirection: $sortDirection
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
export const getPoolAwaitingExecutionEventLogbyTxId = /* GraphQL */ `
  query GetPoolAwaitingExecutionEventLogbyTxId(
    $txID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPoolAwaitingExecutionEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPoolAwaitingExecutionEventLogbyTxId(
      txID: $txID
      sortDirection: $sortDirection
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
export const getPoolCompletedEventLogbyTxId = /* GraphQL */ `
  query GetPoolCompletedEventLogbyTxId(
    $txID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPoolCompletedEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPoolCompletedEventLogbyTxId(
      txID: $txID
      sortDirection: $sortDirection
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
