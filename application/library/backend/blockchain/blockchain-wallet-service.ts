import { Framework } from '@vechain/connex-framework';
import { Driver, SimpleNet, SimpleWallet } from '@vechain/connex-driver';
import { mnemonic, Keystore, HDNode } from 'thor-devkit';

import { WalletInfo, WalletSecretDetails, WalletSecretDetailsNetwork } from '../models/all-models';

export class BlockchainWalletService {
    
    driver: Driver;
    connex: Framework;
        
    constructor(private walletSecretDetails: WalletSecretDetails) {
           
    }


    private loadConnexDriver(): Promise<void> {
        return Driver
            .connect(new SimpleNet(process.env.VECHAIN_API_NODE))
            .then((driver) => {
                this.driver = driver;
                this.connex = new Framework(driver);
                console.log('connex driver loaded');
            });
    }

}