import { Injectable } from '@angular/core';
import { CostPerGameService } from '../components/create-game-dialog/costpergame-service';
import { GameEntry } from '../rollit_models';

@Injectable({
  providedIn: 'root'
})
export class AuditFixFeeService {

  constructor(private costPerGameService: CostPerGameService) { }

  getPlayerAuditFee(game: GameEntry, vetPrice: number) {
    let randomOrgFee = 10;
    
    let fee = this.costPerGameService.getRandomOrgGameFeeBasedOnPlayers(game.minimumGamePlayers)
    let totalFee = (fee * 1e18).toString(16);

    return fee;  
  }
}
