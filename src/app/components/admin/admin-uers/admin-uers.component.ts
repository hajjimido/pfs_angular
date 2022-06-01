import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Auth} from 'src/app/Model/User';
import { AdminService } from 'src/app/service/service.admin.service';


@Component({
  selector: 'app-admin-uers',
  templateUrl: './admin-uers.component.html',
  styleUrls: ['./admin-uers.component.css']
})
export class AdminUersComponent implements OnInit {
 Users:any[]=[];
  constructor(private adminservice:AdminService,private toast: NgToastService,) { }

  ngOnInit(): void {
    this.adminservice.getUsers().subscribe(data=>{
       this.Users=data;
      
      console.log(this.Users);
    })
  
  }
  delete(id:any,email:any){
   const toast = this.toast.success(
      {detail: "en cours",
      duration:6000});
     
      
    this.adminservice.delete(id,email);
      
    
  }
}
