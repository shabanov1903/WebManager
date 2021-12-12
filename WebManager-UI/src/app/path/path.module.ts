import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PathComponent } from './path.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PathComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  exports: [
    PathComponent
  ],
  providers: [],
})
export class PathModule { }
