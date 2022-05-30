import React, { FC } from 'react'

type InputBaseProps = React.HTMLAttributes<HTMLInputElement>
interface InputProps extends InputBaseProps {
  label?: string
  name: string
  type: string
}

const Input: FC<InputProps> = ({ label, type = 'text', ...rest }) => {
  return (
    <div>
      {label && (
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="mt-1">
        <input
          type={type}
          className="w-96 shadow-sm block sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
          {...rest}
        />
      </div>
    </div>
  )
}

export default Input
