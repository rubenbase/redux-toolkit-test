import React, { FC } from 'react'

interface NavbarProps {
  logoUrl?: string
  title?: string
}

const Navbar: FC<NavbarProps> = ({ logoUrl, title }) => {
  return (
    <header className="w-full block h-[64px] border-b">
      <div className="mx-auto max-w-7xl w-full h-full">
        <div className="flex items-center h-full">
          <img className="h-full" alt="logo" src={logoUrl} />
          {title && <span className="text-2xl font-bold">{title}</span>}
        </div>
      </div>
    </header>
  )
}

export default Navbar
