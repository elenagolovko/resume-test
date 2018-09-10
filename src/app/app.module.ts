import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { PersonalInfoModule} from './PersonalInfo/personal-info.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PersonalInfoModule],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }