import { HttpClient } from '@angular/common/http';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponce } from '../Model/loginResponse';
import { TokenManagerService } from './token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basic_url:string = environment.host;

  constructor(private http :HttpClient,
     private toast: NgToastService,
     private router:Router,
     private tokenManager:TokenManagerService) { }

  public register(myForm : NgForm){
      const {
        fullName,
        email,
        phone,
        branch,
        password
      } = myForm.value;
      const data = {
        fullName,
        phone,
        branch,
        auth:{
          email,
          password
        }
      }
      
      this.http.post(`${this.basic_url}/register`,data,{responseType:"text"}).subscribe(
        (result)=>{
          const toast = this.toast.success(
            {detail: result.toString(),
            duration:2000});
          setTimeout(()=>{
            this.router.navigate(["auth/login"]);
          },2000)
        },
        (errors)=>{
          this.toast.error(
            {detail: errors.error,
            duration:2000});
        },
        ()=>{
        }
      ) 
  }

  public login(myForm:NgForm,authentication_type:string){
    const {email,password} = myForm.value;
    const data = {email, password};

    this.http.post<LoginResponce>(`${this.basic_url}/login`,data,
     {
       headers:{
         "Authentication_type":`${authentication_type}`
       }
     }).subscribe(
      (response)=>{
        
        this.tokenManager.storeTokens(
        
          {
            acc:response.access_token,
            ref:response.refresh_token
          });
          if(authentication_type == "USER"){
            this.router.navigate([""])
          }
          else{
            this.router.navigate(["admin/dashboard"])
          }
        },
      (errors)=>{
        const toast = this.toast.error(
          {detail: errors.error.message,
          duration:2000});
      }
    );
    if(authentication_type == "USER"){
      this.router.navigate([""])
    }
    
  }
  ismatch(match:Array<string>):boolean{
    let A=this.tokenManager.getRoles();
    if(match[0]==A){
      return true;
    }
    return false;


  }
  getUser(email:any):Observable<Object>{
   return this.http.get<Object>(this.basic_url+"/user/"+email);

  }
  editProfile(myForm:NgForm,id:any){
    
    const {
      fullName,
      email,
      phone,
      branch,
      
    } = myForm.value;
    const data={
      id,
      fullName,
        phone,
        branch,
        auth:{
          email,
        }
      }
      console.log(data);
        this.http.put(`${this.basic_url}/editProfile`,data,{responseType:"text"}).subscribe(
          (result)=>{
            const toast = this.toast.success(
              {detail: result.toString(),
              duration:2000});
            setTimeout(()=>{
              location.reload;
            },2000)
          },
          (errors)=>{
            this.toast.error(
              {detail: errors.error,
              duration:2000});
          },

        )
    

  }

  

}
