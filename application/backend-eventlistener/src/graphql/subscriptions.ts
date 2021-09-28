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
export const onCreateGamesSummary = /* GraphQL */ `
  subscription OnCreateGamesSummary {
    onCreateGamesSummary {
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
export const onUpdateGamesSummary = /* GraphQL */ `
  subscription OnUpdateGamesSummary {
    onUpdateGamesSummary {
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
export const onDeleteGamesSummary = /* GraphQL */ `
  subscription OnDeleteGamesSummary {
    onDeleteGamesSummary {
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
