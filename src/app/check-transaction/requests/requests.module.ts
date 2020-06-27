import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollbarThemeModule  } from '../../directives/scrollbar.directive';

import { RequestsPage } from './requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollbarThemeModule
    
  ],
  declarations: [RequestsPage]
})
export class RequestsPageModule {}
