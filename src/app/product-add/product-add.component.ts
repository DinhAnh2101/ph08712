import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
// import { ServicesService } from '../services.service'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  



  product: Product = new Product();
  constructor(
    // private servicesService: ServicesService
  ) { }

  ngOnInit() {
  }
  addProduct(){
    console.log(this.product);
    // this.servicesService.addProduct(this.product);
  }
}