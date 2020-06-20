import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhatyanDetailPageRoutingModule } from './khatyan-detail-routing.module';

import { KhatyanDetailPage } from './khatyan-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhatyanDetailPageRoutingModule
  ],
  declarations: [KhatyanDetailPage]
})
export class KhatyanDetailPageModule {}
