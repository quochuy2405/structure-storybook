import clsx from 'clsx'
import React, { ReactNode } from 'react'
import Styles from './ButtonIcon.module.scss'

export interface IButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
}

const ButtonIcon: React.FC<IButtonIconProps> = ({
  className,
  children,
  ...props
}) => {
  const classNames = clsx(Styles.ButtonIcon, {
    [className as string]: className
  })
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

export default ButtonIcon
