import React, { FC, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetPeopleQuery } from 'services/api'
import Container from 'components/atoms/container'
import SearchList from 'components/organisms/search'
import PeopleList from 'components/organisms/people'
import PageHeader from 'components/molecules/page-header'
import SearchForm from 'components/organisms/search-form'
import { Button } from 'components/atoms/button'

const Home: FC = () => {
  const location = useLocation()
  const { data, error, isLoading } = useGetPeopleQuery()
  const [search, setSearch] = useState(() => {
    // To prevent flash on search view when coming from people
    const urlParams = new URLSearchParams(location.search)
    const searchUrlParam = urlParams.get('search')
    if (searchUrlParam) return searchUrlParam
    return ''
  })

  const handleSubmitSearch = (search: string) => {
    setSearch(search)

    if (!location.pathname || typeof window === 'undefined') return

    const urlParams = new URLSearchParams(location.search)
    if (!search) urlParams.delete('search')
    if (search) urlParams.set('search', search)
    window.history.replaceState(null, '', '?' + urlParams.toString())
  }

  useEffect(() => {
    if (!location.pathname) return

    const urlParams = new URLSearchParams(location.search)
    const searchUrlParam = urlParams.get('search')
    if (searchUrlParam) setSearch(searchUrlParam)
  }, [])

  if (isLoading) return <Container className="mt-4">Loading...</Container>
  if (error) return <Container className="mt-4">Error</Container>
  if (!data) return null

  return (
    <Container>
      <div className="px-4 py-6 mt-4">
        <div className="sm:flex sm:items-center">
          <PageHeader
            title="People"
            description="A People resource is an individual person or character within the Star Wars universe."
          />
          <SearchForm onSubmitSearch={handleSubmitSearch} />
        </div>
        {search ? <SearchList search={search} /> : <PeopleList people={data.results} />}
        {search && (
          <Button
            onClick={() => handleSubmitSearch('')}
            className="mt-2"
            variant="primary"
            shape="round"
            size="small"
          >
            Cancel search
          </Button>
        )}
      </div>
    </Container>
  )
}

export default Home
