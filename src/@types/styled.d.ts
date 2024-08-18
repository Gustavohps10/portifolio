import 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { colors } from '@sapuris-ui/tokens'

export type Colors = typeof colors & {
  background500: string
  background600: string
  text500: string
}

type ITheme = typeof defaultTheme & {
  colors: Colors
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
