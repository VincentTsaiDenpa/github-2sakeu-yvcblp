import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productList:Product[];
  @Output() editProductEmit = new EventEmitter<Product>();
  @Output() removeEmit = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  editProd(product:Product){
    this.editProductEmit.emit(product);
  }

  remove(product:Product){
    this.removeEmit.emit(product);
  }
}