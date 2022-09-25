import clsx from 'clsx'
import React, { ReactNode } from 'react'
import Styles from './ButtonIcon.module.scss'

export interface IButtonIconProps {
  className?: string
  children?: ReactNode
}

const ButtonIcon: React.FC<IButtonIconProps> = ({ className, children }) => {
  const classNames = clsx(Styles.ButtonIcon, {
    [className as string]: className
  })
  return <div className={classNames}>{children}</div>
}

export default ButtonIcon
