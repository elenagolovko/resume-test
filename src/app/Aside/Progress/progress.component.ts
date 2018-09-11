import { Component } from '@angular/core';
import { InfoService } from '../../data/info.service';

@Component({
  selector: 'progress-section',
  templateUrl: "progress.component.html",
  styleUrls: ['progress.component.css']
})

export class ProgressComponent {
  private info: any = [];
  private keys: any = ["progress"];
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