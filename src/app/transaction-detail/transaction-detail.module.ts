import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionDetailPageRoutingModule } from './transaction-detail-routing.module';

import { TransactionDetailPage } from './transaction-detail.page';
import { ScrollbarThemeModule  } from '../directives/scrollbar.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionDetailPageRoutingModule,
    ScrollbarThemeModule
  ],
  declarations: [TransactionDetailPage]
})
export class TransactionDetailPageModule {}
