export interface TaipeiMRTinformation {
  OriginStationID: string;
  OriginStationName: StationName;
  DestinationStationID: string;
  DestinationStationName: StationName;
  TrainType: number;
  Fares: Fare[];
  SrcUpdateTime: string;
  UpdateTime: string;
  VersionID: number;
}

export interface StationName {
  Zh_tw: string;
  En: string;
}

export interface Fare {
  TicketType: number;
  FareClass: number;
  Price: number;
}

export interface StationId {
  stationId: string;
  stationName: StationName;
}

export interface searchInformation {
  startStaion: string;
  endStation: string;
}
