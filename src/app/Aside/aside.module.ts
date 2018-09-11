import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AsideComponent }   from './aside.component';
import { ProgressModule } from './Progress/progress.module'

@NgModule({
    declarations: [ AsideComponent ],
    imports: [ BrowserModule, ProgressModule],
    bootstrap:    [ AsideComponent ]
})

export class AsideModule { }