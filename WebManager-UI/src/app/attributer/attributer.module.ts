import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AttributerComponent } from './attributer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AttributerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    AttributerComponent
  ],
  providers: [],
})
export class AttributerModule { }
