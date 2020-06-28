import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveModalPage } from './approve-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveModalPageRoutingModule {}
