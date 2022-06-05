import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public current_image_index=0;
  public nbr_of_images = 3;
  public images:number[] = [];
  public post:any ;
  public basic_link = environment.host;
  constructor(private activatedRouter:ActivatedRoute,
    private postService:PostService) { }

  ngOnInit(): void {
    let post_slug="";
    this.activatedRouter.paramMap.subscribe(
      (params:any)=>{
        post_slug = params.params.postSlug;
        this.postService.getPostBySlug(post_slug).subscribe(
        (post:any)=>{
          this.post = post;
          for(let i=0;i<this.post.images.length;i++){
            this.images.push(i);
          }
        }
      
    );
    }
    );
  }

  return(){
    console.log(this.current_image_index);
    if(this.current_image_index>0){
      document.querySelectorAll("img")[this.images[this.current_image_index]].classList.add("to_the_right");
      document.querySelectorAll("img")[this.images[
        this.current_image_index-1
      ]].classList.remove("to_the_left");
      this.current_image_index--;
    }
    else{
      document.querySelectorAll("img")[this.images[0]].classList.add("to_the_right");
      let next_image:any = document.querySelectorAll("img")[this.images[
        this.nbr_of_images-1
      ]];
      next_image.classList.remove("smooth_transition");
      next_image.classList.remove("to_the_right");
      next_image.classList.add("to_the_left");
      setTimeout(() => {
        next_image.classList.add("smooth_transition");
        next_image.classList.remove("to_the_left");
      }, 10);
      let last_image:any = this.images.pop();
      this.images.unshift(last_image);
    }
  }
    
  next(){
    if(this.current_image_index<this.nbr_of_images-1){
      document.querySelectorAll("img")[this.images[
        this.current_image_index
      ]].classList.add("to_the_left");
      document.querySelectorAll("img")[
        this.images[this.current_image_index+1]
      ].classList.remove("to_the_right");
      this.current_image_index++;
    }
    else{
      document.querySelectorAll("img")[this.images[this.nbr_of_images-1]].classList.add("to_the_left");
      let next_image:any = document.querySelectorAll("img")[this.images[0]];
      next_image.classList.remove("smooth_transition");
      next_image.classList.remove("to_the_left");
      next_image.classList.add("to_the_right");
      setTimeout(() => {
        next_image.classList.add("smooth_transition");
        next_image.classList.remove("to_the_right")
      }, 10);
      let first_image:any = this.images.shift();
      this.images.push(first_image);
    }
  }

}
