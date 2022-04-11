import { Framework } from '@vechain/connex-framework';
import { Driver, SimpleNet, SimpleWallet } from '@vechain/connex-driver';
import { mnemonic, Keystore, HDNode } from 'thor-devkit';
import { WalletInfo, WalletSecretDetails } from '../models/all-models';

export class BlockchainWalletService {

    wallet: SimpleWallet;
    driver: Driver;
    connex: Framework;

    constructor(private walletSecretDetails: WalletSecretDetails) {
        this.wallet = new SimpleWallet();
    }

    private buildKeystore(walletInfo: WalletInfo): Promise<Keystore> {
        console.log('walletInfo is', walletInfo);

        var pkBytes = mnemonic.derivePrivateKey(walletInfo.words.split(' '));
        return Keystore.encrypt(pkBytes, walletInfo.password).then(keystore => {
            return keystore;
        });
    }

    private getKeyStore(): Promise<any> {
        let keyStore: any;

        console.log(`getKeyStore ${process.env.NODE_ENV}`)

        switch (process.env.NODE_ENV) {
            case 'dev':
            case 'development':
                console.log('getting main-network-contract-owner details')
                keyStore = this.buildKeystore(this.walletSecretDetails['development-network']['contract-owner']);
                break;
            case 'test':
                console.log('getting main-network-contract-owner details')
                keyStore = this.buildKeystore(this.walletSecretDetails['test-network']['contract-owner']);
                break;
            case 'prod':
            case 'production':
                console.log('getting main-network-contract-owner details')
                keyStore = this.buildKeystore(this.walletSecretDetails['main-network']['contract-owner']);
                break;

            default: throw Error(`Keystore not found for environment ${process.env.NODE_ENV}`);
        }

        return keyStore;
    }

    async importWalletFromKeystore(): Promise<void> {

        const keyStoreResult = await this.getKeyStore();

        console.log('importWalletFromKeystore', keyStoreResult);

        if (!Keystore.wellFormed(keyStoreResult)) {
            throw Error('No wellFormed wallet keystore found in env: ' + process.env.NODE_ENV);
        }
        else {
            const decryptedResult = await Keystore.decrypt(keyStoreResult, this.getWalletPassword());

            console.log('private key: ' + decryptedResult.toString('hex'));
            this.wallet.import(decryptedResult.toString('hex'));
        }
        return this.loadConnexDriver();
        // return this.getKeyStore().then((result) => {
        //     console.log('importWalletFromKeystore');
        //     console.log(result);
        //     if (!Keystore.wellFormed(result)) {
        //         throw Error('No wellFormed wallet keystore found in env: ' + process.env.NODE_ENV);
        //     }
        //     else {
        //         return Keystore
        //             .decrypt(result, this.getWalletPassword())
        //             .then((result: Buffer) => {
        //                 console.log('private key: ' + result.toString('hex'));
        //                 this.wallet.import(result.toString('hex'));
        //             }).then(() => {
        //                 return this.loadConnexDriver();
        //             });
        //     }
        // });


    }
    private getWalletPassword(): string {
        let password = '';
        switch (process.env.NODE_ENV) {
            case 'dev':
            case 'development':
                //keyStore = require('./../../../wallets/keystore/vechain.dev.owner.account.json');
                password = this.walletSecretDetails['development-network']['contract-owner'].password;
                break;
            case 'test':
                //keyStore = require('./../../../wallets/keystore/vechain.test.owner.account.json');
                password = this.walletSecretDetails['test-network']['contract-owner'].password;
                break;
            case 'prod':
            case 'production':
                //keyStore = require('./../../../wallets/keystore/vechain.prod.owner.account.json');
                password = this.walletSecretDetails['main-network']['contract-owner'].password;
                break;

            default: throw Error(`Wallet Password not found for environment ${process.env.NODE_ENV}`);
        }
        return password;
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