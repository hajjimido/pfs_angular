import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  @Input() posts=[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    console.log(this.posts)
  }

}
