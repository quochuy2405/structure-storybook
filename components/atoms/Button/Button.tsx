import clsx from 'clsx'
import React, { ReactNode } from 'react'
import Styles from './Button.module.scss'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'default' | 'primary' | 'danger' | 'warning'
  outline?: boolean
  type?: 'submit' | 'reset' | 'button'
  className?: string
  icon?: ReactNode
  children?: ReactNode
}

const Button: React.FC<IButtonProps> = ({
  mode = 'default',
  outline,
  className,
  icon,
  children,
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
      {icon && icon}
      <div>{children || 'Default'}</div>
    </button>
  )
}

export default Button
