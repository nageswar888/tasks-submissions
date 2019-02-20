import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: '**',component: AppComponent},

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes) ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
