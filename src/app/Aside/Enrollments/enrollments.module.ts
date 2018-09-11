import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { EnrollmentsComponent } from './enrollments.component';
import { InfoService } from '../../data/info.service';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    EnrollmentsComponent
  ],
  exports: [
    EnrollmentsComponent,
  ],
  providers: [
    InfoService
  ]
})

export class EnrollmentsModule {}