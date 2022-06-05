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
  public isConnected :boolean;
  constructor(private router:Router,private token:TokenManagerService) { }

  ngOnInit(): void {
    this.isConnected = this.token.isLogged();
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
  
  disconnect(){
  
     return this.token.disconnect();

  }
 

}
