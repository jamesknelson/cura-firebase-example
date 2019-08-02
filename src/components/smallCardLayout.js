import React from 'react'
import styled from 'styled-components/macro'

import { beaconRing, colors, radii, shadows } from 'theme'

const StyledWrapper = styled.div`
  padding: 0 1rem;
`

const StyledMain = styled.main`
  background-color: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  border-radius: ${radii.medium};
  box-shadow: ${shadows.drop()};
  margin: 4rem auto 0;
  max-width: 420px;
  padding: 1rem 2rem;
  position: relative;
  z-index: 0;

  h1 {
    color: ${colors.primary.default};
    font-weight: 800;
    font-size: 1.4rem;
    margin-top: 1rem;
    text-align: center;
  }

  p {
    color: ${colors.text.default};
    font-size: 0.9rem;
    line-height: 1.3rem;
    margin: 1rem 0;
    text-align: center;
  }

  a {
    color: ${colors.primary.default};
    position: relative;
    text-decoration: underline;
    ${beaconRing('::after', '9999px')}
  }
`

const StyledFooter = styled.footer`
  &,
  a {
    color: ${colors.text.alt};
  }

  a {
    position: relative;
    text-decoration: underline;
    ${beaconRing('::after', '9999px')}
  }

  font-size: 0.8rem;
  margin: 0.5rem auto 2rem;
  text-align: center;
`

const SmallCardLayout = ({ children, ...other }) => (
  <StyledWrapper {...other}>
    <StyledMain>{children}</StyledMain>
    <StyledFooter>
      <a href="https://github.com/jamesknelson/cura-firebase-example">
        See source at GitHub
      </a>
    </StyledFooter>
  </StyledWrapper>
)

export default SmallCardLayout
