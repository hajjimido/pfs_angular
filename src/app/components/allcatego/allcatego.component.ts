import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';

@Component({
  selector: 'app-allcatego',
  templateUrl: './allcatego.component.html',
  styleUrls: ['./allcatego.component.css']
})
export class AllcategoComponent implements OnInit {
  products:Product[]=[];
  constructor(private productservice:Productservice,private router:Router) { }

  ngOnInit(): void {
    this.productservice.getAllproducts().subscribe(data=>{
      this.products=data;
    })
  }
  detail(p:Product){
    this.router.navigateByUrl("/details/"+p.id);
    
  }

}
