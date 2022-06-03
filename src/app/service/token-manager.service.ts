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
   return localStorage.clear();
  }
  
  isLogged():boolean{
   
    if(this.getAccessToken()==null){
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

    const jwt = this.getAccessToken();
    if( jwt != null){
      let jwtData = jwt.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)  
     
      
      return decodedJwtData.roles[0];

    }
  }
}
