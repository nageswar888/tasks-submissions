import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompareProvidersComponent} from "./compare-providers.component/compare-providers.component";
import {SearchResultsComponent} from "./search-results/search-results.component";
import {ProviderComponent} from "./provider/provider.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always' },
  { path:'compare-providers',component:CompareProvidersComponent, runGuardsAndResolvers : 'always' },
  { path:'search-results',component: SearchResultsComponent , runGuardsAndResolvers : 'always' },
  {path:'provider/:id/:type',component:ProviderComponent, runGuardsAndResolvers : 'always'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{onSameUrlNavigation:'reload'});
