import React, { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Container from 'components/atoms/container'
import PeopleList from 'components/organisms/people'
import PageHeader from 'components/molecules/page-header'
import { Person } from 'types/people'
import { getFavorites } from 'features/favorites/favoritesSlice'

const Favorites: FC = () => {
  const favorites = useSelector(getFavorites)
  const [data, setData] = useState<Person[]>([])

  useEffect(() => {
    const dataToUpdate: Person[] = []

    Object.keys(favorites).forEach((key) => {
      dataToUpdate.push(favorites[key])
    })

    setData(dataToUpdate)
  }, [favorites])

  return (
    <Container>
      <div className="px-4 py-6 mt-4">
        <div className="sm:flex sm:items-center">
          <PageHeader title="Favorites" description="Your favorite characters" />
        </div>
        <PeopleList people={data} />
      </div>
    </Container>
  )
}

export default Favorites
