import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Product } from 'src/app/Model/product';
import { AdminService } from 'src/app/service/service.admin.service';

@Component({
  selector: 'app-produit-non-valide',
  templateUrl: './produit-non-valide.component.html',
  styleUrls: ['./produit-non-valide.component.css']
})
export class ProduitNonValideComponent implements OnInit {
  
  constructor(private adminservice:AdminService,private toast:NgToastService) { }
  posts:any
  ngOnInit(): void {
    this.adminservice.getAllproduitNotValid().subscribe(
      (data:any)=>{
        this.posts = data;
        console.log(data)
            
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
  valide(p:any){
    const toast = this.toast.success(
      {detail: "en cours",
      duration:2000});
      this.adminservice.valide(p);
  }

}
