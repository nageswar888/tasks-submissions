import {AppComponent} from "../app.component";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatFormFieldModule } from '@angular/material';


import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import { customLoader } from "./SharedModule";
import { routing } from "../app.routing";
import { SearchHealthCareProviderService } from "../home/home.service";
import { QueryApi } from "./request/QueryApi";
import {PaginationComponent} from "./pagination/pagination.component";
import {CardComponent} from "./card/card.component";


export const IMPORTS = [CommonModule,
  BrowserModule,
  HttpClientModule,
  TranslateModule.forRoot(
    {
      loader: {
        provide: TranslateLoader,
        useFactory: customLoader,
        deps: [HttpClient]
      }
    }
  ),
  ReactiveFormsModule,
  FormsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  routing,
  BrowserAnimationsModule
];
export const DECLARATIONS = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  FooterComponent,
  PaginationComponent,
  CardComponent
];
export const PROVIDERS = [
  {provide: APP_BASE_HREF, useValue: '/'},
  SearchHealthCareProviderService,
  QueryApi
];
export const SCHEMAS = [
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
];
export const bootstrap = [];
