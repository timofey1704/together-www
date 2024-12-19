import React from 'react'
import { ButtonProps } from '@/app/types'

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="py-2 bg-blue-500 text-white text-sm font-unbounded rounded-full hover:bg-blue-600 transition-colors duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
