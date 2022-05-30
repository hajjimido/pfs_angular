import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ["../register/register.component.css",'./login-admin.component.css',]
})
export class LoginAdminComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  
  onSubmit(myForm:NgForm){

    this.authService.login(myForm,"ADMIN")

  }
}
