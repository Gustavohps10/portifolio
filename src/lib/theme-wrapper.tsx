'use client'

import { theme } from '@/styles/themes/default'
import StyledComponentsRegistry from './registry'
import { ThemeProvider } from 'styled-components'

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme.light}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}
