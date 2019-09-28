import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BladeContainer } from './container/container.component';
import { BladeComponent } from './blade/blade.component';
import { BrowserModule } from '@angular/platform-browser';

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
