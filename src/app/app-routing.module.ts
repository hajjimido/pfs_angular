import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
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
      },{
        path:"post",
        children:[
          {
            path:"add",
            component:AddPostComponent
          }
        ]
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
