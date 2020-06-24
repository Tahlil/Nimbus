import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckTransactionPageRoutingModule } from './check-transaction-routing.module';

import { CheckTransactionPage } from './check-transaction.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    CheckTransactionPageRoutingModule
  ],
  declarations: [CheckTransactionPage],
  entryComponents: [CheckTransactionPage]
})
export class CheckTransactionPageModule {}
