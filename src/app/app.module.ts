import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { PersonalInfoModule} from './PersonalInfo/personal-info.module';
import { ProfileNavigationModule } from './ProfileNavigation/profile-navigation.module';
import { ProgressModule } from './Progress/progress.module'

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PersonalInfoModule, ProfileNavigationModule, ProgressModule],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }