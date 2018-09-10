import { Injectable } from "@angular/core";
import { Logger } from './logger.service';

@Injectable()

export class InfoService {
  private info: any = [];
  private logger: Logger;

  fetchData () {
    return fetch('../info.json')
      .then(response => response.json())
      .then(data => {
        this.info = data;
      })
      .catch(err => {
        this.logger.error(err);
        throw err;
      })
  }

  getData(keys: any): any {
    let neededInfo: any = {};

    for (let key in keys) {
      neededInfo[keys[key]] = this.info[keys[key]];
    }
    return neededInfo;
  }
}