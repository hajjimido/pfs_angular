import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponce } from '../Model/loginResponse';
import { Auth } from '../Model/User';
import { TokenManagerService } from './token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userEroor:boolean=true;
  phoneError:boolean=true;

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
    
  }
  editProfile(myForm:any,id:any){
    
    const {
      fullName,
      
      phone,
      branch,
      
    } = myForm.value;
    const data={
      id,
      fullName,
        phone,
        branch,
        
      }
      console.log(data);
        this.http.put(`${this.basic_url}/editProfile`,data,{responseType:"text"}).subscribe(
          (result)=>{
            this.userEroor=true;
            this.phoneError=true;
             const toast = this.toast.success(
              {detail: result.toString(),
              duration:2000});
          location.reload();
          },
          (errors)=>{
            
            if(errors.error=="This username is already used"){
              this.userEroor=false
            }
            else if(errors.error=="Invalid phone number format"){
              this.phoneError=false

            }
            else {
              
                const toast = this.toast.error(
                  {detail: errors.error,
                  duration:2000});
              
              
            }
            
           
          },

        )
    

  }
  getUser(email:any):Observable<Auth>{
    return this.http.get<Auth>(this.basic_url+"/user/"+email);
 
   }
   getMyProduitNonValide(email:any):Observable<Object[]>{
    return this.http.get<Object[]>(this.basic_url+"/NonValidProductUser/"+email);

  }
  getMyProduitValide(email:any):Observable<Object[]>{
    return this.http.get<Object[]>(this.basic_url+"/ValidProductUser/"+email);

  }
  deleteProduct(id:any){
      
       
    this.http.delete(`${this.basic_url}`+"/deletUserProduct/"+id,{responseType:"text"}).subscribe((res)=>{
     const toast = this.toast.success(
       {detail: res.toString(),
       duration:2000});
       location.reload();},
       

       (error)=>{
         const toast = this.toast.error(
           {detail: error.error,
           duration:2000});}
       
       
    )
 }

  

}
