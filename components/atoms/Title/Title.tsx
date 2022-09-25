import React from 'react'
import Styles from './Title.module.scss'

export interface ITitleProps {
  title?: string
  size?: number
}

const Title: React.FC<ITitleProps> = ({ title, size }) => {
  return (
    <h1 className={Styles.Title} style={{ fontSize: `${size}rem` }}>
      {title}
    </h1>
  )
}

export default Title
