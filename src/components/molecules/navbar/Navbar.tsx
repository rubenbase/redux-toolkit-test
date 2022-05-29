import React, { FC } from 'react'
import Container from 'components/atoms/Container'

interface NavbarProps {
  logoUrl?: string
  title?: string
}

const Navbar: FC<NavbarProps> = ({ logoUrl, title }) => {
  return (
    <header className="w-full block h-[64px] border-b">
      <Container className="h-full">
        <div className="flex items-center h-full">
          <img className="h-full" alt="logo" src={logoUrl} />
          {title && <span className="text-2xl font-bold">{title}</span>}
        </div>
      </Container>
    </header>
  )
}

export default Navbar
