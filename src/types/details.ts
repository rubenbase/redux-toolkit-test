export interface DetailValue {
  name: string
  value: string
}

export interface DetailsMap {
  [key: string]: {
    name: string
    suffix?: string
  }
}

export interface LinkMetadataValue {
  key: string
  urls?: string[]
  baseRoute: string
  name: string
}

export interface LinksMetadataMap {
  [key: string]: {
    name: string
    baseRoute: string
  }
}
