import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminUersComponent } from './components/admin/admin-uers/admin-uers.component';
import { ProduitNonValideComponent } from './components/admin/produit-non-valide/produit-non-valide.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProfileComponent } from './components/profile/profile.component';
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
        path:"profile",
        component:ProfileComponent
      },
      {
        path:"detail",
        component:DetailComponent
      },{
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
