import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent }   from './main.component';
import { GoalsSectionModule } from './GoalsSection/goals-section.module'

@NgModule({
    declarations: [ MainComponent ],
    imports: [ BrowserModule, GoalsSectionModule],
    bootstrap:    [ MainComponent ]
})

export class MainModule { }