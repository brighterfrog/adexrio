import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import '@vechain/connex';

@Injectable({
  providedIn: 'root'
})
export class ConnexGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserAuthorized();
  }

  private isUserAuthorized(): boolean {
    let authorized = false;
    if (environment.enforceSyncGuard) {
      // const connex = window.connex as Connex;
      // authorized = this.userIsConnectedWithSync(connex, authorized);
      authorized = true;
    }
    else {
      authorized = true;
    }
    if (environment.showDebug) {
      console.log(authorized);
    }
    return authorized;
  }

  private userIsConnectedWithSync(connex: Connex, authorized: boolean): boolean {
    if (!connex) {
      // location.href = environment.veChain.connexNode + encodeURIComponent(location.href);
      authorized = false;
    }
    else {
      authorized = true;
    }
    return authorized;
  }
}
