'use client'

import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styled'

export type ButtonProps = S.ButtonContainerProps &
  ButtonHTMLAttributes<HTMLButtonElement>

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(({ children, ...props }: ButtonProps, forwardedRef) => (
  <S.ButtonContainer {...props} ref={forwardedRef}>
    {children}
  </S.ButtonContainer>
))
Button.displayName = 'Button'
