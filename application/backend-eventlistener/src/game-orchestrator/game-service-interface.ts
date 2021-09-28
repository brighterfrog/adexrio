import { RandomDrawRequestResult } from "../random_org/random-org-service";
import { BlockChainService } from "../blockchain/blockchain-service";
import { BlockchainResultGameDetails, SelectGameWinnerResult } from "../models/all-models";

export interface IGameService {
    selectWinner(game: BlockchainResultGameDetails): Promise<SelectGameWinnerResult>;
}