import React, { FC, ReactNode } from 'react'
import Navbar from 'components/molecules/navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar
        title="Stars Wiki"
        logoUrl="https://icon-library.com/images/star-wars-icon/star-wars-icon-9.jpg"
      />
      {children}
    </>
  )
}

export default Layout
