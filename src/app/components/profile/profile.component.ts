import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenManagerService } from 'src/app/service/token-manager.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  forme?:FormGroup
  constructor(private tokenManager:TokenManagerService,private authservice:AuthService,
    private fb:FormBuilder) { }
  user:any
 

  ngOnInit(): void {
    
    
    this.authservice.getUser(this.tokenManager.getemail()).subscribe(data=>{
      this.user=data;
      
    });
    this.forme=this.fb.group({
      fullName:["",Validators.required],
      phone:["",Validators.required],
      branch:["",Validators.required]
    })
  }
  edit(f:NgForm){
    this.authservice.editProfile(f,this.user.id)
   
  }

}
