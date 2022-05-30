import React from 'react'
import clsx from 'clsx'

import { ButtonProps, ButtonShape, ButtonSize, ButtonVariant } from './types'

const btnPaddingPill = {
  [ButtonSize.Mini]: 'py-1.5 px-4',
  [ButtonSize.Small]: 'py-2.5 px-5',
  [ButtonSize.Medium]: 'py-3.5 px-7',
  [ButtonSize.Large]: 'py-4 px-9',
}

const btnPadding = {
  [ButtonSize.Mini]: 'py-1.5 px-2',
  [ButtonSize.Small]: 'py-2.5 px-3',
  [ButtonSize.Medium]: 'py-3.5 px-4',
  [ButtonSize.Large]: 'py-4 px-5',
}

const btnHeight = {
  [ButtonSize.Mini]: 'h-7',
  [ButtonSize.Small]: 'h-10',
  [ButtonSize.Medium]: 'h-[52px]',
  [ButtonSize.Large]: 'h-[60px]',
}
const btnWidth = {
  [ButtonSize.Mini]: 'w-7',
  [ButtonSize.Small]: 'w-10',
  [ButtonSize.Medium]: 'w-[52px]',
  [ButtonSize.Large]: 'w-[60px]',
}

const btnFontSize = {
  [ButtonSize.Mini]: 'text-xs',
  [ButtonSize.Small]: 'text-sm',
  [ButtonSize.Medium]: 'text-base',
  [ButtonSize.Large]: 'text-lg',
}

const btnVariant = {
  [ButtonVariant.Primary]: 'bg-black text-white hover:bg-stone-900 active:bg-stone-700',
  [ButtonVariant.Secondary]:
    'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-500',
  [ButtonVariant.Tertiary]: 'text-black hover:bg-stone-100 active:bg-stone-200',
  [ButtonVariant.Outline]:
    'text-black border border-blue-600 hover:bg-blue-50 active:bg-blue-100',
  [ButtonVariant.Minimal]: 'text-black hover:text-stone-500',
}

const btnRadius = {
  [ButtonShape.Square]: '',
  [ButtonShape.Round]: 'rounded',
  [ButtonShape.Pill]: 'rounded-full',
  [ButtonShape.Circle]: 'rounded-full',
}

const animation = 'transition-colors duration-200'

const Button = ({
  children,
  endElement,
  startElement,
  className = '',
  type = 'button',
  size = ButtonSize.Medium,
  shape = ButtonShape.Square,
  variant = ButtonVariant.Primary,
  ...rest
}: ButtonProps) => {
  const btnStyle = clsx(
    '',
    btnRadius[shape],
    btnFontSize[size],
    btnVariant[variant],
    btnHeight[size],
    true && animation,
    shape === ButtonShape.Pill
      ? btnPaddingPill[size]
      : shape !== ButtonShape.Circle
      ? btnPadding[size]
      : btnWidth[size]
  )

  return (
    <button
      type={type}
      className={`inline-flex h-fit whitespace-nowrap items-center justify-center ${btnStyle} ${className}`}
      {...rest}
    >
      {startElement}
      <span className="px-2">{children}</span>
      {endElement}
    </button>
  )
}

export default Button
