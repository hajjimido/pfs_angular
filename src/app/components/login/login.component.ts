import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { TokenManagerService } from 'src/app/service/token-manager.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',"../register/register.component.css"]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private tokenManager: TokenManagerService) { }

  ngOnInit(): void {
    this.tokenManager.getRoles();
  }

  onSubmit(myForm:NgForm){
    this.authService.login(myForm,"USER");
  }

}
