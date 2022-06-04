import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenManagerService } from 'src/app/service/token-manager.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Auth } from 'src/app/Model/User';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  forme?:FormGroup
  constructor(private tokenManager:TokenManagerService,private authservice:AuthService,
    private fb:FormBuilder) { }
  user:Auth
 

  ngOnInit(): void {
    
    
    this.authservice.getUser(this.tokenManager.getemail()).subscribe(data=>{
      this.user=data;
      this.forme=this.fb.group({
        fullName:[this.user.fullName,Validators.required],
        phone:[this.user.phone,Validators.required],
        branch:[this.user.branch,Validators.required]
      })
      
    });
    
   
  }
  edit(f:any){
    this.authservice.editProfile(f,this.user.id)
    location.reload();
   
  }

}
