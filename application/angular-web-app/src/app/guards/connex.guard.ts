import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import '@vechain/connex';
import { WalletService } from '../pages/games/rollit/helper-services/wallet-service';
import { ShellService } from '../services/shell.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexGuard implements CanActivate {

  constructor (
    private _router: Router,  
    private _shellService: ShellService,   
    private walletService: WalletService)
    {

    }

  canActivate(    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthorized = this.isUserAuthorized();
    if (!isAuthorized) {      
      this._shellService.openUserWalletProfile()
    }
    return isAuthorized;
  }

  private isUserAuthorized(): boolean {
    let authorized = false;
    if (environment.enforceSyncGuard) {
      return this.walletService.userIsLoggedInToWallet();
    }
    else {
      authorized = true;
    }
    if (environment.showDebug) {
      console.log(authorized);
    }
    return authorized;
  } 
}
