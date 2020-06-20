import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckTransactionPage } from './check-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: CheckTransactionPage
  },
  {
    path: 'advertises',
    loadChildren: () => import('./advertises/advertises.module').then( m => m.AdvertisesPageModule)
  },
  {
    path: 'my-transactions',
    loadChildren: () => import('./my-transactions/my-transactions.module').then( m => m.MyTransactionsPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pending/pending.module').then( m => m.PendingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckTransactionPageRoutingModule {}
