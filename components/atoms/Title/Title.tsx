import clsx from 'clsx'
import React, { memo, ReactNode } from 'react'
import Styles from './Title.module.scss'

export interface ITitleProps {
  size?: number
  children?: ReactNode
  className?: string
}

const Title: React.FC<ITitleProps> = ({ size, children, className }) => {
  const classNames = clsx(Styles.Title, { [className as string]: className })
  return (
    <h1 className={classNames} style={{ fontSize: `${size}rem` }}>
      {children}
    </h1>
  )
}

export default memo(Title)
