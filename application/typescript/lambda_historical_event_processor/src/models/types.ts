export interface ContractEvent {
    name: string,
    result: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>[]
  }

 export interface ProcessEventsResult {

}