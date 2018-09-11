import { Component } from "@angular/core";
import { InfoService } from "../../data/info.service";

@Component({
  selector: "goals-section",
  templateUrl: "goals-section.component.html",
  styleUrls: ["goals-section.component.css"]
})
export class GoalsSectionComponent {
  private info: any = [];
  private keys: any = ["goals"];
  private isDataAvailable: boolean;

  constructor(private infoService: InfoService) {
    this.isDataAvailable = false;
  }

  ngOnInit() {
    this.infoService
      .fetchData()
      .then(() => {
        this.info = this.infoService.getData(this.keys);
      })
      .then(() => {
        this.isDataAvailable = true;
      });
  }
}
