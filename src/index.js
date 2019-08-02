import { createBrowserNavigation } from 'navi'
import React from 'react'
import ReactDOM from 'react-dom'
import { NaviProvider, View } from 'react-navi'
import NaviHelmetProvider from 'react-navi-helmet-async'

import GlobalResetStyle from './reset.css'
import routes from './routes'

async function main() {
  const navigation = createBrowserNavigation({
    routes,
  })

  // Wait until any data required by the route has loaded.
  await navigation.getRoute()

  ReactDOM.hydrate(
    <NaviHelmetProvider>
      <NaviProvider navigation={navigation}>
        {/*
          Putting the global styles any deeper in the tree causes them to
          re-render on each navigation, even in production.
          */}
        <GlobalResetStyle />

        <View />
      </NaviProvider>
    </NaviHelmetProvider>,
    document.getElementById('root'),
  )
}

main()
