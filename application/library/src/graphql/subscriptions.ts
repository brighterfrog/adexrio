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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateApiPoolAttributes = /* GraphQL */ `
  subscription OnCreateApiPoolAttributes {
    onCreateApiPoolAttributes {
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
export const onUpdateApiPoolAttributes = /* GraphQL */ `
  subscription OnUpdateApiPoolAttributes {
    onUpdateApiPoolAttributes {
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
export const onDeleteApiPoolAttributes = /* GraphQL */ `
  subscription OnDeleteApiPoolAttributes {
    onDeleteApiPoolAttributes {
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
export const onCreatePool = /* GraphQL */ `
  subscription OnCreatePool {
    onCreatePool {
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
export const onUpdatePool = /* GraphQL */ `
  subscription OnUpdatePool {
    onUpdatePool {
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
export const onDeletePool = /* GraphQL */ `
  subscription OnDeletePool {
    onDeletePool {
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
export const onCreatePoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  subscription OnCreatePoolSuccessfullBlockEventsProcessed {
    onCreatePoolSuccessfullBlockEventsProcessed {
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
export const onUpdatePoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  subscription OnUpdatePoolSuccessfullBlockEventsProcessed {
    onUpdatePoolSuccessfullBlockEventsProcessed {
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
export const onDeletePoolSuccessfullBlockEventsProcessed = /* GraphQL */ `
  subscription OnDeletePoolSuccessfullBlockEventsProcessed {
    onDeletePoolSuccessfullBlockEventsProcessed {
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
export const onUpdateUserWallet = /* GraphQL */ `
  subscription OnUpdateUserWallet {
    onUpdateUserWallet {
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
export const onDeleteUserWallet = /* GraphQL */ `
  subscription OnDeleteUserWallet {
    onDeleteUserWallet {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
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
