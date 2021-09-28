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
  query GetGamesSummary($id: ID!) {
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
    $filter: ModelGamesSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGamesSummarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
