import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit,OnDestroy {


  @Input() data:any;
  public pages:number[]=[];
  public subscreption:Subscription;
  @Input() searchEvent:Observable<void>;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.subscreption = this.searchEvent.subscribe(()=>{
      this.fetchPosts()
    })
    this.fetchPosts();
  }
  ngOnDestroy(): void {
    this.subscreption.unsubscribe();
  }

  fetchPosts(){
    this.postService.getAllPosts().subscribe(
      (data:any)=>{
        this.pages=[];
        this.data = data;
        let nbr_of_pages = data.totalPages;
        if(nbr_of_pages == 0){
          this.pages.push(1);
        }
        else{
          for(let i=1;i<=data.totalPages;i++){
            this.pages.push(i);
          }
        }
      },
      (error)=>{
        this.data = [];
      }
    );
  }
  changePage(){
    this.fetchPosts();
  }

  


}
