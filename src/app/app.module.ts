import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
import { ServicesService } from './services.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ProductListComponent,
    SliderComponent,
    ProductAddComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailComponent,
    ProductManagerComponent,
    ProductEditComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

