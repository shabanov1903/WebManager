import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FindComponent } from './find.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FindComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  exports: [
    FindComponent
  ],
  providers: [],
})
export class FindModule { }
