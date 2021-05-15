import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Product;
  @Output() editProductEmit = new EventEmitter<Product>();
  @Output() removeEmit = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  editProd(){
    this.editProductEmit.emit(this.product);
  }

  remove(){
    this.removeEmit.emit(this.product);
  }
}