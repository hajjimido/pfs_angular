import { HttpClient } from '@angular/common/http';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { environment } from 'src/environments/environment';
import { TokenManagerService } from './token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public branch = "all";
  public type = "all";
  basic_url:string = environment.host;
  
  constructor(private http:HttpClient,
             private toast:NgToastService,
             private router:Router,
             private tokenManager:TokenManagerService) { }

  createPost(data :FormData){

    let validForm = true;
    const thereIsAnemptyField = data.get("type")==""||data.get("title")==""
                      ||data.get("title")==""||data.get("description")==""||
                        data.get("file")=="";

    if(thereIsAnemptyField){
      validForm = false;
      this.toast.error(
        {
          detail:"All fields must be filled in",
          duration:2000
      });
    }
    else{
      const price  = data.get("price") as string;
      if(new RegExp("[0-9]+").test(price) == false){
        validForm = false;
        this.toast.error(
          {
            detail:"The price must be a type number",
            duration:2000
        });
      }
      else {
        const file:any = data.get("file");
        if(new RegExp("/.(png)|(jpg)|(JPG)|(PNG)$").test(file.name) == false){
          validForm = false;
          this.toast.error(
            {
              detail:"The image must be type jpg or png",
              duration:2000
          });
        }
       }
    }
    if(validForm == true){
      this.http.post(`${this.basic_url}/post/add`,data,
      {
        headers:{
          "Authorization":`Bearer ${this.tokenManager.getAccessToken()}`
        }
      }
      ).subscribe(
        (response)=>{
          this.toast.success(
            {
              detail:"Your post will validated by the admin as soon as possible",
              duration:2000
          });
          setTimeout(
            ()=>{
              this.router.navigate([""]);
            },2000
          );
        },
        (error)=> {
          this.toast.error(
            {
              detail:"There is something wrong with the server try later",
              duration:2000
          });
        }
      )
    }
    
  }
  
  getAllPosts(){
    console.log(this.branch+"-"+this.type);
    return this.http.get(
      `${this.basic_url}/post/all?page=1&branch=${this.branch}&type=${this.type}`
    );
  }

  resetFilters(){
    this.type = "all";
    this.branch = "all";
  }

}
