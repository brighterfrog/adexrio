import { Framework } from '@vechain/connex-framework';
import { Driver, SimpleNet } from '@vechain/connex-driver';

export class BlockchainSimpleTickerService{

    driver: Driver;
    connex: Framework;
        
    constructor() {
      
    }

    loadConnexDriver(): Promise<void> {
        return Driver
            .connect(new SimpleNet(process.env.VECHAIN_API_NODE))
            .then((driver) => {
                this.driver = driver;
                this.connex = new Framework(driver);
                console.log('connex driver loaded');
            });
    }

    getTicker(): Connex.Thor.Ticker {              
        return this.connex.thor.ticker();
    }

}