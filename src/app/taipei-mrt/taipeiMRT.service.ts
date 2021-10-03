import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import {
  priceInformation,
  StationInformation,
  searchInformation,
} from './taipei-mrtinformation';

const jsSHA = require('./sha1.js');

@Injectable({
  providedIn: 'root',
})
export class taipeiMRTService {
  constructor(private http: HttpClient) {}

  GetAuthorizationHeader() {
    var AppID = '04c19719331a48f9ba65cfc240cc8723';
    var AppKey = 'GCW_VxJRKH8aaBEsV1R2JMupaWE';

    var GMTString = new Date().toUTCString();
    var ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    var HMAC = ShaObj.getHMAC('B64');
    var Authorization =
      'hmac username="' +
      AppID +
      '", algorithm="hmac-sha1", headers="x-date", signature="' +
      HMAC +
      '"';

    return {
      Authorization: Authorization,
      'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/,
    }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
  }

  getStationInformation(): Observable<StationInformation[]> {
    return this.http.get<StationInformation[]>(
      'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Station/TRTC?$select=stationID%2CStationName&$format=JSON',
      { headers: this.GetAuthorizationHeader() }
    );
  }

  getPriceInformation(obj: searchInformation): Observable<priceInformation[]> {
    return this.http.get<priceInformation[]>(
      `https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TRTC?$filter=contains(OriginStationID,'${obj.startStaion}')%20and%20contains(DestinationStationID,'${obj.endStation}')&format=JSON`,
      {
        headers: this.GetAuthorizationHeader(),
      }
    );
  }
}
