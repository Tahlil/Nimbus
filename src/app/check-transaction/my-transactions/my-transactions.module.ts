import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollbarThemeModule  } from '../../directives/scrollbar.directive';


import { MyTransactionsPage } from './my-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollbarThemeModule
    
  ],
  declarations: [MyTransactionsPage],
  entryComponents: [MyTransactionsPage]
})
export class MyTransactionsPageModule {}
