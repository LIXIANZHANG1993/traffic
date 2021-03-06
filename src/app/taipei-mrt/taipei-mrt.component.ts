import { filter, map } from 'rxjs/operators';
import { taipeiMRTService } from './taipeiMRT.service';
import { Component, OnInit } from '@angular/core';
import {
  StationInformation,
  priceInformation,
  searchInformation,
} from './taipei-mrtinformation';

@Component({
  selector: 'app-taipei-mrt',
  templateUrl: './taipei-mrt.component.html',
  styleUrls: ['./taipei-mrt.component.css'],
})
export class TaipeiMRTComponent implements OnInit {
  constructor(private taipeiMRTsvc: taipeiMRTService) {}

  ngOnInit(): void {
    this.taipeiMRTsvc
      .getStationInformation()
      .subscribe((data) => (this.station = data));
    //.subscribe((data) => data.filter((result) => this.station.push(result)));
  }

  station: StationInformation[] = [];

  queryInformation: searchInformation = {
    startStaion: '',
    endStation: '',
  };

  priceResultInformation: priceInformation[] = [];

  doClean() {
    this.priceResultInformation = [];
    this.queryInformation.startStaion = '';
    this.queryInformation.endStation = '';
  }
  priceInformation() {
    this.taipeiMRTsvc
      .getPriceInformation(this.queryInformation)
      .subscribe((data) => (this.priceResultInformation = data));
  }
}
