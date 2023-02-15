import clsx from 'clsx'
import React, { memo, ReactNode } from 'react'
import Styles from './Avatar.module.scss'

export interface IAvatarProps {
  className?: string
  children?: ReactNode
}

const Avatar: React.FC<IAvatarProps> = ({ className, children }) => {
  const classNames = clsx(Styles.Avatar, {
    [className as string]: className
  })

  return (
    <div className={classNames}>
      <div className={Styles.Image}>{children}</div>
    </div>
  )
}

export default memo(Avatar)
