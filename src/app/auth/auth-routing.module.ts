import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './signup.page';
import { LogInPage } from './login.page';

const routes: Routes = [
  {
    path: '/login',
    component: LogInPage
  },
  {
    path: '/signup',
    component: SignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
