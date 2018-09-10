import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { PersonalInfoComponent } from './personal-info.component';
import { InfoService } from '../data/info.service';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    PersonalInfoComponent
  ],
  exports: [
    PersonalInfoComponent,
  ],
  providers: [
    InfoService
  ]
})

export class PersonalInfoModule {}