import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-new-code',
  templateUrl: './new-code.component.html',
  styleUrls: ['./new-code.component.css']
})
export class NewCodeComponent implements OnInit {

  constructor(private authServic:AuthService,private route:ActivatedRoute,private toast:NgToastService) { 
    this.username=this.route.snapshot.params["username"]
  }
  username:any
  ngOnInit(): void {
  }
  newcode(f:NgForm){
    if(f.value.password==f.value.confirmPassword){
      
      this.authServic.newCode(this.username,f.value.password)
    }
    else{
      const toast = this.toast.error(
        {detail: "confirm password incorrect",
        duration:2000});
    }
   }

}
