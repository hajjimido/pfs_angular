import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-swiper-detail',
  templateUrl: './swiper-detail.component.html',
  styleUrls: ['./swiper-detail.component.css']
})
export class SwiperDetailComponent implements OnInit {
  public numbers = ["un","deux","trois","quatre"]
  constructor() { }

  ngOnInit(): void {
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
