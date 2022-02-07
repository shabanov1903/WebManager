import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadModule } from './head/head.module';
import { CreatorComponent } from 'src/app/creator/creator.component';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { CreatorModule } from './creator/creator.module';
import { FiledirList } from 'src/services/FiledirList';
import { RenamerComponent } from './renamer/renamer.component';
import { RenamerModule } from './renamer/renamer.module';
import { AttributerModule } from './attributer/attributer.module';
import { AttributerComponent } from './attributer/attributer.component';


const appRoutes: Routes = [
  {path: '', component: HeadComponent},
  {path: "create", component: CreatorComponent},
  {path: "rename", component: RenamerComponent},
  {path: "attribute", component: AttributerComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HeadModule,
    CreatorModule,
    RenamerModule,
    AttributerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FiledirList],
  bootstrap: [AppComponent]
})
export class AppModule {
}
