import { Component } from '@angular/core';
import { InfoService } from '../data/info.service';

// import { Book } from '../data/book';


@Component({
  selector: 'profile-navigation',
  templateUrl: "profile-navigation.component.html",
  styleUrls: ['profile-navigation.component.css']
})

export class ProfileNavigationComponent {
  private info: any = [];
  private keys: any = ["profileStatus"];
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