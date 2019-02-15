import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChildComponent } from './child/child.component';
import { SubChildComponent } from './sub-child/sub-child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ChildComponent,
    SubChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
