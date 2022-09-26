import clsx from 'clsx'
import Styles from './Card.module.scss'
import React, { ReactNode } from 'react'
export interface ICardProps {
  className?: string
  children?: ReactNode
}

const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  ({ children, className, ...props }, ref) => {
    const classNames = clsx(Styles.Card, {
      className: className
    })
    return (
      <div ref={ref} className={classNames} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'card'

export default Card
