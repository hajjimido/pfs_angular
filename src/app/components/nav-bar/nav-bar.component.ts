import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenManagerService } from 'src/app/service/token-manager.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  @Output() eventEmitter = new EventEmitter();

  constructor(private router:Router,private token:TokenManagerService,public authService:AuthService) { }

  ngOnInit(): void {
  }

  openFilters(){
    this.eventEmitter.emit();
    this.closeNavbar()
  }

  closeNavbar(){
    let toggler = document.getElementById("nav_input_button") as HTMLInputElement;
    if(toggler != null){
      toggler.checked = false;
    }
  }
  navigateToHomePage(){
    this.router.navigate([""]);
    this.closeNavbar();

  }

  navigateToLoginPage(){
    this.router.navigate(["auth/login"]);
    this.closeNavbar();
  }

  navigateToAddPostPage(){
    this.router.navigate(["post/add"]);
    this.closeNavbar();
  }
  isConnet():boolean{
   
    return this.token.isLogged();
  }
  disconnect(){
  
     return this.token.disconnect();

  }
 

}
