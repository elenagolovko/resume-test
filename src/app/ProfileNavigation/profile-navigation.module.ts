import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { ProfileNavigationComponent } from './profile-navigation.component';
import { InfoService } from '../data/info.service';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ProfileNavigationComponent
  ],
  exports: [
    ProfileNavigationComponent,
  ],
  providers: [
    InfoService
  ]
})

export class ProfileNavigationModule {}