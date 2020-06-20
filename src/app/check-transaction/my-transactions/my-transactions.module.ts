import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTransactionsPageRoutingModule } from './my-transactions-routing.module';

import { MyTransactionsPage } from './my-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTransactionsPageRoutingModule
  ],
  declarations: [MyTransactionsPage]
})
export class MyTransactionsPageModule {}
