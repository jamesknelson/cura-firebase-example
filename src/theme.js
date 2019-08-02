import { rgba } from 'polished'
import { css } from 'styled-components/macro'

export const colors = {
  background: {
    canvas: '#f5f7fa',
    card: '#ffffff',
  },
  beacon: {
    focus: 'rgba(68, 136, 221, 0.75)',
    hover: '#d8dbde',
  },
  border: {
    default: '#eaecf2',
    field: '#e0e8ec',
  },
  primary: {
    default: '#102040',
  },
  text: {
    alt: '#607080',
    default: '#282A2C',
    error: '#733939',
    label: '#334455',
    reverse: 'rgba(255, 255, 255, 0.93)',
  },
}

export const dimensions = {
  oneRemInPixels: 16,
}

export const radii = {
  small: '4px',
  medium: '8px',
}

export const shadows = {
  bevel: () => `
    rgba(255, 255, 255, 0.12) 1px 1px 1px inset,
    rgba(0, 0, 0, 0.08) -1px -1px 1px inset
  `,
  drop: (color = colors.primary.default) => `
    0 0 5px 3px ${rgba(color, 0.01)},
    0 0 2px 0px ${rgba(color, 0.02)}
  `,
  ring: color => `
    0 0 0 2px ${color},
    0 0 4px 3px ${rgba(color, 0.4)}
  `,
  sunk: (color = colors.primary.default) => `
    ${rgba(color, 0.03)} 2px 2px 2px inset
  `,
}

export const beaconRing = (selector, radius) =>
  css`
    ${selector} {
      content: ' ';
      position: absolute;
      border-radius: ${radius};
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      z-index: -1;
    }
    :hover${selector} {
      box-shadow: ${shadows.ring(colors.beacon.hover)};
    }
    :focus${selector} {
      box-shadow: ${shadows.ring(colors.beacon.focus)};
    }
  `
