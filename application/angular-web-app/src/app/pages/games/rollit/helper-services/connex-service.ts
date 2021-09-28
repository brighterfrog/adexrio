import Connex from '@vechain/connex';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ThrowStmt } from '@angular/compiler';

// CAN BE DELETED WHEN SYNC2 IS FULLY IMPLEMENTED
declare global {
    interface Window {
        connex: any | undefined;
    }
}
// CAN BE DELETED WHEN SYNC2 IS FULLY IMPLEMENTED

@Injectable({
    providedIn: 'root'
})
export class ConnexService {

    constructor() {
    }

    build(): Connex {
        if (environment.local) {
            // return window.connex as Connex;
              return new Connex({
                  node: environment.veChain.node,
                  // tslint:disable-next-line:quotemark
                  network: environment.veChain.network as "main" | "test" | Connex.Thor.Block
              });
            // return new Connex(environment.veChain);

        }
        else if (environment.test) {
            // return window.connex as Connex;
              return new Connex({
                  node: environment.veChain.node,
                  // tslint:disable-next-line:quotemark
                  network: 'test' as "main" | "test" | Connex.Thor.Block
              });
            // return new Connex(environment.veChain);
        }
        else {
            // return window.connex as Connex;
             return new Connex({
                 node: environment.veChain.node,
                 // tslint:disable-next-line:quotemark
                 network: 'main' as "main" | "test" | Connex.Thor.Block
             });
            // return new Connex(environment.veChain);
        }
    }
}
