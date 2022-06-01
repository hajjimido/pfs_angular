import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any;
  constructor(private route:Router) { }



  ngOnInit(): void {
    this.calculateData(this.post.creationDate);
  }

  calculateData(date:string){
    let datt = new Date();
  
  }
  route_ver_detail(id:any){
    this.route.navigateByUrl("/detail")
  }

}
