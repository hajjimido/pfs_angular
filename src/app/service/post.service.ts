import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
                        data.getAll("files").length == 0;

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
            detail:"The price must be a positive number",
            duration:2000
        });
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
    return this.http.get(
      `${this.basic_url}/post/all?page=1&branch=${this.branch}&type=${this.type}`
    );
  }

  resetFilters(){
    this.type = "all";
    this.branch = "all";
  }

}
