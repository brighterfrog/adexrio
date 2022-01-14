import { EVENTS } from "../../../library/src/backend/blockchain/constants";
import { ProcessEventsResult, ContractRawEvent, DynamodbEventProcessingList } from "../models/types";

export class DynamodbEventProcessorService {

    constructor() {

    }

    async processContractEvents(contractEvents: ContractRawEvent[]): Promise<ProcessEventsResult> {

        const eventOrderToProcess: DynamodbEventProcessingList = {
            steps: [
                {
                    sequential: [EVENTS.GameCreatedEvent, EVENTS.PlayerJoinedGameEvent, EVENTS.PlayerLeftGameEvent, EVENTS.GameCompletedEvent],
                    parallel: [EVENTS.GameAwaitingLotteryEvent]
                }
            ]
        };

        await this.processOrderList(eventOrderToProcess);

        return null;
    }

    private async processOrderList(list: DynamodbEventProcessingList): Promise<void> {

        // Check Db if event exists
        // If NOT - write to table
        // Streaming trigger update Pool Record table

        let allStepsPromiseArray: Promise<void>[] = [];

        list.steps.forEach(async (step) => {

            //Parallel items for this step
            allStepsPromiseArray.concat(
                this.handleParallelSteps(step.parallel)
            );

            //TODO
            //sequential items for this step
            //await this.handleSequentialSteps(step.sequential);

        });

        //TODO add in when completed with parallel
        //await Promise.all(allStepsPromiseArray);

    }

    private async handleSequentialSteps(sequential: EVENTS[]): Promise<void> {
      
        return null;
    }

    private async handleParallelSteps(parallel: EVENTS[]): Promise<void> {

        const stepParallelPromiseArray = parallel.map((eventItem) => {
            return this.processParallelSteps(eventItem);
        });

        //return stepParallelPromiseArray;
        return null;
    }

    private async processParallelSteps(eventItem: EVENTS): Promise<void> {

    }


}
