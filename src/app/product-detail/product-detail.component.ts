import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service'
import { Product } from '../Product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

 product: Product;
  constructor(
    private route: ActivatedRoute,
    private servicesService : ServicesService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param => {
        this.servicesService.getProduct(param.productID).subscribe(data => this.product = data);
    })
  }


}




