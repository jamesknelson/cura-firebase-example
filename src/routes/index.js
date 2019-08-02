import { compose, lazy, map, mount, withView } from 'navi'
import React from 'react'
import App from '../App'

export default compose(
  // Wrap the app with a Layout component that renders a loading bar
  // while waiting for the route to load
  withView(<App />),

  mount({
    // Map the root to a lazily loaded landing page
    '/': lazy(() => import('./landing')),

    '/:id': map(async () => {
      // Simulate a delay for downloading something
      await new Promise(resolve => setTimeout(resolve, 500))

      return lazy(() => import('./anotherPage'))
    }),
  }),
)
