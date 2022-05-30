import React, { FC } from 'react'
import Input from 'components/atoms/input'
import Container from 'components/atoms/container'
import { PeopleList } from 'components/organisms/people'
import { useGetPeopleQuery } from 'services/api'

const Home: FC = () => {
  const { data, error, isLoading } = useGetPeopleQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!data) return null

  return (
    <Container>
      <div className="px-4 py-6 mt-4">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">People</h1>
            <p className="mt-2 text-sm text-gray-700">
              A People resource is an individual person or character within the Star Wars
              universe.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Input id="search" name="search" type="text" placeholder="Search people" />
          </div>
        </div>
        <PeopleList people={data.results} />
      </div>
    </Container>
  )
}

export default Home
