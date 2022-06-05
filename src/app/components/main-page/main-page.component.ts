import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public showFilter:boolean = true;
  public searchEvent: Subject<void> = new Subject<void>();

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }
  
  submitFilters(){
    this.searchEvent.next();
  }
 
  resetFilters(){
    this.postService.resetFilters();
  }

  
}
