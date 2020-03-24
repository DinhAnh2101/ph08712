
import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { data} from '../MockData';
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
   this.servicesService.getProducts().subscribe(data => {
     console.log(data);
     this.products = data;
    });
  }
  removeItem(id){
    this.products = this.servicesService.removeProduct(id);
    // this.products = this.products.filter(product => product.id != id);
  }
}