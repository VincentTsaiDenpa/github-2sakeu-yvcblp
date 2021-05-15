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
  @Input() editName: string = '';
  @Input() editDescr: string = '';

  showUpdate: boolean = false;

  productList$: Observable<Object>;
  productList: Product[] = [];
  prodIndex: number;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.productList$ = this.dataService.getProducts$().pipe(
      tap((p: any[]) => {
        p.forEach(item => {
          const product: Product = {
            productName: item.productName,
            productDescription: item.productDescription
          };
          this.productList.push(product);
        });
      })
    );

    this.productList$.subscribe();
  }

  getProd() {
    this.productList$.subscribe();
    // this.prodDataList$.subscribe((res:any)=>{

    // },
    // (err: Error) => {
    //   console.error(err)
    // }
    // );
  }

  addProduct(inputRef: HTMLInputElement): void {
    const prod: Product = {
      productName: inputRef.value,
      productDescription: ''
    };
    this.productList.push(prod);
    inputRef.value = '';
  }

  deleteProduct(index: number) {
    // this.list.splice(index, 1);
  }

  remove(prod: Product) {
    const index: number = this.productList.indexOf(prod);
    if (
      this.productList[this.prodIndex] == this.productList[index]
    ) {
      this.showUpdate = false;
    }

    this.productList.splice(index, 1);
    
    if (this.prodIndex > index) {
      this.prodIndex--;
    }

    if (this.productList.length == 0) {
      this.showUpdate = false;
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
