import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AddPostComponent } from './components/add-post/add-post.component';
=======
import { AdminCategoriesComponent } from './components/admin/admin-categories/admin-categories.component';
>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminUersComponent } from './components/admin/admin-uers/admin-uers.component';
<<<<<<< HEAD
import { ProduitNonValideComponent } from './components/admin/produit-non-valide/produit-non-valide.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"auth" ,
    children:[
      {path:"login",component:LoginComponent,
        data:{title:"Login"}},
      {path:"register",component:RegisterComponent,
        data:{title:"Register"}},
      {path:"admin",component:LoginAdminComponent,
        data:{title:"Login"}},
      {path:"",redirectTo:"/auth/login",pathMatch:"full"}
    ]
  }
    ,
  {
    path:"",
    component:HomeComponent,
    children:[
      {
        path:"",
        component:MainPageComponent
      },
      {
        path:"post",
        children:[
          {
            path:"add",
            component:AddPostComponent
          },
          
        ]
      }
    ],
    
    
  },
  {
    path:"admin",
    component:AdminHomeComponent ,
    children:[
      { path:"dashboard",
       component:AdminDashComponent
      },
      { path:"users",
      component:AdminUersComponent

     },
     { path:"products",
      component:AdminProductComponent

     },
     {
      path:"valide",
      component:ProduitNonValideComponent
     }

    ]
    }
=======
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
  

>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
