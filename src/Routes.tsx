import React, { FC } from 'react'
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<div>example</div>}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes
