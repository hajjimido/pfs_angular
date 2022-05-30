import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public branch:string = "All";
  public type:string = "All";
  public showFilter:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  resetFilters(){
    this.branch = "All";
    this.type = "All";
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
  
}
