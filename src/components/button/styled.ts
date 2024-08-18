import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'

export interface ButtonContainerProps {
  $color?: 'primary' | 'danger'
  $outline?: 'filled' | 'outlined'
}

const BUTTON_COLORS = (
  theme: DefaultTheme,
  color: ButtonContainerProps['$color'] = 'primary',
) =>
  ({
    primary: theme.colors.sapuris500,
    danger: theme.colors.wine500,
  })[color]

const variantStyles = (
  theme: DefaultTheme,
  outline: ButtonContainerProps['$outline'] = 'filled',
  color: ButtonContainerProps['$color'] = 'primary',
) =>
  ({
    filled: css`
      color: ${theme.colors.white};
      background: ${BUTTON_COLORS(theme, color)};
      border: none;

      &:hover {
        filter: brightness(85%);
      }
    `,
    outlined: css`
      color: ${BUTTON_COLORS(theme, color)};
      background: transparent;
      border: 1px solid ${BUTTON_COLORS(theme, color)};

      &:hover {
        color: ${theme.colors.white};
        background: ${BUTTON_COLORS(theme, color)};
      }
    `,
  })[outline]

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: ${(props) => props.theme.radii.md};
  transition: all 0.2s ease;

  cursor: pointer;
  padding: 1.6rem;
  font-weight: bold;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  //variants
  ${({ theme, $outline, $color }) => variantStyles(theme, $outline, $color)}
`
