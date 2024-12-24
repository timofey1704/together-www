import React from 'react'
import { ButtonProps } from '@/app/types'

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '' }) => {
  return (
    <button
      className={`py-4 bg-blue-500 text-white text-sm font-unbounded rounded-full px-6 hover:bg-blue-600 transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
