import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
products:Product[]=[]
  constructor(private productservice:Productservice) { }

  ngOnInit(): void {
   // this.productservice.getAllproducts("all","all").subscribe(data=>{
     // this.products=data
    //})
  }

}
