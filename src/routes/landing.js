import { route } from 'navi'
import React from 'react'
import { Link } from 'react-navi'

import SmallCardLayout from 'components/smallCardLayout'

function Landing() {
  return (
    <SmallCardLayout>
      <h1>Create (Universal) React App</h1>
      <p>Create React App, but with serverless SSR.</p>
      <p>
        <Link href="/another-page">Try another page &raquo;</Link>
      </p>
    </SmallCardLayout>
  )
}

export default route({
  title: 'CURA Firebase Example',
  head: (
    <meta
      name="description"
      content="A demo of a React app with serverless SSR, using Firebase, Styled Components, react-helmet-async and Navi."
    />
  ),
  view: <Landing />,
})
