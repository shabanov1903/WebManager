import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContentComponent } from './content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  exports: [
    ContentComponent
  ],
  providers: [],
})
export class ContentModule { }
