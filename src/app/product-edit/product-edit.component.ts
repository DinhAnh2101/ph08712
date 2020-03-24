import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service'
import { Product } from '../Product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
product: Product;
  constructor(
  private route: ActivatedRoute,
  private servicesService: ServicesService
  ) { }
  
  ngOnInit() {
     this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
        this.servicesService.getProduct(param.productID).subscribe(data => this.product = data);
    })
  }
  updateProduct(){
       this.servicesService.updateProduct(this.product).subscribe(data => console.log(data));
  }
}