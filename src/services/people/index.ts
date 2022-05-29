import { client } from 'services/client'

export const getPeople = (page: number = 1) => {
  return client.get(`people/${page}`)
}
