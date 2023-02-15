import clsx from 'clsx'
import React, { memo, ReactNode } from 'react'
import { CgCloseO } from 'react-icons/cg'
import Styles from './StatusTag.module.scss'
export type typeTag = 'default' | 'primary' | 'warning' | 'error' | 'secondary'

export interface IStatusTag extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  type?: typeTag
  children?: ReactNode
  setTags?: React.Dispatch<React.SetStateAction<Array<IStatusTag>>>
  close?: boolean
  color?: string
  label?: string
}
const StatusTag: React.FC<IStatusTag> = ({
  id = '',
  type = 'default',
  close = true,
  color,
  children,
  setTags = () => void 0,
  ...props
}) => {
  const classNames = clsx(Styles.StatusTag, {
    [Styles.Primary]: type === 'primary',
    [Styles.Secondary]: type === 'secondary',
    [Styles.Warning]: type === 'warning',
    [Styles.Error]: type === 'error'
  })

  const handleRemove = (id: string) => {
    setTags((cur) => cur.filter((e) => e.id !== id))
  }
  console.log(color)
  return (
    <div className={classNames} id={id} style={{ backgroundColor: color }} {...props}>
      {children}
      {close && <CgCloseO size={20} onClick={() => handleRemove(id)} />}
    </div>
  )
}

export default memo(StatusTag)
