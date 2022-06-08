import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenManagerService } from 'src/app/service/token-manager.service';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css']
})
export class ValidComponent implements OnInit {

  posts:any
  constructor(private nonvalide:AuthService,private tokenManager:TokenManagerService) { }

  ngOnInit(): void {
    this.nonvalide.getMyProduitValide(this.tokenManager.getemail()).subscribe(
      (data:any)=>{
        this.posts = data;
        console.log(data)
            
      },
      (error)=>{
        this.posts = [];
      }
    );

  }
  delete(id:any){
    this.nonvalide.deleteProduct(id);
    
  }

}
