import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/internal/operators/startWith';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';
import { Datastate, StateEnum } from 'src/app/state/Datastate';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$:Observable<Datastate<Product[]>>|null=null;
  readonly StateEnum=StateEnum;

  constructor(private productservice:Productservice) { }

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
