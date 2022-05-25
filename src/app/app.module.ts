import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AjouterannonceComponent } from './components/ajouterannonce/ajouterannonce.component';
import { HomeComponent } from './components/home/home.component';
import { ConnecterComponent } from './components/connecter/connecter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator'; 

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
    AjouterannonceComponent,
    HomeComponent,
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
    AdminDashComponent,
    AdminHomeComponent,
    AdminProductComponent,
    AdminUersComponent,
    AdminCategoriesComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatPaginatorModule,
    CarouselModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
