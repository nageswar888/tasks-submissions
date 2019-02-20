import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NumberPipe, PhoneNumberPipe} from './phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberPipe,
    NumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
