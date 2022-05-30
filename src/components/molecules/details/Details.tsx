import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DetailValue, LinkMetadataValue } from 'types/details'
import { getRegexNumberFromString } from 'utils/getRegexNumberFromString'
import { FaChevronLeft } from 'react-icons/fa'
import { Button } from 'components/atoms/button'

interface DetailsProps {
  details: DetailValue[]
  linksMetadata?: LinkMetadataValue[]
  title: string
}

const Details: FC<DetailsProps> = ({ details = [], title, linksMetadata = [] }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="mb-10">
        <Button
          onClick={() => navigate(-1)}
          variant="primary"
          shape="round"
          size="small"
          type="button"
          startElement={<FaChevronLeft />}
        >
          Go back
        </Button>
      </div>

      {/* Title */}
      <div className="flex items-center justify-between text-3xl">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      </div>

      {/* Details */}
      {Boolean(details.length) && (
        <div className="flex flex-wrap mt-4">
          {details.map((detail) => (
            <div key={detail.name} className="mb-4 text-sm">
              <span className="bg-stone-200 rounded-l-md border px-2 py-2">
                {detail.name}:
              </span>
              <span className="mr-4 border border-stone-200  rounded-r px-2 py-2">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Metadata */}
      {Boolean(linksMetadata.length) && (
        <div className="block mt-10">
          {linksMetadata.map((linkMeta) => (
            <div key={linkMeta.key} className="mb-4">
              <div className="font-bold mb-2">{linkMeta.name}</div>
              <ul className="space-y-4">
                {Boolean(linkMeta.urls?.length) ? (
                  linkMeta.urls?.map((url) => (
                    <li key={url} className="block">
                      <Link
                        to={`/${linkMeta.baseRoute}/${getRegexNumberFromString(url)}`}
                        className="ml-4 text-sm bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-lg"
                      >
                        {getRegexNumberFromString(url)}
                      </Link>
                    </li>
                  ))
                ) : (
                  <span>None</span>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Details
