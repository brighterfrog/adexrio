import { GameOrchestratorService } from "../game-orchestrator/game-orchestrator-service";
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { GameAwaitingLotteryEvent, GameCompletedEvent, GameCreatedEvent, GameEvent } from "../models/all-models";


// import {
//     CreateGamesSummaryInput,
//     GamesSummary,
//     CreateGamesSummaryMutation
// } from "../API";

const RollItVetMultiPlayerGameDefinition = require('./../../../vechain-contracts/build/contracts/RollItVetMultiPlayerGame.json');



export class BlockchainEventListener {

    gameCreatedEvent: Subject<GameEvent>;
    gameAwaitingLotteryEvent: Subject<GameAwaitingLotteryEvent>;
    gameCompletedEvent: Subject<GameCompletedEvent>;

    constructor(private contractInstance: any) {

        this.gameCreatedEvent = new Subject<GameEvent>();
        this.gameAwaitingLotteryEvent = new Subject<GameAwaitingLotteryEvent>();
        this.gameCompletedEvent = new Subject<GameCompletedEvent>();

        this.ListenForGameCreatedEvents();
        this.ListenForGameAwaitingLotteryEvents();
        this.ListenForGameCompletedEvents();
        
    }

    ListenForGameCreatedEvents(): void {
        const gameEvent = this.gameCreatedEvent;

        this.contractInstance.events.GameCreatedEvent(function (error: any, event: any) { error ? console.log(error) : null })
            .on('data', function (event: any) {
                console.log('GameCreatedEvent data');
                console.log(event);


                //TODO: log event to dynamo
                console.log(event.returnValues.gameId);
                console.log(event.returnValues.player);
                console.log(event.returnValues.dateTime);

                //TODO: log event
                gameEvent.next(
                    new GameCreatedEvent(
                        event.returnValues.gameId,
                        event.returnValues.player,
                        event.returnValues.dateTime
                    )
                );
            })
            .on('error', function (event: any) {
                console.log('GameCreatedEvent error');
                console.log(event);
            });
    }

    ListenForGameAwaitingLotteryEvents(): void {
        const gameEvent = this.gameAwaitingLotteryEvent;
        this.contractInstance.events.GameAwaitingLotteryEvent(function (error: any, event: any) { error ? console.log(error) : null })
            .on('data', function (event: any) {
                console.log('GameAwaitingLotteryEvent data');
                console.log(event);

                //TODO: log event to dynamo
                 console.log(event.returnValues.gameId);
                 console.log(event.returnValues.status);
                 console.log(event.returnValues.dateTime);

                //TODO: log event
                gameEvent.next(
                     new GameAwaitingLotteryEvent(
                         event.returnValues.gameId,
                         event.returnValues.status,
                         event.returnValues.dateTime
                     )
                 );

            })
            .on('error', function (event: any) {
                console.log('GameAwaitingLotteryEvent error');
                console.log(event);
            });
    }

    ListenForGameCompletedEvents() {
        const gameEvent = this.gameCompletedEvent;
        this.contractInstance.events.GameCompletedEvent(function (error: any, event: any) { error ? console.log(error) : null })
        .on('data', function (event: any) {
            console.log('GameCompletedEvent data ' + new Date().getTime());
            console.log(event);

            //TODO: log event
            gameEvent.next(
                new GameCompletedEvent(
                    event.returnValues.gameId,
                    event.returnValues.player,
                    event.returnValues.dateTime,
                    event.returnValues.winningPayout,
                    event.returnValues.transactionId,
                    event.returnValues.auditRecordDrawId
                )
            );
        })
        .on('error', function (event: any) {
            console.log('GameCompletedEvent error');
            console.log(event);
        });
    }
}

