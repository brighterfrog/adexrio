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
