import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RenamerComponent } from './renamer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RenamerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    RenamerComponent
  ],
  providers: [],
})
export class RenamerModule { }
