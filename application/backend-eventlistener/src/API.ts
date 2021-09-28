/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateFeedbackInput = {
  id?: string | null;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
};

export enum feedbackType {
  general = "general",
  enhancement = "enhancement",
  bug = "bug",
  interest = "interest"
}

export enum feedbackStatus {
  pending = "pending",
  reviewed = "reviewed",
  projectItem = "projectItem"
}

export type ModelFeedbackConditionInput = {
  comment?: ModelStringInput | null;
  commentType?: ModelfeedbackTypeInput | null;
  status?: ModelfeedbackStatusInput | null;
  wallet?: ModelStringInput | null;
  and?: Array<ModelFeedbackConditionInput | null> | null;
  or?: Array<ModelFeedbackConditionInput | null> | null;
  not?: ModelFeedbackConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelfeedbackTypeInput = {
  eq?: feedbackType | null;
  ne?: feedbackType | null;
};

export type ModelfeedbackStatusInput = {
  eq?: feedbackStatus | null;
  ne?: feedbackStatus | null;
};

export type Feedback = {
  __typename: "Feedback";
  id?: string;
  comment?: string;
  commentType?: feedbackType;
  status?: feedbackStatus;
  wallet?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateFeedbackInput = {
  comment?: string | null;
  commentType?: feedbackType | null;
  status?: feedbackStatus | null;
  wallet?: string | null;
};

export type DeleteFeedbackInput = {
  id?: string | null;
};

export type CreateMessageInput = {
  id?: string | null;
  message: string;
  wallet: string;
  createdAt?: string | null;
};

export type ModelMessageConditionInput = {
  message?: ModelStringInput | null;
  wallet?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type Message = {
  __typename: "Message";
  id?: string;
  message?: string;
  wallet?: string;
  createdAt?: string | null;
  updatedAt?: string;
};

export type UpdateMessageInput = {
  id: string;
  message?: string | null;
  wallet?: string | null;
  createdAt?: string | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type CreateGamesSummaryInput = {
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
};

export type ModelGamesSummaryConditionInput = {
  totalCompletedGames?: ModelIntInput | null;
  totalUniquePlayers?: ModelIntInput | null;
  totalPayouts?: ModelFloatInput | null;
  highestPayout?: ModelFloatInput | null;
  and?: Array<ModelGamesSummaryConditionInput | null> | null;
  or?: Array<ModelGamesSummaryConditionInput | null> | null;
  not?: ModelGamesSummaryConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type GamesSummary = {
  __typename: "GamesSummary";
  id?: number;
  totalCompletedGames?: number;
  totalUniquePlayers?: number;
  totalPayouts?: number;
  highestPayout?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateGamesSummaryInput = {
  id: number;
  totalCompletedGames?: number | null;
  totalUniquePlayers?: number | null;
  totalPayouts?: number | null;
  highestPayout?: number | null;
};

export type DeleteGamesSummaryInput = {
  id?: string | null;
};

export type CreateErrorLogInput = {
  id?: string | null;
  createdAt?: string | null;
  stackTrace?: string | null;
};

export type ModelErrorLogConditionInput = {
  createdAt?: ModelStringInput | null;
  stackTrace?: ModelStringInput | null;
  and?: Array<ModelErrorLogConditionInput | null> | null;
  or?: Array<ModelErrorLogConditionInput | null> | null;
  not?: ModelErrorLogConditionInput | null;
};

export type ErrorLog = {
  __typename: "ErrorLog";
  id?: string;
  createdAt?: string | null;
  stackTrace?: string | null;
  updatedAt?: string;
};

export type UpdateErrorLogInput = {
  id: string;
  createdAt?: string | null;
  stackTrace?: string | null;
};

export type DeleteErrorLogInput = {
  id?: string | null;
};

export type ModelFeedbackFilterInput = {
  comment?: ModelStringInput | null;
  commentType?: ModelfeedbackTypeInput | null;
  status?: ModelfeedbackStatusInput | null;
  wallet?: ModelStringInput | null;
  and?: Array<ModelFeedbackFilterInput | null> | null;
  or?: Array<ModelFeedbackFilterInput | null> | null;
  not?: ModelFeedbackFilterInput | null;
};

export type ModelFeedbackConnection = {
  __typename: "ModelFeedbackConnection";
  items?: Array<Feedback | null> | null;
  nextToken?: string | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  message?: ModelStringInput | null;
  wallet?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items?: Array<Message | null> | null;
  nextToken?: string | null;
};

export type ModelGamesSummaryFilterInput = {
  id?: ModelIntInput | null;
  totalCompletedGames?: ModelIntInput | null;
  totalUniquePlayers?: ModelIntInput | null;
  totalPayouts?: ModelFloatInput | null;
  highestPayout?: ModelFloatInput | null;
  and?: Array<ModelGamesSummaryFilterInput | null> | null;
  or?: Array<ModelGamesSummaryFilterInput | null> | null;
  not?: ModelGamesSummaryFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelGamesSummaryConnection = {
  __typename: "ModelGamesSummaryConnection";
  items?: Array<GamesSummary | null> | null;
  nextToken?: string | null;
};

export type ModelErrorLogFilterInput = {
  id?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  stackTrace?: ModelStringInput | null;
  and?: Array<ModelErrorLogFilterInput | null> | null;
  or?: Array<ModelErrorLogFilterInput | null> | null;
  not?: ModelErrorLogFilterInput | null;
};

export type ModelErrorLogConnection = {
  __typename: "ModelErrorLogConnection";
  items?: Array<ErrorLog | null> | null;
  nextToken?: string | null;
};

export type CreateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt?: string | null;
  updatedAt: string;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt?: string | null;
  updatedAt: string;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt?: string | null;
  updatedAt: string;
};

export type CreateGamesSummaryMutation = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGamesSummaryMutation = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteGamesSummaryMutation = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateErrorLogMutation = {
  __typename: "ErrorLog";
  id: string;
  createdAt?: string | null;
  stackTrace?: string | null;
  updatedAt: string;
};

export type UpdateErrorLogMutation = {
  __typename: "ErrorLog";
  id: string;
  createdAt?: string | null;
  stackTrace?: string | null;
  updatedAt: string;
};

export type DeleteErrorLogMutation = {
  __typename: "ErrorLog";
  id: string;
  createdAt?: string | null;
  stackTrace?: string | null;
  updatedAt: string;
};

export type GetFeedbackQuery = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type ListFeedbacksQuery = {
  __typename: "ModelFeedbackConnection";
  items?: Array<{
    __typename: "Feedback";
    id: string;
    comment: string;
    commentType: feedbackType;
    status: feedbackStatus;
    wallet: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt?: string | null;
  updatedAt: string;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items?: Array<{
    __typename: "Message";
    id: string;
    message: string;
    wallet: string;
    createdAt?: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetGamesSummaryQuery = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type ListGamesSummarysQuery = {
  __typename: "ModelGamesSummaryConnection";
  items?: Array<{
    __typename: "GamesSummary";
    id: number;
    totalCompletedGames: number;
    totalUniquePlayers: number;
    totalPayouts: number;
    highestPayout: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetErrorLogQuery = {
  __typename: "ErrorLog";
  id: string;
  createdAt?: string | null;
  stackTrace?: string | null;
  updatedAt: string;
};

export type ListErrorLogsQuery = {
  __typename: "ModelErrorLogConnection";
  items?: Array<{
    __typename: "ErrorLog";
    id: string;
    createdAt?: string | null;
    stackTrace?: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  comment: string;
  commentType: feedbackType;
  status: feedbackStatus;
  wallet: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt?: string | null;
  updatedAt: string;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt?: string | null;
  updatedAt: string;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  message: string;
  wallet: string;
  createdAt?: string | null;
  updatedAt: string;
};

export type OnCreateGamesSummarySubscription = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateGamesSummarySubscription = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteGamesSummarySubscription = {
  __typename: "GamesSummary";
  id: number;
  totalCompletedGames: number;
  totalUniquePlayers: number;
  totalPayouts: number;
  highestPayout: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateErrorLogSubscription = {
  __typename: "ErrorLog";
  id: string;
  createdAt?: string | null;
  stackTrace?: string | null;
  updatedAt: string;
};

export type OnUpdateErrorLogSubscription = {
  __typename: "ErrorLog";
  id: string;
  createdAt?: string | null;
  stackTrace?: string | null;
  updatedAt: string;
};

export type OnDeleteErrorLogSubscription = {
  __typename: "ErrorLog";
  id: string;
  createdAt?: string | null;
  stackTrace?: string | null;
  updatedAt: string;
};

export class APIService {
  async CreateFeedback(
    input: CreateFeedbackInput,
    condition?: ModelFeedbackConditionInput
  ): Promise<CreateFeedbackMutation> {
    const statement = `mutation CreateFeedback($input: CreateFeedbackInput!, $condition: ModelFeedbackConditionInput) {
        createFeedback(input: $input, condition: $condition) {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFeedbackMutation>response.data.createFeedback;
  }
  async UpdateFeedback(
    input: UpdateFeedbackInput,
    condition?: ModelFeedbackConditionInput
  ): Promise<UpdateFeedbackMutation> {
    const statement = `mutation UpdateFeedback($input: UpdateFeedbackInput!, $condition: ModelFeedbackConditionInput) {
        updateFeedback(input: $input, condition: $condition) {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFeedbackMutation>response.data.updateFeedback;
  }
  async DeleteFeedback(
    input: DeleteFeedbackInput,
    condition?: ModelFeedbackConditionInput
  ): Promise<DeleteFeedbackMutation> {
    const statement = `mutation DeleteFeedback($input: DeleteFeedbackInput!, $condition: ModelFeedbackConditionInput) {
        deleteFeedback(input: $input, condition: $condition) {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFeedbackMutation>response.data.deleteFeedback;
  }
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
        updateMessage(input: $input, condition: $condition) {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
        deleteMessage(input: $input, condition: $condition) {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async CreateGamesSummary(
    input: CreateGamesSummaryInput,
    condition?: ModelGamesSummaryConditionInput
  ): Promise<CreateGamesSummaryMutation> {
    const statement = `mutation CreateGamesSummary($input: CreateGamesSummaryInput!, $condition: ModelGamesSummaryConditionInput) {
        createGamesSummary(input: $input, condition: $condition) {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGamesSummaryMutation>response.data.createGamesSummary;
  }
  async UpdateGamesSummary(
    input: UpdateGamesSummaryInput,
    condition?: ModelGamesSummaryConditionInput
  ): Promise<UpdateGamesSummaryMutation> {
    const statement = `mutation UpdateGamesSummary($input: UpdateGamesSummaryInput!, $condition: ModelGamesSummaryConditionInput) {
        updateGamesSummary(input: $input, condition: $condition) {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGamesSummaryMutation>response.data.updateGamesSummary;
  }
  async DeleteGamesSummary(
    input: DeleteGamesSummaryInput,
    condition?: ModelGamesSummaryConditionInput
  ): Promise<DeleteGamesSummaryMutation> {
    const statement = `mutation DeleteGamesSummary($input: DeleteGamesSummaryInput!, $condition: ModelGamesSummaryConditionInput) {
        deleteGamesSummary(input: $input, condition: $condition) {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGamesSummaryMutation>response.data.deleteGamesSummary;
  }
  async CreateErrorLog(
    input: CreateErrorLogInput,
    condition?: ModelErrorLogConditionInput
  ): Promise<CreateErrorLogMutation> {
    const statement = `mutation CreateErrorLog($input: CreateErrorLogInput!, $condition: ModelErrorLogConditionInput) {
        createErrorLog(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateErrorLogMutation>response.data.createErrorLog;
  }
  async UpdateErrorLog(
    input: UpdateErrorLogInput,
    condition?: ModelErrorLogConditionInput
  ): Promise<UpdateErrorLogMutation> {
    const statement = `mutation UpdateErrorLog($input: UpdateErrorLogInput!, $condition: ModelErrorLogConditionInput) {
        updateErrorLog(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateErrorLogMutation>response.data.updateErrorLog;
  }
  async DeleteErrorLog(
    input: DeleteErrorLogInput,
    condition?: ModelErrorLogConditionInput
  ): Promise<DeleteErrorLogMutation> {
    const statement = `mutation DeleteErrorLog($input: DeleteErrorLogInput!, $condition: ModelErrorLogConditionInput) {
        deleteErrorLog(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteErrorLogMutation>response.data.deleteErrorLog;
  }
  async GetFeedback(id: string): Promise<GetFeedbackQuery> {
    const statement = `query GetFeedback($id: ID!) {
        getFeedback(id: $id) {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFeedbackQuery>response.data.getFeedback;
  }
  async ListFeedbacks(
    filter?: ModelFeedbackFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFeedbacksQuery> {
    const statement = `query ListFeedbacks($filter: ModelFeedbackFilterInput, $limit: Int, $nextToken: String) {
        listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFeedbacksQuery>response.data.listFeedbacks;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            message
            wallet
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagesQuery>response.data.listMessages;
  }
  async GetGamesSummary(id: number): Promise<GetGamesSummaryQuery> {
    const statement = `query GetGamesSummary($id: Int!) {
        getGamesSummary(id: $id) {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGamesSummaryQuery>response.data.getGamesSummary;
  }
  async ListGamesSummarys(
    id?: number,
    filter?: ModelGamesSummaryFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListGamesSummarysQuery> {
    const statement = `query ListGamesSummarys($id: Int, $filter: ModelGamesSummaryFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listGamesSummarys(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGamesSummarysQuery>response.data.listGamesSummarys;
  }
  async GetErrorLog(id: string): Promise<GetErrorLogQuery> {
    const statement = `query GetErrorLog($id: ID!) {
        getErrorLog(id: $id) {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetErrorLogQuery>response.data.getErrorLog;
  }
  async ListErrorLogs(
    filter?: ModelErrorLogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListErrorLogsQuery> {
    const statement = `query ListErrorLogs($filter: ModelErrorLogFilterInput, $limit: Int, $nextToken: String) {
        listErrorLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdAt
            stackTrace
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListErrorLogsQuery>response.data.listErrorLogs;
  }
  OnCreateFeedbackListener: Observable<
    SubscriptionResponse<OnCreateFeedbackSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFeedback {
        onCreateFeedback {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateFeedbackSubscription>>;

  OnUpdateFeedbackListener: Observable<
    SubscriptionResponse<OnUpdateFeedbackSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFeedback {
        onUpdateFeedback {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateFeedbackSubscription>>;

  OnDeleteFeedbackListener: Observable<
    SubscriptionResponse<OnDeleteFeedbackSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFeedback {
        onDeleteFeedback {
          __typename
          id
          comment
          commentType
          status
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteFeedbackSubscription>>;

  OnCreateMessageListener: Observable<
    SubscriptionResponse<OnCreateMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateMessageSubscription>>;

  OnUpdateMessageListener: Observable<
    SubscriptionResponse<OnUpdateMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessage {
        onUpdateMessage {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateMessageSubscription>>;

  OnDeleteMessageListener: Observable<
    SubscriptionResponse<OnDeleteMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessage {
        onDeleteMessage {
          __typename
          id
          message
          wallet
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteMessageSubscription>>;

  OnCreateGamesSummaryListener: Observable<
    SubscriptionResponse<OnCreateGamesSummarySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateGamesSummary {
        onCreateGamesSummary {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateGamesSummarySubscription>>;

  OnUpdateGamesSummaryListener: Observable<
    SubscriptionResponse<OnUpdateGamesSummarySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateGamesSummary {
        onUpdateGamesSummary {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateGamesSummarySubscription>>;

  OnDeleteGamesSummaryListener: Observable<
    SubscriptionResponse<OnDeleteGamesSummarySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteGamesSummary {
        onDeleteGamesSummary {
          __typename
          id
          totalCompletedGames
          totalUniquePlayers
          totalPayouts
          highestPayout
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteGamesSummarySubscription>>;

  OnCreateErrorLogListener: Observable<
    SubscriptionResponse<OnCreateErrorLogSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateErrorLog {
        onCreateErrorLog {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateErrorLogSubscription>>;

  OnUpdateErrorLogListener: Observable<
    SubscriptionResponse<OnUpdateErrorLogSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateErrorLog {
        onUpdateErrorLog {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateErrorLogSubscription>>;

  OnDeleteErrorLogListener: Observable<
    SubscriptionResponse<OnDeleteErrorLogSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteErrorLog {
        onDeleteErrorLog {
          __typename
          id
          createdAt
          stackTrace
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteErrorLogSubscription>>;
}
