
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class WalletService {

    // connex2
    // walletCertificate: Connex.Vendor.CertResponse | undefined;
    walletCertificate: Connex.Vendor.CertResponse | undefined;

    walletSubject: Subject<Connex.Vendor.CertResponse | undefined>;

    constructor() {
        // this.updateProfileIdentityState();
        this.walletSubject = new Subject<Connex.Vendor.CertResponse | undefined>();
    }

    // connex2
    // addNewSigningCertificate(certificateResponse: Connex.Vendor.CertResponse): void {
    addNewSigningCertificate(certificateResponse: Connex.Vendor.CertResponse): void {
        this.walletCertificate = certificateResponse;
        this.walletSubject.next(this.walletCertificate);

        // this.updateProfileIdentityState();
    }

    // updateProfileIdentityState(): void {
    //     if (this.walletCertificate) {

    //         this.profileTooltipText = 'profile settings';
    //         this.profileIconThemeColoring = 'accent';

    //     }
    //     else {

    //         this.profileTooltipText = 'Login to start using the dApp';
    //         this.profileIconThemeColoring = 'warn';

    //     }
    // }
    clearWalletCertificate(): void {
        this.walletCertificate = undefined;
        this.walletSubject.next(this.walletCertificate);
        // this.updateProfileIdentityState();
    }

    userIsLoggedInToWallet(): boolean {
        return this.walletCertificate !== undefined;
    }

}
