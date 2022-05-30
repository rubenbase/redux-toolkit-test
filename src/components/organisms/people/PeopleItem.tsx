import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from 'features/favorites/favoritesSlice'
import { Person } from 'types/people'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface PeopleListItemProps {
  person: Person
}

const PeopleListItem: FC<PeopleListItemProps> = ({ person }) => {
  const favorites = useSelector(getFavorites)
  const dispatch = useDispatch()

  console.log('favorites', favorites)

  const handleSelect = () => {}

  const isFavorited = favorites[person.url]

  return (
    <tr className="hover:bg-stone-50">
      <td className="border-t border-gray-200 relative py-4 pl-4 sm:pl-6 pr-3 text-sm">
        <div className="font-medium text-gray-900">{person.name}</div>
        <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
          <span>{person.height}cm</span>
          <span className="hidden sm:inline"> · </span>
          <span>{person.mass}kg</span>
        </div>
      </td>
      <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
        {person.height}cm
      </td>
      <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
        {person.eye_color}
      </td>
      <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
        {person.mass}kg
      </td>
      <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
        <div className="block">{person.birth_year}</div>
      </td>
      <td className="border-t border-gray-200 relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium">
        <button
          onClick={() =>
            isFavorited ? dispatch(removeFavorite(person)) : dispatch(addFavorite(person))
          }
          className="flex items-center justify-center  h-5 w-5"
        >
          {isFavorited ? (
            <FaHeart className="h-full w-full fill-red-400 hover:fill-red-500" />
          ) : (
            <FaRegHeart className="h-full w-full fill-stone-300 hover:fill-red-300" />
          )}
        </button>
      </td>
      <td className="border-t border-gray-200 relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium">
        <Link
          className="text-blue-600 hover:underline"
          to={`people/${person.url.replace(/\D/g, '')}`}
        >
          View details
        </Link>
      </td>
    </tr>
  )
}

export default PeopleListItem
