import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmModalPage } from './confirm-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmModalPageRoutingModule {}
