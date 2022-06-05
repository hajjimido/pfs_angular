import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any;
  public principleImageUrl : string;
  basic_url:string = environment.host;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.calculateData(this.post.creationDate);
    this.principleImageUrl = this.basic_url+"/post/image/"+this.post.images[0].imageUrl;
  }

  calculateData(date:string){
    let datt = new Date();
  
  }
  route_ver_detail(id:any){
    this.route.navigateByUrl("/detail")
  }

  moveToPostPage(postSlug:string){
    this.route.navigate(["/post",this.post.slug]);
  }

}
