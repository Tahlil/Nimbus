import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveModalPageRoutingModule } from './approve-modal-routing.module';

import { ApproveModalPage } from './approve-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveModalPageRoutingModule
  ],
  declarations: [ApproveModalPage]
})
export class ApproveModalPageModule {}
