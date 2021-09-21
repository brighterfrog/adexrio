import { Framework } from '@vechain/connex-framework';
import { Driver, SimpleNet, SimpleWallet } from '@vechain/connex-driver';
import { mnemonic, Keystore, HDNode } from 'thor-devkit';

export class BlockchainWalletService {

    wallet: SimpleWallet;
    driver: Driver;
    connex: Framework;

    walletPassword: string;

    constructor() {
        this.wallet = new SimpleWallet();
        this.walletPassword = 'SFdxRw?5])DAbF8y(MQT';
    }

    private getKeyStore(): any {
        let keyStore: any;
        switch (process.env.NODE_ENV) {
            case 'dev':
                keyStore = require('./../../../wallets/keystore/vechain.dev.owner.account.json');
                break;
            case 'test':
                keyStore = require('./../../../wallets/keystore/vechain.test.owner.account.json');
                break;
            case 'prod':
                keyStore = require('./../../../wallets/keystore/vechain.prod.owner.account.json');
                break;

            default: throw Error(`Keystore not found for environment ${process.env.NODE_ENV}`);
        }

        return keyStore;
    }
    importWalletFromKeystore(): Promise<void> {

        const keyStore = this.getKeyStore();

        if (!Keystore.wellFormed(keyStore)) {
            throw Error('No wellFormed wallet keystore found in env: ' + process.env.NODE_ENV);
        }
        else {
            return Keystore
                .decrypt(keyStore, this.getWalletPassword())
                .then((result: Buffer) => {
                    console.log('private key: ' + result.toString('hex'));
                    this.wallet.import(result.toString('hex'));
                }).then(() => {
                    return this.loadConnexDriver();
                });
        }
    }
    getWalletPassword(): string {
        return process.env.NODE_ENV === 'dev' ? 'password' : this.walletPassword;
    }

    private loadConnexDriver(): Promise<void> {
        return Driver
            .connect(new SimpleNet(process.env.VECHAIN_API_NODE), this.wallet)
            .then((driver) => {
                this.driver = driver;
                this.connex = new Framework(driver);
                console.log('connex driver loaded');
            });
    }

}