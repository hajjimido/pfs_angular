import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminUersComponent } from './components/admin/admin-uers/admin-uers.component';
import { ProduitNonValideComponent } from './components/admin/produit-non-valide/produit-non-valide.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MesAnnoncesComponent } from './components/Mat/mes-annonces/mes-annonces.component';
import { NavProfilMESANNONCESComponent } from './components/nav-profil-mesannonces/nav-profil-mesannonces.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NewCodeComponent } from './components/ForgetPassword/new-code/new-code.component';
import { SendCodeComponent } from './components/ForgetPassword/send-code/send-code.component';
import { VerifyCodeComponent } from './components/ForgetPassword/verify-code/verify-code.component';
import { AuthGuard } from './guards/auth.guard';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login' } },
      {
        path: 'fogetPassword',
        children: [
          { path: 'sendCode', component: SendCodeComponent },
          { path: 'verifyCode/:username', component: VerifyCodeComponent },
          { path: 'newCode/:username', component: NewCodeComponent },
        ],
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register' },
      },
      {
        path: 'admin',
        component: LoginAdminComponent,
        data: { title: 'Login' },
        
      },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
      },
      {
        path: 'moi',
        component: NavProfilMESANNONCESComponent,
        children: [
          {
            path: 'profile',
            component: ProfileComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'mesAnnonces',
            component: MesAnnoncesComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
      {
        path: 'post',
        children: [
          {
            path: 'edit/:id',
            component: EditPostComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'add',
            component: AddPostComponent,
            canActivate: [AuthGuard],
          },
          {
            path: ':postSlug',
            component: PostDetailsComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      { path: 'dashboard', component: AdminDashComponent, canActivate: [AuthGuard],data:{role:'ADMIN'} },
      { path: 'users', component: AdminUersComponent, canActivate: [AuthGuard],data:{role:'ADMIN'} },
      { path: 'products', component: AdminProductComponent, canActivate: [AuthGuard],data:{role:'ADMIN'} },
      {
        path: 'valide',
        component: ProduitNonValideComponent,
        canActivate: [AuthGuard],data:{role:'ADMIN'}
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
