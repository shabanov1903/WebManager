import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CreatorComponent } from './creator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    CreatorComponent
  ],
  providers: [],
})
export class CreatorModule { }
