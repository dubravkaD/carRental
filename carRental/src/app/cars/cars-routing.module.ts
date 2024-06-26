import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsPage } from './cars.page';

const routes: Routes = [
  {
    path: '',
    component: CarsPage
  },
  {
    path: 'carId',
    loadChildren: () => import('./car-details/car-details.module').then( m => m.CarDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsPageRoutingModule {}
