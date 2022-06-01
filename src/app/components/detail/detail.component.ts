import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  idpr:Number=1
  product?:Product
  constructor(private productservice:Productservice,private route:ActivatedRoute) {  //this.idpr= this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    //this.productservice.getprd(this.idpr).subscribe(data=>{
      //this.product=data;
      
   // });
  }

}
