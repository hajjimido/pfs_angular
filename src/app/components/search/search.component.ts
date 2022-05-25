import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  forme?:FormGroup;
  constructor(private fb:FormBuilder) { }
  @Output() event=new EventEmitter<string> ();
  ngOnInit(): void {
    this.forme=this.fb.group({
      chercher:["",Validators.required],
  });

}
chercher(){
  this.event.emit(this.forme?.value.chercher);
}
}
