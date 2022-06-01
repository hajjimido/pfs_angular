import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public showFilter:boolean = true;
  public posts:any;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  
  submitFilters(){
    this.fetchPosts();
  }

  fetchPosts(){
    this.postService.getAllPosts().subscribe(
      (data:any)=>{
        this.posts = data.content;
        console.log(this.posts)     
      },
      (error)=>{
        this.posts = [];
      }
    );
  }
  
  resetFilters(){
    this.postService.resetFilters();
  }

  
}
