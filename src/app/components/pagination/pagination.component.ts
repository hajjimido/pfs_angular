import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public current_page:number ;
  @Input()  pages : number[];
  @Output() paginationEvent = new EventEmitter();
  constructor(private postService:PostService) { 
    
  }

  ngOnInit(): void {
    this.current_page = this.postService.current_pages;
  }

  switchPage(target:any, page:number){
    let selected = document.querySelector(".selected");
    selected?.classList.remove("selected");
    target.classList.add("selected");
    this.current_page = page;
    this.postService.current_pages = page;
    this.paginationEvent.emit();
  }

  nextPage(){
    let next_page_index = this.current_page+1;
    if(this.pages.includes(next_page_index)){
      this.switchPage(document.getElementById("pagination_element_"+next_page_index),next_page_index)
    }
  }
  previousPage(){
    let previous_page_index = this.current_page-1;
    console.log("previous");
    if(this.pages.includes(previous_page_index)){
      console.log("previous");
      this.switchPage(document.getElementById("pagination_element_"+previous_page_index),previous_page_index);
    }
  }
}
