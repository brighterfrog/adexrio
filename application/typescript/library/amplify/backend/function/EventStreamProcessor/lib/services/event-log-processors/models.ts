interface IEventLogProcessor {
    handleEventRecord(eventRecord: any): Promise<any>;
}

const GAME_STATUS_COMPLETE = "0";
const GAME_STATUS_AWAITING_GAME_CRITERIA_MET = "1";
const GAME_STATUS_CRITERIA_MET_AWAITING_LOTTERY = "2";