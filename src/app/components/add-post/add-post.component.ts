import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private postService : PostService,
          private toast : NgToastService) { }

  ngOnInit(): void {
  }

  createPost(event:any){
    const myForm = event.currentTarget;
    const data = new FormData(myForm);

    this.postService.createPost(data);
  }

}
