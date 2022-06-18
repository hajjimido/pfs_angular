import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgToastModule } from 'ng-angular-popup';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CheckboxGeneratorComponent } from './components/checkbox-generator/checkbox-generator.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SwiperDetailComponent } from './components/swiper-detail/swiper-detail.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminUersComponent } from './components/admin/admin-uers/admin-uers.component';
import { ProduitNonValideComponent } from './components/admin/produit-non-valide/produit-non-valide.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NavProfilMESANNONCESComponent } from './components/nav-profil-mesannonces/nav-profil-mesannonces.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MesAnnoncesComponent } from './components/Mat/mes-annonces/mes-annonces.component';
import { ValidComponent } from './components/Mat/valid/valid.component';
import { NonValidComponent } from './components/Mat/non-valid/non-valid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NewCodeComponent } from './components/ForgetPassword/new-code/new-code.component';
import { SendCodeComponent } from './components/ForgetPassword/send-code/send-code.component';
import { VerifyCodeComponent } from './components/ForgetPassword/verify-code/verify-code.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginAdminComponent,
    CheckboxGeneratorComponent,
    PostsComponent,
    PostComponent,
    AddPostComponent,
    MainPageComponent,
    SwiperDetailComponent,
    AdminDashComponent,
    AdminHomeComponent,
    AdminProductComponent,
    AdminUersComponent,
    ProduitNonValideComponent,
    PaginationComponent,
    PostDetailsComponent,
    NavProfilMESANNONCESComponent,
    ProfileComponent,
    MesAnnoncesComponent,
    ValidComponent,
    NonValidComponent,
    SendCodeComponent,
    VerifyCodeComponent,
    NewCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    CarouselModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
