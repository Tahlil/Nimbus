import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertisesPage } from './advertises.page';
import { ScrollbarThemeModule  } from '../../directives/scrollbar.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollbarThemeModule
  ],
  declarations: [AdvertisesPage],
  entryComponents: [AdvertisesPage]
})
export class AdvertisesPageModule {}
