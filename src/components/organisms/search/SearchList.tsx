import React, { FC } from 'react'
import {
  useGetPeopleBySearchQuery,
  useGetPlanetsBySearchQuery,
  useGetStarshipsBySearchQuery,
} from 'services/api'
import SearchItem from './SearchItem'

interface SearchListProps {
  search: string
}

const SearchList: FC<SearchListProps> = ({ search }) => {
  const {
    data: people,
    isLoading: isPeopleLoading,
    isError: isPeopleError,
  } = useGetPeopleBySearchQuery(search)
  const {
    data: planets,
    isLoading: isPlanetsLoading,
    isError: isPlanetsError,
  } = useGetPlanetsBySearchQuery(search)
  const {
    data: starships,
    isLoading: isStarshipsLoading,
    isError: isStarshipsError,
  } = useGetStarshipsBySearchQuery(search)

  return (
    <div className="py-6 flex flex-col gap-4">
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <SearchItem
            title="People"
            data={people}
            isLoading={isPeopleLoading}
            isError={isPeopleError}
            errorMessage="Error searching for people..."
          />

          <SearchItem
            title="Planets"
            data={planets}
            isLoading={isPlanetsLoading}
            isError={isPlanetsError}
            errorMessage="Error searching for planets..."
          />

          <SearchItem
            title="Starships"
            data={starships}
            isLoading={isStarshipsLoading}
            isError={isStarshipsError}
            errorMessage="Error searching for starships..."
          />
        </div>
      </div>
    </div>
  )
}

export default SearchList
