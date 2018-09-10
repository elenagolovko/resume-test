import { Component } from '@angular/core';
import { InfoService } from '../data/info.service';

// import { Book } from '../data/book';


@Component({
  selector: 'personal-info',
  templateUrl: "personal-info.component.html",
  // styleUrls: ['personal-info.component.css']
})

export class PersonalInfoComponent {
  info: any;
  keys: any;

  constructor(private infoService: InfoService) {
    this.info = [];
    this.keys = ['id', 'avatar', 'personalInfo', 'profileStatus'];

    this.infoService.fetchData()
      .then(() => {
        this.info = this.infoService.getData(this.keys);
      });
  }

}