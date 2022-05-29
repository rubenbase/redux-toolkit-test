import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import Layout from 'components/Layout'
import Routes from './Routes'

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
  )
}

export default App
