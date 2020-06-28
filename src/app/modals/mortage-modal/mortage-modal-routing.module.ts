import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortageModalPage } from './mortage-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MortageModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortageModalPageRoutingModule {}
