import React, { FC } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
}
const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="sm:flex-auto">
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      {description && <p className="mt-2 text-sm text-gray-700">{description}</p>}
    </div>
  )
}

export default PageHeader
