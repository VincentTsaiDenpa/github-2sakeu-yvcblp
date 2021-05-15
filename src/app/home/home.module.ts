import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Test1Module } from '../test1/test1.module';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [CommonModule, FormsModule, HomeRoutes, Test1Module],
  declarations: [HomeComponent, ProductComponent]
})
export class HomeModule {}
