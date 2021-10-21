/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFeedback = /* GraphQL */ `
  mutation CreateFeedback(
    $input: CreateFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    createFeedback(input: $input, condition: $condition) {
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
export const updateFeedback = /* GraphQL */ `
  mutation UpdateFeedback(
    $input: UpdateFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    updateFeedback(input: $input, condition: $condition) {
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
export const deleteFeedback = /* GraphQL */ `
  mutation DeleteFeedback(
    $input: DeleteFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    deleteFeedback(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      message
      wallet
      createdAt
      updatedAt
    }
  }
`;
export const createGamesSummary = /* GraphQL */ `
  mutation CreateGamesSummary(
    $input: CreateGamesSummaryInput!
    $condition: ModelGamesSummaryConditionInput
  ) {
    createGamesSummary(input: $input, condition: $condition) {
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
export const updateGamesSummary = /* GraphQL */ `
  mutation UpdateGamesSummary(
    $input: UpdateGamesSummaryInput!
    $condition: ModelGamesSummaryConditionInput
  ) {
    updateGamesSummary(input: $input, condition: $condition) {
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
export const deleteGamesSummary = /* GraphQL */ `
  mutation DeleteGamesSummary(
    $input: DeleteGamesSummaryInput!
    $condition: ModelGamesSummaryConditionInput
  ) {
    deleteGamesSummary(input: $input, condition: $condition) {
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
export const createErrorLog = /* GraphQL */ `
  mutation CreateErrorLog(
    $input: CreateErrorLogInput!
    $condition: ModelErrorLogConditionInput
  ) {
    createErrorLog(input: $input, condition: $condition) {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
export const updateErrorLog = /* GraphQL */ `
  mutation UpdateErrorLog(
    $input: UpdateErrorLogInput!
    $condition: ModelErrorLogConditionInput
  ) {
    updateErrorLog(input: $input, condition: $condition) {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
export const deleteErrorLog = /* GraphQL */ `
  mutation DeleteErrorLog(
    $input: DeleteErrorLogInput!
    $condition: ModelErrorLogConditionInput
  ) {
    deleteErrorLog(input: $input, condition: $condition) {
      id
      createdAt
      stackTrace
      updatedAt
    }
  }
`;
