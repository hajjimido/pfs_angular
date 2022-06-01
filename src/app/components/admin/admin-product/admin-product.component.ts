import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';
import { AdminService } from 'src/app/service/service.admin.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  public posts:any;
  constructor(private adminservice:AdminService,private toast: NgToastService) { }

  ngOnInit(): void {
    this.adminservice.getAllproduit().subscribe(
      (data:any)=>{
        this.posts = data.content;
        console.log(this.posts)     
      },
      (error)=>{
        this.posts = [];
      }
    );
   
  }
  delete(id:any,email:any){
    const toast = this.toast.success(
      {detail: "en cours",
      duration:2000});
    this.adminservice.deleteProduct(id,email);
  }

}
