import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
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
    const role = this.token.getRoles();
    const roleData = this.router.data['role'] as string
    if(roleData == role){
      return true;
    }
    if(isAuthentication){
      return true;
    }
    else{
      this.router.navigate(["/auth/login"])
      return false;
    }

  }
  
}
