import { map, route } from 'navi'
import React from 'react'
import { Link, useCurrentRoute } from 'react-navi'

import SmallCardLayout from 'components/smallCardLayout'

function Landing() {
  let route = useCurrentRoute()

  return (
    <SmallCardLayout>
      <h1>Create (Universal) React App</h1>
      <p>
        You found the <code>{route.url.pathname}</code> page.
      </p>
      <p>
        <Link href="/">&laquo; go back</Link>
      </p>
    </SmallCardLayout>
  )
}

export default map(request =>
  route({
    title:
      'CURA Firebase Example - ' + request.params.id.replace(/[^\w\s]/g, ''),
    view: <Landing />,
  }),
)
