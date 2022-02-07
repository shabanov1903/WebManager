import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeadComponent } from './head.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PathModule } from '../path/path.module';
import { DirectoryModule } from '../directory/directory.module';
import { ContentModule } from '../content/content.module';
import { FindModule } from '../find/find.module';

@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    PathModule,
    DirectoryModule,
    ContentModule,
    FindModule
  ],
  exports: [
    HeadComponent
  ],
  providers: [],
})
export class HeadModule { }
