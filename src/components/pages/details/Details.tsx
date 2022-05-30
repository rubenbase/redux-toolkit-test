import React, { FC } from 'react'
import Container from 'components/atoms/container'
import { useParams } from 'react-router-dom'
import { useGetPeopleByIdQuery } from 'services/api'

const Details: FC = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetPeopleByIdQuery(id as string)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (!data) return null

  return (
    <Container>
      <div className="flex flex-col px-4 py-6 mt-4">
        <div className="text-3xl">{data.name}</div>
        <div className="flex divide-x-2 mt-2">
          <div className="pr-2">{data.birth_year}</div>
          <div className="px-2">{data.eye_color} eyes</div>
          <div className="px-2">{data.gender}</div>
          <div className="px-2">{data.hair_color} hair</div>
          <div className="px-2">{data.height}cm</div>
          <div className="px-2">{data.mass}kg</div>
          <div className="px-2">{data.skin_color} skin</div>
        </div>
        <div className="mt-2">
          <div className="border ">
            {data.starships?.map((starship) => {
              console.log('starship', starship)

              return <div>{starship?.name}</div>
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Details
