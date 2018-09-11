import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { AdviceComponent } from './advice.component';
import { InfoService } from '../../data/info.service';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AdviceComponent
  ],
  exports: [
    AdviceComponent,
  ],
  providers: [
    InfoService
  ]
})

export class AdviceModule {}