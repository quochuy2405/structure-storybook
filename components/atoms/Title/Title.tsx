import React, { ReactNode } from 'react'
import Styles from './Title.module.scss'

export interface ITitleProps {
  size?: number
  children?: ReactNode
}

const Title: React.FC<ITitleProps> = ({ size, children }) => {
  return (
    <h1 className={Styles.Title} style={{ fontSize: `${size}rem` }}>
      {children}
    </h1>
  )
}

export default Title
