export interface Person {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export type People = Person[]

export interface PeopleResponse {
  results: People
}

export type PersonDetails = Pick<
  Person,
  'birth_year' | 'eye_color' | 'gender' | 'hair_color' | 'height' | 'mass' | 'skin_color'
>
