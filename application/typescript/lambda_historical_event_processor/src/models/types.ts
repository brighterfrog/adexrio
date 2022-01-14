import { EVENTS } from "../../../library/src/backend/blockchain/constants"

export interface ContractRawEvent {
    name: string,
    result: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>[]
  }

 export interface ProcessEventsResult {

}

export interface MetaDetails {
  blockID: string;
  blockNumber: number;
  blockTimestamp: number;
  txID: string;
  txOrigin: string;
  clauseIndex: number;
}

export interface BlockchainEventResult {
  address: string;
  topics: string[];
  data: string;
  meta: MetaDetails,
  decoded: DecodedGameCreatedEvent
}

export interface DynamodbEventProcessingStep {
  sequential: EVENTS[];
  parallel: EVENTS[];
}

export interface DynamodbEventProcessingList {
  steps: DynamodbEventProcessingStep[]
}

/* not used */
type DecodedGameCreatedEvent = {
  gameId: string;
  player: string;
  dateTime: string;
}
type DecodedPlayerJoinedGameEvent = {
  gameId: string;
  player: string;
  dateTime: string;
}
type DecodedPlayerLeftGameEvent = {
  gameId: string;
  player: string;
  dateTime: string;
}
type DecodedGameAwaitingLotteryEvent = {
  gameId: string;
  status: string;
  dateTime: string;
}
type DecodedGameCompletedEvent = {
  gameId: string;
  player: string;
  dateTime: string;
  winningPayout: string;
  transactionId: string;
  auditRecordDrawId: string;
}
/* not used */

