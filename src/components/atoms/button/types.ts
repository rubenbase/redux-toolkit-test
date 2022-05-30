import { ReactNode } from 'react'

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit'
}

export enum ButtonShape {
  Pill = 'pill',
  Round = 'round',
  Circle = 'circle',
  Square = 'square',
}

export enum ButtonSize {
  Mini = 'mini',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Minimal = 'minimal',
  Outline = 'outline',
}
export interface ButtonProps extends BaseButtonProps {
  children: ReactNode
  shape?: 'pill' | 'round' | 'circle' | 'square'
  size?: 'mini' | 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'minimal' | 'outline'
  startElement?: ReactNode
  endElement?: ReactNode
  className?: string
}
