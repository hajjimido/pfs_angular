import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgToastModule } from 'ng-angular-popup';
import { CarouselModule } from 'ngx-owl-carousel-o';
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from "@angular/material/icon"
import { MatFormFieldModule} from "@angular/material/form-field"
import { MatSelectModule} from "@angular/material/select";
import {  MatSidenavModule} from "@angular/material/sidenav";
import { CheckboxGeneratorComponent } from './components/checkbox-generator/checkbox-generator.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SwiperDetailComponent } from './components/swiper-detail/swiper-detail.component'
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminUersComponent } from './components/admin/admin-uers/admin-uers.component';
import { ProduitNonValideComponent } from './components/admin/produit-non-valide/produit-non-valide.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator'; 
>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997

import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { InsidehomeComponent } from './components/insidehome/insidehome.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';
import { AllcategoComponent } from './components/allcatego/allcatego.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminUersComponent } from './components/admin/admin-uers/admin-uers.component';
import { AdminCategoriesComponent } from './components/admin/admin-categories/admin-categories.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
<<<<<<< HEAD
    LoginComponent,
    RegisterComponent,
    LoginAdminComponent,
    CheckboxGeneratorComponent,
    PostsComponent,
    PostComponent,
    AddPostComponent,
    MainPageComponent,
    SwiperDetailComponent,
=======
    ConnecterComponent,
    HeaderComponent,
    SearchComponent,
    InsidehomeComponent,
    CategoriesComponent,
    FooterComponent,
    ProductsComponent,
    DetailsComponent,
    AllcategoComponent,
    SwiperComponent,
>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997
    AdminDashComponent,
    AdminHomeComponent,
    AdminProductComponent,
    AdminUersComponent,
<<<<<<< HEAD
    ProduitNonValideComponent,
    
=======
    AdminCategoriesComponent,
    
   
>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    NgToastModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    CarouselModule
=======
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatPaginatorModule,
    CarouselModule
    
    
    
    
>>>>>>> d80de9b2941f0b216d8ec6904cdd846528044997
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
