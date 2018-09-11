import { Component } from '@angular/core';
import { InfoService } from '../data/info.service';


@Component({
  selector: 'personal-info',
  templateUrl: "personal-info.component.html",
  styleUrls: ['personal-info.component.css']
})

export class PersonalInfoComponent {
  private info: any = [];
  private keys: any = ["id", "avatar", "personalInfo", "profileStatus"];
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