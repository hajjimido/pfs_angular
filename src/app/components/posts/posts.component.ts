import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public numbers = [1,2,3,4,5,6,7,8,9,10,11]
  constructor() { }

  ngOnInit(): void {

  }

}
