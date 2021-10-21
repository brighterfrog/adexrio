import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CostPerGameService {
    private gameSizeFees: GameSizeFee[];
    constructor() {
        this.gameSizeFees = [
            new GameSizeFee(500, 9.9),
            new GameSizeFee(2000, 8),
            new GameSizeFee(5000, 6),
            new GameSizeFee(10000, 4),
            new GameSizeFee(50000, 3),
            new GameSizeFee(100000, 1.5),
            new GameSizeFee(500000, 1),
        ].sort((a, b) => {
            return ((a.size <= b.size) ? -1 : 1);
        });
    }

    getRandomOrgGameFeeBasedOnPlayers(currentGameSize: number): number {
        let totalFee = 0;
        let previousGameSize: GameSizeFee = null;
        let entriesToProcess = currentGameSize;

        this.gameSizeFees.forEach(element => {

            const delta = Math.min(entriesToProcess, element.size - (previousGameSize?.size ?? 0));
            totalFee += element.costPerMile * (delta / 1000.0);
            entriesToProcess -= delta;
            previousGameSize = new GameSizeFee(element.size, element.costPerMile);

        });

        if (entriesToProcess > 0) {
            totalFee += previousGameSize.costPerMile * (entriesToProcess / 1000.0);
        }

        if (totalFee < 4.95) {
            totalFee = 4.95;
        }
        return Number.parseFloat(totalFee.toFixed(2));

    }
    // any entrants beyond the price points are charged at the last (lowest) rate

    getDeltaFee(currentGameSize: number, previousGameSize: GameSizeFee, currentGameSizeFee: GameSizeFee): number {
        let deltaFee: number;
        if (currentGameSize > currentGameSizeFee.size) {
            deltaFee = (currentGameSize - currentGameSizeFee.size) * previousGameSize.costPerMile / 1000;
        } else {
            deltaFee = 0;
        }
        return deltaFee;
    }
}
export class GameSizeFee {
    size: number;
    costPerMile: number;

    constructor(size: number, costPerMile: number) {
        this.size = size;
        this.costPerMile = costPerMile;
    }
}
