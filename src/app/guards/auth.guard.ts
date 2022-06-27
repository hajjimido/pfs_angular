// import { Injectable } from '@angular/core';

// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   RouterStateSnapshot,
//   UrlTree,
//   Router,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { TokenManagerService } from '../service/token-manager.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   role: any;
//   constructor(
//     private token: TokenManagerService,
//     private router: ActivatedRouteSnapshot,
//     private routerr: Router
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     const isAuthentication = this.token.isLogged();
//     const role = this.token.getRoles();
//   console.log("hhhhhhhhhhhhhhh")
//     const roleData = this.router.data['role'] as String;
//     console.log("hhhhhhhhhhhhhhh"+rol)

//     if (roleData == role) {
//       return true;
//     }
//     if (isAuthentication) {
//       return true;
//     } else {
//       this.routerr.navigate(['/auth/login']);
//       return false;
//     }
//   }
// }
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  NavigationEnd,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenManagerService } from '../service/token-manager.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  currentRoute = '';
  returnValue = true;
  constructor(private router: Router, private token: TokenManagerService) {}

  // canActivate(): boolean {
  //   if (this.loginService.loggedIn()) {
  //     return true;
  //   } else {
  //     this.router.navigateByUrl('/unauthorized');
  //     return false;
  //   }
  // }

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.token.getAccessToken() !== null) {
      const roledata = route.data['role'] as string;
      const role = this.token.getRoles();
      const isAuthentication = this.token.isLogged();
      console.log(roledata + '  ' + role);
      if (roledata != role) {
        this.router.navigate(['/auth/login']);
        return false;
      }
      if (isAuthentication) {
        return true;
      }
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
