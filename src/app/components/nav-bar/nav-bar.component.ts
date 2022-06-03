import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
<<<<<<< HEAD
   
=======
>>>>>>> 686bc44256f8de3d91b9b2d056dad9f4f871f1e4
    return this.token.isLogged();
  }
  disconnect(){
  
     return this.token.disconnect();

  }
 

}
