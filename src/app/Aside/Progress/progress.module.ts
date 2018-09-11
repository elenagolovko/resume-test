import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress.component';
import { InfoService } from '../../data/info.service';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ProgressComponent
  ],
  exports: [
    ProgressComponent,
  ],
  providers: [
    InfoService
  ]
})

export class ProgressModule {}