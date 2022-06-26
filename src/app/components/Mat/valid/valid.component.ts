import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenManagerService } from 'src/app/service/token-manager.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css'],
})
export class ValidComponent implements OnInit {
  posts: any;
  constructor(
    private nonvalide: AuthService,
    private tokenManager: TokenManagerService
  ) {}
  basic_url: any = environment.host;

  ngOnInit(): void {
    this.nonvalide.getMyProduitValide(this.tokenManager.getemail()).subscribe(
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
  getImages(p: any): String {
    return this.basic_url + '/post/image/' + p.images[0].imageUrl;
  }
}
