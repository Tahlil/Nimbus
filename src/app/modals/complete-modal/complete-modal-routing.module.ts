import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteModalPage } from './complete-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteModalPageRoutingModule {}
