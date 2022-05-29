import React, { FC, ReactNode } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar
        title="Stars Wiki"
        logoUrl="https://icon-library.com/images/star-wars-icon/star-wars-icon-9.jpg"
      />
      {children}
    </div>
  )
}

export default Layout
