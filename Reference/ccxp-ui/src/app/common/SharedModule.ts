import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule, MatGridListModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { SearchHealthCareProviderService } from "../home/home.service";
import { QueryApi } from "./request/QueryApi";
import {RatingModule} from "ngx-rating";
import {AvatarModule} from "ngx-avatar";
import { CommonPipesModule } from "./pipes/pipesModule";
import { Step } from "./steps-form/step";
import { CommonUtils } from "./CommonUtils";
import { DataService } from "./DataService";
import {AutoTabSet} from "./auto-completer-tabs/auto-tab-set";
import {AutoTab} from "./auto-completer-tabs/auto-tab";

export function customLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    Step,
    AutoTabSet,
    AutoTab
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AvatarModule,
    RatingModule,
    CommonPipesModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AvatarModule,
    RatingModule,
    CommonPipesModule,
    Step,
    MatCheckboxModule,
    MatExpansionModule,
    AutoTabSet,
    AutoTab,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  providers: [SearchHealthCareProviderService, QueryApi, CommonUtils, DataService]
})



export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule
    };
  }
}
