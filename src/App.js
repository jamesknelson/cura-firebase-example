import React from 'react'
import { View, useLoadingRoute } from 'react-navi'
import { css } from 'styled-components/macro'

import LoadingBar from 'components/loadingBar'

function App() {
  let isLoadingRoute = !!useLoadingRoute()

  return (
    <>
      <View />
      <LoadingBar
        active={isLoadingRoute}
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
        `}
      />
    </>
  )
}

export default App
