import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisesPage } from './advertises.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisesPageRoutingModule {}
