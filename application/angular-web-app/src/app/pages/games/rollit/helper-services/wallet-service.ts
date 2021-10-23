
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class WalletService {
    
    walletCertificate: Connex.Vendor.CertResponse | undefined;

    walletSubject: Subject<Connex.Vendor.CertResponse | undefined>;

    constructor() {        
        this.walletSubject = new Subject<Connex.Vendor.CertResponse | undefined>();
    }
    
    addNewSigningCertificate(certificateResponse: Connex.Vendor.CertResponse): void {        
        this.walletCertificate = certificateResponse;
        this.walletSubject.next(this.walletCertificate);        
    }
    
    clearWalletCertificate(): void {
        this.walletCertificate = undefined;
        this.walletSubject.next(this.walletCertificate);        
    }

    userIsLoggedInToWallet(): boolean {
        return this.walletCertificate !== undefined;
    }

}
