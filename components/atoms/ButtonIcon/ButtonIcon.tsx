import clsx from 'clsx'
import React, { ReactNode } from 'react'
import Styles from './ButtonIcon.module.scss'

export interface IButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
  mode?: 'default' | 'primary' | 'danger' | 'warning'
}

const ButtonIcon: React.FC<IButtonIconProps> = ({
  className,
  children,
  mode = 'default',
  ...props
}) => {
  const classNames = clsx(Styles.ButtonIcon, {
    [Styles.ButtonPrimary]: mode === 'primary',
    [Styles.ButtonDanger]: mode === 'danger',
    [Styles.ButtonWarning]: mode === 'warning',
    [className as string]: className
  })
  return (
    <button className={classNames} {...props}>
      {children && children}
    </button>
  )
}

export default ButtonIcon
