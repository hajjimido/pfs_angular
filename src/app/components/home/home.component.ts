import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';
import { Datastate, StateEnum } from 'src/app/state/Datastate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$:Observable<Datastate<Product[]>>|null=null;
  readonly StateEnum=StateEnum;
  constructor(private productservice:Productservice ) { }

  ngOnInit(): void {
  }
  getAll(){
    this.products$=this.productservice.getAllproducts().pipe(
      map(data=>({datastate:StateEnum.loaded,data:data})),
      startWith({datastate:StateEnum.loading}),
     catchError(err=>of({datastate:StateEnum.Eroor, errormessage:err.message}))
    );
    
  }
  search(f:any){
    
    this.products$=this.productservice.searchproduit(f).pipe(
      map(data=>({datastate:StateEnum.loaded,data:data})),
      startWith({datastate:StateEnum.loading}),
     catchError(err=>of({datastate:StateEnum.Eroor, errormessage:err.message}))
    );
  }

}
