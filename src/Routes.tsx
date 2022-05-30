import React, { FC } from 'react'
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'

import Home from 'components/pages/home'
import People from 'components/pages/people'
import Planets from 'components/pages/planets'
import Layout from 'components/templates/layout'
import Starships from 'components/pages/starships'
import Favorites from 'components/pages/favorites'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="people">
            <Route path=":id" element={<People />} />
          </Route>
          <Route path="planets">
            <Route path=":id" element={<Planets />} />
          </Route>
          <Route path="starships">
            <Route path=":id" element={<Starships />} />
          </Route>
          <Route path="favorites" element={<Favorites />} />
        </RouterRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
