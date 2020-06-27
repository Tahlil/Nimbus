import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';
import { ScrollbarThemeModule  } from '../directives/scrollbar.directive';
import { SignUpPage } from './signup.page';
import { LogInPage } from './login.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    ScrollbarThemeModule
  ],
  declarations: [SignUpPage, LogInPage]
})
export class AuthPageModule {}
