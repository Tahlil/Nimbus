import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdModalPage } from './ad-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AdModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdModalPageRoutingModule {}
