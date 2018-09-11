import { Component } from '@angular/core';
import { InfoService } from '../../data/info.service';

@Component({
  selector: 'enrollments-section',
  templateUrl: "enrollments.component.html",
  styleUrls: ['enrollments.component.css']
})

export class EnrollmentsComponent {
  private info: any = [];
  private keys: any = ["enrollments"];
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