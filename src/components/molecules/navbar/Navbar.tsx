import React, { FC } from 'react'
import Container from 'components/atoms/container'
import { Link } from 'react-router-dom'
import { Routes } from 'types/routes'

interface NavbarProps {
  logoUrl?: string
  title?: string
}

const Navbar: FC<NavbarProps> = ({ logoUrl, title }) => {
  return (
    <header className="w-full block h-[64px] border-b pr-4">
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left Logo */}

          <div className="flex items-center h-full">
            <img className="h-full" alt="logo" src={logoUrl} />
            <Link to="/">
              {title && <span className="text-2xl font-bold">{title}</span>}
            </Link>
          </div>
          {/* Right Nav */}
          <nav>
            <Link className="font-bold" to="/favorites">
              Favorites
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
