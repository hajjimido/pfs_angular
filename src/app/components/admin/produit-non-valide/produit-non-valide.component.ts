import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-produit-non-valide',
  templateUrl: './produit-non-valide.component.html',
  styleUrls: ['./produit-non-valide.component.css']
})
export class ProduitNonValideComponent implements OnInit {
  products:Product[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
