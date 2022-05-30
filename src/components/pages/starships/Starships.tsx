import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetStarshipByIdQuery } from 'services/api'
import Container from 'components/atoms/container'
import Details from 'components/molecules/details'
import { DetailsMap, DetailValue } from 'types/details'

const detailsMap: DetailsMap = {
  name: {
    name: 'Name',
  },
  model: {
    name: 'Model',
  },
  starship_class: {
    name: 'Class',
  },
  crew: {
    name: 'Crew',
  },
  consumables: {
    name: 'Consumables',
  },
  passengers: {
    name: 'Passengers',
  },
}

const Starships: FC = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetStarshipByIdQuery(id as string)
  const [details, setDetails] = useState<DetailValue[]>([])

  useEffect(() => {
    if (!data) return
    const detailsToUpdate: DetailValue[] = []

    Object.keys(data).forEach((key: string) => {
      const value = (data as any)[key]

      if (detailsMap[key]) {
        const detailText = `${value} ${detailsMap[key]?.suffix || ''}`

        detailsToUpdate.push({
          name: detailsMap[key].name,
          value: detailText,
        })
      }
    })

    setDetails(detailsToUpdate)
  }, [data])

  if (isLoading) return <Container className="mt-4">Loading starship...</Container>
  if (isError) return <Container className="mt-4">Error loading starship</Container>
  if (!data) return null

  return (
    <Container>
      <div className="flex flex-col px-4 py-6 mt-4">
        <Details title={data.name} details={details} />
      </div>
    </Container>
  )
}

export default Starships
