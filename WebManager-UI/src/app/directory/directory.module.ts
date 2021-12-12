import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DirectoryComponent } from './directory.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementModule } from '../element/element.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ElementModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    DirectoryComponent
  ],
  providers: [],
})
export class DirectoryModule { }
