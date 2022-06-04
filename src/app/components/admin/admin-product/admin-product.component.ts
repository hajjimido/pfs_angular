import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
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
    this.adminservice.getAllPosts().subscribe(
      (data:any)=>{
        this.posts = data;
        console.log(this.posts)     
      },
      (error)=>{
        this.posts = [];
      }
    );
   
  }
  delete(id:any){
    const toast = this.toast.success(
      {detail: "en cours",
      duration:2000});
      
    this.adminservice.deleteProduct(id);
  }

}
