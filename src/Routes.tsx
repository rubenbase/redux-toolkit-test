import React, { FC } from 'react'
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'

import Home from './components/pages/home'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes
