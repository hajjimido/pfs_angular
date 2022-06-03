import { Component,OnInit, Input} from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-checkbox-generator',
  templateUrl: './checkbox-generator.component.html',
  styleUrls: ['./checkbox-generator.component.css']
})
export class CheckboxGeneratorComponent implements OnInit {

  @Input() choices:{name:string,choice:{label:string,icon:string}[]} ={name:"",choice:[]}


  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }

  changeState(name:string,choice:string) {
    if(name == "branch"){
      this.postService.branch = choice.toLowerCase();
    }
    else{
      this.postService.type = choice.toLowerCase();
    }
  }

}
