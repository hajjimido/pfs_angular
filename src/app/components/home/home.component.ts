<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { TokenManagerService } from 'src/app/service/token-manager.service';

=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';
import { Datastate, StateEnum } from 'src/app/state/Datastate';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  
  private isAuthenticated:boolean = false;
  private branch:string = "All";
  private type:string = "All";
  public showFilter:boolean = true;

  constructor(private tokenManager:TokenManagerService){

  }
  ngOnInit(): void {
    console.log(this.tokenManager.getRoles());
  }
  
  toggleFilter(){
    this.showFilter = !this.showFilter; 
    console.log(this.showFilter)
=======
  products:Product[]=[];
  readonly StateEnum=StateEnum;
  public pageSlice:any
  categorie:any
 
  constructor(private productservice:Productservice,private router:Router  ) { }
 receiveCategorie($event:any){
   this.categorie=$event
   console.log(this.categorie);
   this.productservice.searchbyPrduit(this.categorie).subscribe(data=>{
    this.products=data
   this.pageSlice=this.products.slice(0,5)
  })

 }
  ngOnInit(): void {
    
    this.productservice.getAllproducts().subscribe(data=>{
      this.products=data
     this.pageSlice=this.products.slice(0,5)
    })
   
  }
  
  
  search(f:any){
    
    /*this.productservice.searchproduit(f).subscribe((result)=>{
      this.products=result
      this.pageSlice=this.products
    })
    */
  }
  OnPageChange(event:PageEvent){
    const start=event.pageIndex*event.pageSize
    let end=start+event.pageSize
    if (end>this.products.length){
      end=this.products.length
    }
    this.pageSlice=this.products.slice(start,end)

  }
  details(p:Product){
    this.router.navigateByUrl("/details/"+p.id);
>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997
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
