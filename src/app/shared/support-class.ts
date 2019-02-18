export class City {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  images?: string[];
}

export class Center {
  latitude: number;
  longitude: number;
}

export class MapBig {
  name?: string;
  scale?: number;
  center: Center;
  markers: City[];
}