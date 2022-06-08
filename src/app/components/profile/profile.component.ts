import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/Model/User';
import { AuthService } from 'src/app/service/auth.service';
import { TokenManagerService } from 'src/app/service/token-manager.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  forme?:FormGroup
  mod:boolean=true;
  constructor(private tokenManager:TokenManagerService,public authservice:AuthService,
    private fb:FormBuilder) { }
  user:Auth
 

  ngOnInit(): void {
    this.authservice.phoneError=true
    this.authservice.userEroor=true
    
    this.authservice.getUser(this.tokenManager.getemail()).subscribe(data=>{
      this.user=data;
      this.forme=this.fb.group({
        fullName:[this.user.fullName,Validators.required],
        phone:[this.user.phone,Validators.required],
        branch:[this.user.branch,Validators.required]
      })
      
    });
    
   
  }
  modif(){
    this.mod=false;
  }
  edit(f:any){
    this.authservice.phoneError=true
    this.authservice.userEroor=true
    this.authservice.editProfile(f,this.user.id)
    
   
   
  }


}
