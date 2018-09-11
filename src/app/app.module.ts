import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { PersonalInfoModule } from './PersonalInfo/personal-info.module'
import { ProfileNavigationModule } from './ProfileNavigation/profile-navigation.module';
import { ProgressModule } from './Aside/Progress/progress.module';
import { GoalsSectionModule } from './Main/GoalsSection/goals-section.module';
import { EnrollmentsModule } from './Aside/Enrollments/enrollments.module';
import { AdviceModule } from './Aside/Advice/advice.module';
// import { AsideModule } from './Aside/aside.module';
// import { MainModule } from './Main/main.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
         BrowserModule,
         PersonalInfoModule,
         ProfileNavigationModule,
         ProgressModule,
         GoalsSectionModule,
         EnrollmentsModule,
         AdviceModule
        ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }