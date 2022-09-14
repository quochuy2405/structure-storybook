import clsx from 'clsx'
import React from 'react'
import Styles from './Button.module.scss'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'default' | 'primary' | 'danger' | 'warning'
  title?: string
  outline?: boolean
  type?: 'submit' | 'reset'
  className?: string
}

const Button: React.FC<IButtonProps> = ({
  mode = 'default',
  outline,
  className,
  title = 'default',
  ...props
}) => {
  const classNames = clsx(Styles.button, {
    [Styles.buttonPrimary]: mode === 'primary',
    [Styles.buttonDanger]: mode === 'danger',
    [Styles.buttonWarning]: mode === 'warning',
    [Styles.outline]: outline,
    className: className
  })
  return (
    <button {...props} className={classNames}>
      {title || 'Default'}
    </button>
  )
}

export default Button
