import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { ScrollbarThemeModule  } from '../directives/scrollbar.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ScrollbarThemeModule 
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
