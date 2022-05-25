import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoriesComponent } from './components/admin/admin-categories/admin-categories.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminUersComponent } from './components/admin/admin-uers/admin-uers.component';
import { AjouterannonceComponent } from './components/ajouterannonce/ajouterannonce.component';
import { ConnecterComponent } from './components/connecter/connecter.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"ajouter" , component:AjouterannonceComponent},
  {path:"" , component:HomeComponent},
  {path:"connecter" , component:ConnecterComponent},
  {path:"products" , component:ProductsComponent},
  {path:"details/:id" , component:DetailsComponent},
  {path:"admin_users" , component:AdminUersComponent},
  {path:"admin_dashboard" , component:AdminDashComponent},
  {path:"admin_products" , component:AdminProductComponent},
  {path:"admin_categories" , component:AdminCategoriesComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
