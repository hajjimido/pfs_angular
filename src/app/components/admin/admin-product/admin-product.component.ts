import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AdminService } from 'src/app/service/service.admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css'],
})
export class AdminProductComponent implements OnInit {
  public posts: any;

  basic_url: any = environment.host;
  constructor(
    private adminservice: AdminService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.adminservice.getAllproduit().subscribe(
      (data: any) => {
        this.posts = data.content;
        console.log(this.posts);
      },
      (error) => {
        this.posts = [];
      }
    );
  }
  delete(id: any) {
    const toast = this.toast.success({ detail: 'en cours', duration: 2000 });
    this.adminservice.deleteProduct(id);
  }
  getImages(p: any): String {
    return this.basic_url + '/post/image/' + p.images[0].imageUrl;
  }
}
