import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  display=false
  product?:Product
 
  idpr:Number
  constructor(private route:ActivatedRoute,private productservice:Productservice) {
    this.idpr= this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.productservice.getprd(this.idpr).subscribe(data=>{
      this.product=data;
      
    });
   
  }

  

}
