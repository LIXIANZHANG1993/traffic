import { taipeiMRTService } from './taipeiMRT.service';
import { Component, OnInit } from '@angular/core';
import {
  StationId,
  TaipeiMRTinformation,
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
    this.station = this.taipeiMRTsvc.getStationIdInformation();
  }

  station: StationId[] = [];

  queryInformation: searchInformation = {
    startStaion: '',
    endStation: '',
  };

  resultInformation: TaipeiMRTinformation[] = [];

  doSearch() {
    this.taipeiMRTsvc.searchPrice(this.queryInformation).subscribe((data) => {
      console.log(data);
    });
  }
}
