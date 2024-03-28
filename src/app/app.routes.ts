import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/product/product.component').then(m => m.ProductComponent)
  }
];
