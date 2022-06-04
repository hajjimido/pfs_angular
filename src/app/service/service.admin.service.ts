import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../Model/User';

import { TokenManagerService } from './token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  
  basic_url:string = environment.host;
  data?:Array<any>
  constructor(private http :HttpClient,
      private toast: NgToastService,
      private router:Router,
      private tokenManager:TokenManagerService) { }
      public branch = "all";
      public type = "all";

      getUsers():Observable<Object[]>{
          return this.http.get<Object[]>(this.basic_url+"/users")

      }
      delete(id:any,email:any){
      
       
         this.http.delete(`${this.basic_url}`+"/deleteuser/"+email+"/"+id,{responseType:"text"}).subscribe((res)=>{
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
      getAllPosts(){
        return this.http.get(
          `${this.basic_url}/post/all?page=1&branch=${this.branch}&type=${this.type}`
        );
      }


    deleteProduct(id:any){
      
       
         this.http.delete(`${this.basic_url}`+"/deletProduct/"+id,{responseType:"text"}).subscribe((res)=>{
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
      getAllproduitNotValid():Observable<Object[]>{
        return this.http.get<Object[]>(this.basic_url+"/poductnotactive");
      }
      valide(id:any){
        return this.http.put(this.basic_url+"/valide/"+id,[],{responseType:"text"}).subscribe((res)=>{
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
