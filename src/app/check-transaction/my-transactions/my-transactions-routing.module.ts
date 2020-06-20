import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTransactionsPage } from './my-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: MyTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTransactionsPageRoutingModule {}
