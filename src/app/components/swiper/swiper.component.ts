import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  products:Product[]=[];
  constructor(private service:Productservice,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllproducts().subscribe(data=>{
      this.products=data;
    })
    

  }
  detail(p:Product){
    this.router.navigateByUrl("/details/"+p.id);
    
  }

    customOptions:OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }
  }


