import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  produit?:Product
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  route_ver_detail(id:any){
    this.route.navigateByUrl("/detail")
  }

}
