import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmModalPageRoutingModule } from './confirm-modal-routing.module';

import { ConfirmModalPage } from './confirm-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmModalPageRoutingModule
  ],
  declarations: [ConfirmModalPage]
})
export class ConfirmModalPageModule {}
