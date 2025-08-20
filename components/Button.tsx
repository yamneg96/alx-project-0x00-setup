import React from 'react'
import { ButtonProps } from '@/interface'

const Button : React.FC<ButtonProps> = ( { title, styles } ) => {
  const baseStyle = "bg-blue-600 text-white"
  return (
    <button className={` ${baseStyle} ${styles}`}>
      {title}
    </button>
  )
}

export default Button