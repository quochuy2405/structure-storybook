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
  const classNames = clsx(Styles.Button, {
    [Styles.ButtonPrimary]: mode === 'primary',
    [Styles.ButtonDanger]: mode === 'danger',
    [Styles.ButtonWarning]: mode === 'warning',
    [Styles.Outline]: outline,
    [className as string]: className
  })
  return (
    <button {...props} className={classNames}>
      {title || 'Default'}
    </button>
  )
}

export default Button
