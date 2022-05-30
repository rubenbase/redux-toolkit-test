import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface SearchItemProps {
  isLoading: boolean
  isError: boolean
  title: string
  errorMessage: string
  data:
    | {
        results: {
          name: string
          url: string
        }[]
      }
    | undefined
}

const getRouteFromSearchItemUrl = (url: string) => {
  if (!url) return ''
  return url.split('api/').pop() || ''
}

const SearchItem: FC<SearchItemProps> = ({
  title,
  isLoading,
  isError,
  errorMessage,
  data,
}) => {
  const hasData = Boolean(data?.results?.length)

  return (
    <div>
      <h2 className="font-semibold">{title}</h2>
      <div className="mt-2">
        {!hasData && isLoading && <SearchLoadingSkeleton />}
        {isError && <SearchErrorMessage message={errorMessage} />}
        {hasData && !isLoading && data?.results ? (
          data.results.map((item) => (
            <div key={item.url} className="ml-2 mb-2 flex justify-between items-center">
              <div className="relative flex">
                <Link
                  to={getRouteFromSearchItemUrl(item.url)}
                  className="ml-4 text-sm bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-lg"
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <span>None</span>
        )}
      </div>
    </div>
  )
}

const SearchLoadingSkeleton = () => {
  return (
    <div className="flex flex-1 flex-col space-y-2 h-20">
      <div className="w-6 h-2 bg-stone-300 animate-pulse" />
      <div className="w-12 h-2 bg-stone-300 animate-pulse" />
      <div className="w-4 h-2 bg-stone-300 animate-pulse" />
    </div>
  )
}

const SearchErrorMessage = ({ message }: { message: string }) => {
  return <div className="text-red-500">{message}</div>
}

export default SearchItem
