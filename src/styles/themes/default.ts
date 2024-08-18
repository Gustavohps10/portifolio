import {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@sapuris-ui/tokens'
import { darkTheme } from './dark'
import { lightTheme } from './light'

export const defaultTheme = {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} as const

export const theme = {
  light: {
    colors: lightTheme,
    ...defaultTheme,
  },
  dark: {
    colors: darkTheme,
    ...defaultTheme,
  },
}
