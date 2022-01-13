import { ProcessEventsResult, ContractEvent } from "../models/types";

export class DynamodbEventProcessorService {

    constructor() {

    }

    async processEvents(contractEvents: ContractEvent): Promise<ProcessEventsResult> { 

        //TODO:
        /*

        Iterate event types by block: orderByBlockSequence
       
        process Event Types by precedence & block sequence

        Check Db if event exists
            If NOT - write to table
            Streaming trigger update Pool Record table

                
        */



        return null;
     }

     private transformEvent(): void {
         
     }

     private orderByBlockSequence(): void {

     }
}
