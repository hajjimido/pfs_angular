import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  categories:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  add(f:any){
     
    this.categories.push(f)

  }
  delete(f:any){
    this.categories.splice(f,1)


  }

}
