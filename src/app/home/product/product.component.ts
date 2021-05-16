import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productList:Product[];
  @Output() editProductEmit = new EventEmitter<Product>();
  @Output() removeEmit = new EventEmitter<Product>();

  constructor() { }


  editProd(product:Product){
    this.editProductEmit.emit(product);
  }

  remove(product:Product){
    this.removeEmit.emit(product);
  }
}