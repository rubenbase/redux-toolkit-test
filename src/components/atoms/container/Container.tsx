import React, { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`mx-auto max-w-7xl w-full ${className}`}>{children}</div>
}

export default Container
