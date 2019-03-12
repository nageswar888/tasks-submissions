import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AgmCoreModule } from '@agm/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from "./common/SharedModule";
import { customLoader} from "./common/SharedModule";
import { routing } from "./app.routing";
import {CardComponent} from "./common/card/card.component";
import {PaginationComponent} from "./common/pagination/pagination.component";
import { MapComponent } from './common/map/map.component';
import { CompareComponent } from "./common/compare/compare.component";
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import {CompareProvidersComponent} from "./compare-providers.component/compare-providers.component";
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {InterceptorService} from "./common/interceptor.service";
import {Interceptor} from "./common/interceptor";
import {ProviderComponent} from "./provider/provider.component";
import { SearchResultsComponent } from './search-results/search-results.component';
import {TabSetComponent} from "./common/tab-set/tab-set.component";
import {DialogModalComponent} from "./common/dialog-modal/dialog-modal.component";
import {NavigationComponent} from "./navigation/navigation.component";
import { StickyDirective } from './common/sticky.directive';
import {NgCircleProgressModule} from "ng-circle-progress";
import {ViewMoreComponent} from "./view-more/view-more.component";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    PaginationComponent,
    MapComponent,
    CompareComponent,
    HomeComponent,
    SearchBarComponent,
    CompareProvidersComponent,
    SearchResultsComponent,
    TabSetComponent,
    DialogModalComponent,
    ProviderComponent,
    NavigationComponent,
    StickyDirective,
    ViewMoreComponent
  ],
  imports: [

    SharedModule,
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
    LeafletModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA97kBdNr6EvWiU4D-Jt0senR3uAviuGx0'
    }),
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false
    }),
    routing,
    ScrollToModule.forRoot(),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [InterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
