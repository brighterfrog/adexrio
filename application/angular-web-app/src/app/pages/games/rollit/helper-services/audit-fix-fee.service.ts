import { Injectable } from '@angular/core';
import { CostPerGameService } from '../components/create-game-dialog/costpergame-service';
import { GameEntry } from '../rollit_models';

@Injectable({
  providedIn: 'root'
})
export class AuditFixFeeService {

  constructor(private costPerGameService: CostPerGameService) { }

  getPlayerAuditFeeInVet(minimumGamePlayers: number, vetPrice: number) {
    let randomOrgDollarFee = 10;        
    let vetQuantityForFee = randomOrgDollarFee / vetPrice;        
    let singlePlayerVetFee = Math.round(vetQuantityForFee / minimumGamePlayers);
    
    return singlePlayerVetFee;  
  }
}
