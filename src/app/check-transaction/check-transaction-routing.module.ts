import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckTransactionPage } from './check-transaction.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { AdvertisesPageModule } from './advertises/advertises.module';
import { RequestsPageModule } from './requests/requests.module';
import { PendingPageModule } from './pending/pending.module';
import { MyTransactionsPageModule } from './my-transactions/my-transactions.module';
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
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            SuperTabsModule,
            AdvertisesPageModule,
            RequestsPageModule,
            PendingPageModule,
            MyTransactionsPageModule
  ],
  exports: [RouterModule],
})
export class CheckTransactionPageRoutingModule {}
