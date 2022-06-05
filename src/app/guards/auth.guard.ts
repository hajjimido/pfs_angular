import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenManagerService } from '../service/token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private token:TokenManagerService,
    private router:Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    const isAuthentication = this.token.isLogged();

    if(isAuthentication){
      return true;
    }
    else{
      this.router.navigate(["/auth/login"])
      return false;
    }

  }
  
}
