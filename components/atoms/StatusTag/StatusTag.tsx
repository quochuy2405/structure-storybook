import clsx from 'clsx'
import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import Styles from './StatusTag.module.scss'
export type typeTag = 'default' | 'primary' | 'warning' | 'error' | 'secondary'

export interface IStatusTag {
  id?: string
  type?: typeTag
  label?: string
  setTags?: React.Dispatch<React.SetStateAction<Array<IStatusTag>>>
}
const StatusTag: React.FC<IStatusTag> = ({
  id = '',
  type = 'default',
  label,
  setTags = () => void 0
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

  return (
    <div className={classNames} id={id}>
      <p>{label}</p>
      <CgCloseO size={20} onClick={() => handleRemove(id)} />
    </div>
  )
}

export default StatusTag
