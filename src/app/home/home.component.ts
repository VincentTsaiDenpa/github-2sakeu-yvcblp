import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataService } from './../services/data.service';
import { Product } from './product/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  editName: string = '';
  editDescr: string = '';
  showUpdate: boolean = false;

  productList$: Observable<Object>;
  productList: Product[] = [];
  prodIndex: number;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProducts$().subscribe(
      (items:any[])=>{items.forEach((item:Product)=>{this.productList.push(item)})}
    );
  }

  addProduct(inputRef: HTMLInputElement): void {
    this.productList.push({productName: inputRef.value,productDescription: ''});
    inputRef.value = '';
  }


  remove(prod: Product) {
    const index: number = this.productList.indexOf(prod);
    if (this.productList[this.prodIndex] == this.productList[index]) {
      this.showUpdate = false;
    }

    this.productList.splice(index, 1);
    
    if (this.prodIndex > index) {
      this.prodIndex--;
    }
  }

  editProduct(prod: Product) {
    this.prodIndex = this.productList.indexOf(prod);
    this.editName = prod.productName;
    this.editDescr = prod.productDescription;
    this.showUpdate = true;
  }

  update() {
    this.productList[this.prodIndex].productName = this.editName;
    this.productList[this.prodIndex].productDescription = this.editDescr;
    this.showUpdate = false;
  }
}
