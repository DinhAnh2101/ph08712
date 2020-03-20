
import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { ServicesService } from '../services.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  selected: Product;
  products: Product[];

  constructor(
    private servicesService : ServicesService
  ) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    this.getProducts();
  }
 
  getProducts(){
    this.products = this.servicesService.getProducts();
  }
  removeItem(id){
    this.products = this.servicesService.removeProduct(id);
    
  }
  showDetail(product){
      console.log(product);
      this.selected = product;
    }
  
}