import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ErrorComponent } from './error/error.component';
import { NgxBladerModule, BladeContainer } from '@cossth/ngx-blader'
const routes : Routes= [
  {path: 'dashboard', component: ErrorComponent},
  {path: 'blade', component: BladeContainer },
  {path: 'comp1', component: Component1Component},
  {path: 'comp2', component: Component2Component},
];
@NgModule({
   declarations: [
      DashboardComponent,
      Component2Component,
      Component1Component,
      ErrorComponent
   ],
   imports: [
      BrowserModule,
      NgxBladerModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      DashboardComponent
   ]
})
export class AppModule {}
