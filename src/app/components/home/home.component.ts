import { Component, Input, OnInit } from '@angular/core';
import { TokenManagerService } from 'src/app/service/token-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private isAuthenticated:boolean = false;
  private branch:string = "All";
  private type:string = "All";
  public showFilter:boolean = true;

  constructor(private tokenManager:TokenManagerService){

  }
  ngOnInit(): void {
  }
  
  toggleFilter(){
    this.showFilter = !this.showFilter; 
    console.log(this.showFilter)
  }

  changeState(event:any){
    let filterName:string = event.name;
  
    if(filterName == "branch"){
      this.branch = event.choice;
    }
    else{
      this.type = event.choice;
    }
  }
  
  openFilters(event:any){
    const filters = document.getElementById("filters")
    if(filters != null){
      filters.classList.toggle("d-none");
    }
  }

  resetFilters(){
    this.branch = "All";
    this.type = "All";
  }
}
