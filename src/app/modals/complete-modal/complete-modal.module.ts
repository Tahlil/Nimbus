import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteModalPageRoutingModule } from './complete-modal-routing.module';

import { CompleteModalPage } from './complete-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteModalPageRoutingModule
  ],
  declarations: [CompleteModalPage]
})
export class CompleteModalPageModule {}
