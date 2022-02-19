interface IEventLogProcessor {
    handleEventRecord(eventRecord: any): Promise<any>;
}