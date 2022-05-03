import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterannonceComponent } from './components/ajouterannonce/ajouterannonce.component';
import { ConnecterComponent } from './components/connecter/connecter.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"ajouter" , component:AjouterannonceComponent},
  {path:"" , component:HomeComponent},
  {path:"connecter" , component:ConnecterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
