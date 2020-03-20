import { Injectable } from '@angular/core';
import { data } from './MockData';
@Injectable()
export class ServicesService {

  products = data;
  constructor() { }

  getProducts(){
    return this.products;
  }
  removeProduct(id){
    return this.products.filter(product => product.id != id);
  }
  addProduct(product){
    console.log(product);

    const newProduct = { id: 5, ...product};
    console.log(newProduct);
    this.products.push(newProduct);
    console.log(this.products)
  }

}