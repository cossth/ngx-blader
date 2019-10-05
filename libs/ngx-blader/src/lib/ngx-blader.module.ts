import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BladeComponent, BladeContainer } from './components';

const DECL = [BladeContainer, BladeComponent];

@NgModule({
  declarations: DECL,
  exports: DECL,
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class NgxBladerModule{
}
