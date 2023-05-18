import React from 'react'

type ButtonProps = {
  small?: boolean
  gray?: boolean
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  style?: React.CSSProperties
  id?: string
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({
  small = false,
  gray = false,
  className = '',
  ...props }: ButtonProps) => {
  const sizeClasses = small ?
    'py-1 px-2'
    :
    'py-2 px-4 font-bold';
  const colorClasses = gray ?
    'bg-gray-400 hover:bg-gray-300 focus-visible:bg-gray-300'
    :
    'bg-blue-500 hover:bg-blue-400 focus-visible:bg-blue-400';
  return (
    <button 
    className={`rounded-full transition-colors duration-200 disabled: cursor-not-allowed disabled:opacity-50 text-white ${sizeClasses} ${colorClasses} ${className}`}
      {...props}
    >
      Post
    </button>
  )
}

export default Button