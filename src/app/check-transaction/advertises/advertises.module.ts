import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertisesPageRoutingModule } from './advertises-routing.module';

import { AdvertisesPage } from './advertises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertisesPageRoutingModule
  ],
  declarations: [AdvertisesPage]
})
export class AdvertisesPageModule {}
