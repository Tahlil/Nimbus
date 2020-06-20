import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckTransactionPageRoutingModule } from './check-transaction-routing.module';

import { CheckTransactionPage } from './check-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckTransactionPageRoutingModule
  ],
  declarations: [CheckTransactionPage]
})
export class CheckTransactionPageModule {}
