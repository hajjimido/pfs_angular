<<<<<<< HEAD
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Auth} from 'src/app/Model/User';
import { AdminService } from 'src/app/service/service.admin.service';

=======
import { Component, OnInit } from '@angular/core';
>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997

@Component({
  selector: 'app-admin-uers',
  templateUrl: './admin-uers.component.html',
  styleUrls: ['./admin-uers.component.css']
})
export class AdminUersComponent implements OnInit {
<<<<<<< HEAD
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
=======

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997
}
