import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { SubChildComponent } from './sub-child/sub-child.component';

const routes: Routes = [
  { path: 'child', component: ChildComponent },
  { path: 'sub-child', component: SubChildComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
