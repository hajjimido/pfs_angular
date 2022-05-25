import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Productservice } from 'src/app/service/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
@Output() event=new EventEmitter<string> ();

  ngOnInit(): void {
  }
  sendcategorie(f:any){
   this.event.emit(f);

  }

}
