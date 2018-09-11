import { Component } from '@angular/core';
import { InfoService } from '../../data/info.service';

@Component({
  selector: 'advice-section',
  templateUrl: "advice.component.html",
  styleUrls: ['advice.component.css']
})

export class AdviceComponent {
  private info: any = [];
  private keys: any = ["advice"];
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