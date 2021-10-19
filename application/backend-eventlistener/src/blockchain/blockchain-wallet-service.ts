import { Framework } from '@vechain/connex-framework';
import { Driver, SimpleNet, SimpleWallet } from '@vechain/connex-driver';
import { mnemonic, Keystore, HDNode } from 'thor-devkit';
import { SecretsManager } from 'src/aws-services/secrets-manager';
import { WalletInfo, WalletSecretDetails, WalletSecretDetailsNetwork } from 'src/models/all-models';

export class BlockchainWalletService {

    wallet: SimpleWallet;
    driver: Driver;
    connex: Framework;
        
    constructor(private walletSecretDetails: WalletSecretDetails) {
        this.wallet = new SimpleWallet();        
    }

    private buildKeystore(walletInfo: WalletInfo): Promise<Keystore> {
        var pkBytes = mnemonic.derivePrivateKey(walletInfo.words.split(' '));
        return Keystore.encrypt(pkBytes, walletInfo.password).then( keystore => {           
          return keystore;        
        });
    }

    private getKeyStore(): Promise<any> {
        let keyStore: any;
        
        switch (process.env.NODE_ENV) {
            case 'dev':               
                keyStore = this.buildKeystore(this.walletSecretDetails['development-network']['contract-owner']);
                break;
            case 'test':                
                keyStore = this.buildKeystore(this.walletSecretDetails['test-network']['contract-owner']);
                break;
            case 'prod':                
                keyStore = this.buildKeystore(this.walletSecretDetails['main-network']['contract-owner']);
                break;

            default: throw Error(`Keystore not found for environment ${process.env.NODE_ENV}`);
        }

        return keyStore;
    }
    importWalletFromKeystore(): Promise<void> {

        return this.getKeyStore().then((result) => {
            console.log('importWalletFromKeystore');
            console.log(result);
            if (!Keystore.wellFormed(result)) {
                throw Error('No wellFormed wallet keystore found in env: ' + process.env.NODE_ENV);
            }
            else {
                return Keystore
                    .decrypt(result, this.getWalletPassword())
                    .then((result: Buffer) => {
                        console.log('private key: ' + result.toString('hex'));
                        this.wallet.import(result.toString('hex'));
                    }).then(() => {
                        return this.loadConnexDriver();
                    });
            }
        });

        
    }
    getWalletPassword(): string {
        let password = '';       
        switch (process.env.NODE_ENV) {
            case 'dev':
                //keyStore = require('./../../../wallets/keystore/vechain.dev.owner.account.json');
                password = this.walletSecretDetails['development-network']['contract-owner'].password;
                break;
            case 'test':
                //keyStore = require('./../../../wallets/keystore/vechain.test.owner.account.json');
                password = this.walletSecretDetails['test-network']['contract-owner'].password;
                break;
            case 'prod':
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