import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterannonceComponent } from './components/ajouterannonce/ajouterannonce.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:"auth" ,
    children:[
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:"",redirectTo:"/auth/login",pathMatch:"full"}
    ]
  }
    ,
  {
    path:"",
    component:HomeComponent,
    children:[
      {path:"add",component:AjouterannonceComponent},
      {path:"",component:ProductsComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
