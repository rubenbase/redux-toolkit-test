import React, { FC, useState } from 'react'
import Container from 'components/atoms/container'
import Details from 'components/molecules/details'
import { useParams } from 'react-router-dom'
import { useGetPeopleByIdQuery } from 'services/api'
import {
  DetailsMap,
  DetailValue,
  LinkMetadataValue,
  LinksMetadataMap,
} from 'types/details'
import { useEffect } from 'react'

const detailsMap: DetailsMap = {
  birth_year: {
    name: 'Birth',
  },
  eye_color: {
    name: 'Eye color',
    suffix: 'eyes',
  },
  gender: {
    name: 'Gender',
  },
  hair_color: {
    name: 'Hair color',
    suffix: 'hair',
  },
  height: {
    name: 'Height',
    suffix: 'cm',
  },
  mass: {
    name: 'Mass',
    suffix: 'kg',
  },
  skin_color: {
    name: 'Skin color',
    suffix: 'skin',
  },
}

const linksMetadataMap: LinksMetadataMap = {
  homeworld: {
    name: 'Planet',
    baseRoute: 'planets',
  },
  starships: {
    name: 'Starships',
    baseRoute: 'starships',
  },
}

const People: FC = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetPeopleByIdQuery(id as string)
  const [details, setDetails] = useState<DetailValue[]>([])
  const [linksMetadata, setLinksMetadata] = useState<LinkMetadataValue[]>([])

  useEffect(() => {
    if (!data) return
    const detailsToUpdate: DetailValue[] = []
    const linksMetadataToUpdate: LinkMetadataValue[] = []

    Object.keys(data).forEach((key: string) => {
      const value = (data as any)[key]

      if (detailsMap[key]) {
        const detailText = `${value} ${detailsMap[key]?.suffix || ''}`

        detailsToUpdate.push({
          name: detailsMap[key].name,
          value: detailText,
        })
      }

      if (linksMetadataMap[key]) {
        linksMetadataToUpdate.push({
          key,
          name: linksMetadataMap[key].name,
          baseRoute: linksMetadataMap[key].baseRoute,
          urls: Array.isArray(value) ? value : [value],
        })
      }
    })

    setDetails(detailsToUpdate)
    setLinksMetadata(linksMetadataToUpdate)
  }, [data])

  if (isLoading) return <Container className="mt-4">Loading the person...</Container>
  if (isError) return <Container className="mt-4">Error loading the person</Container>
  if (!data) return null

  return (
    <Container>
      <div className="flex flex-col px-4 py-6 mt-4">
        <Details title={data.name} details={details} linksMetadata={linksMetadata} />
      </div>
    </Container>
  )
}

export default People
