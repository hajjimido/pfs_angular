import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';
import { TokenManagerService } from 'src/app/service/token-manager.service';

@Component({
  selector: 'app-non-valid',
  templateUrl: './non-valid.component.html',
  styleUrls: ['./non-valid.component.css']
})
export class NonValidComponent implements OnInit {

  constructor(private nonvalide:AuthService,private tokenManager:TokenManagerService,private toast:NgToastService) { }
  posts:any
  ngOnInit(): void {
    this.nonvalide.getMyProduitNonValide(this.tokenManager.getemail()).subscribe(
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
  rappel(){
    const toast = this.toast.success(
      {detail: "votre produit va etre valider ultérieurement",
      duration:5000});
      }

}
