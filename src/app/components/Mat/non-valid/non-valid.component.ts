import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';
import { TokenManagerService } from 'src/app/service/token-manager.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-non-valid',
  templateUrl: './non-valid.component.html',
  styleUrls: ['./non-valid.component.css'],
})
export class NonValidComponent implements OnInit {
  constructor(
    private nonvalide: AuthService,
    private tokenManager: TokenManagerService,
    private toast: NgToastService,
    private route: Router
  ) {}
  basic_url: any = environment.host;
  posts: any;
  ngOnInit(): void {
    this.nonvalide
      .getMyProduitNonValide(this.tokenManager.getemail())
      .subscribe(
        (data: any) => {
          this.posts = data;
          console.log(data);
        },
        (error) => {
          this.posts = [];
        }
      );
  }
  delete(id: any) {
    this.nonvalide.deleteProduct(id);
  }
  edit(id: any) {
    this.route.navigateByUrl('/post/edit/' + id);
  }
  getImages(p: any): String {
    return this.basic_url + '/post/image/' + p.images[0].imageUrl;
  }
}
