import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  constructor() { }

  storeTokens( {acc,ref}:{acc:string,ref:string} ){
    localStorage.setItem("access-token",acc);
    localStorage.setItem("refresh-token",ref);
  }

  getAccessToken():any{
    return localStorage.getItem("access-token");
  }
 
  public disconnect(){
    localStorage.clear();
    
  }
  
  isLogged():boolean{
    if(this.getRoles() != null){
      return true;
    }
    return false;
  }
  getemail(){
    const jwt = this.getAccessToken();
    if( jwt != null){
      let jwtData = jwt.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)  
      return decodedJwtData.sub;
  }
}

  getRoles(){
    const availableRoles = ["USER","ADMIN"];
    const jwt = this.getAccessToken();
    if( jwt != null){
      let jwtData = jwt.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)     
      let role = decodedJwtData.roles[0];
      if(availableRoles.includes(role)){
        return role;
      }
    }
    return null;
  }
}
