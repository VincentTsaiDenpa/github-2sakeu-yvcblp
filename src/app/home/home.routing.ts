import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'prod',
    component: ProductComponent,
  }
];

export const HomeRoutes = RouterModule.forChild(routes);
