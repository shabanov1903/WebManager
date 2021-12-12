import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ElementComponent } from './element.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ElementComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  exports: [
    ElementComponent
  ],
  providers: [],
})
export class ElementModule { }
