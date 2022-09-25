import clsx from 'clsx'
import React, { ReactNode } from 'react'
import Styles from './Avator.module.scss'

export interface IAvatorProps {
  className?: string
  children?: ReactNode
}

const Avator: React.FC<IAvatorProps> = ({ className, children }) => {
  const classNames = clsx(Styles.Avator, {
    [className as string]: className
  })

  return (
    <div className={classNames}>
      <div className={Styles.Image}>{children}</div>
    </div>
  )
}

export default Avator
