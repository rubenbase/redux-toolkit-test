import React, { FC } from 'react'
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'

import Details from 'components/pages/details'
import Home from 'components/pages/home'
import Layout from 'components/templates/layout'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="people">
            <Route path=":id" element={<Details />} />
          </Route>
        </RouterRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
