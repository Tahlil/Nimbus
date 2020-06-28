import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'check-transaction',
    loadChildren: () => import('./check-transaction/check-transaction.module').then( m => m.CheckTransactionPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction-detail/transaction-detail.module').then( m => m.TransactionDetailPageModule)
  },
  {
    path: 'option',
    loadChildren: () => import('./option/option.module').then( m => m.OptionPageModule)
  },
  {
    path: 'confirm-modal',
    loadChildren: () => import('./modals/confirm-modal/confirm-modal.module').then( m => m.ConfirmModalPageModule)
  },
  {
    path: 'approve-modal',
    loadChildren: () => import('./modals/approve-modal/approve-modal.module').then( m => m.ApproveModalPageModule)
  },
  {
    path: 'mortage-modal',
    loadChildren: () => import('./modals/mortage-modal/mortage-modal.module').then( m => m.MortageModalPageModule)
  },
  {
    path: 'ad-modal',
    loadChildren: () => import('./modals/ad-modal/ad-modal.module').then( m => m.AdModalPageModule)
  },
  // {
  //   path: 'model',
  //   loadChildren: () => import('./model/model/model.module').then( m => m.ModelPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
