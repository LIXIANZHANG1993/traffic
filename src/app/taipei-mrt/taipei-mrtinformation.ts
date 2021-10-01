export interface priceInformation {
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

export interface StationInformation {
  StationID: string;
  StationName: StationName;
  BikeAllowOnHoliday: boolean;
  ScrUpdateTime: string;
  UpdataTime: string;
  VersionID: number;
}

export interface searchInformation {
  startStaion: string;
  endStation: string;
}
