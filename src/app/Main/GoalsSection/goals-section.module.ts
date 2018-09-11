import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { InfoService } from "../../data/info.service";
import { GoalsSectionComponent } from "./goals-section.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [GoalsSectionComponent],
  exports: [GoalsSectionComponent],
  providers: [InfoService]
})
export class GoalsSectionModule {}
