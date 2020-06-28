import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MortageModalPageRoutingModule } from './mortage-modal-routing.module';

import { MortageModalPage } from './mortage-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MortageModalPageRoutingModule
  ],
  declarations: [MortageModalPage]
})
export class MortageModalPageModule {}
