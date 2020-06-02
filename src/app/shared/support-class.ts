export class City {
  city: string
  country: string
  latitude: number
  longitude: number
  images?: string[]
}

export class Center {
  latitude: number
  longitude: number
}

export class MapBig {
  name?: string
  scale?: number
  center: Center
  markers: City[]
}

export class InstagramUser {
  id: number
  full_name: string
  profile_picture: string
  username: string
}

export class ImageLightBox {
  src: string
  text?: string
}
