import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { Productservice } from 'src/app/service/product.service';
import { Datastate, StateEnum } from 'src/app/state/Datastate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
  }
  
  

}
