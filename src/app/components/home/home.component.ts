import { Component, OnInit, ViewChild } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';
import { Datastate, StateEnum } from 'src/app/state/Datastate';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  }

}
