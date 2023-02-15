import clsx from 'clsx'
import React, { memo } from 'react'
import Styles from './Switch.module.scss'

export interface IButtonToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelCheck?: string
  labelUnCheck?: string
  className?: string
}

const ButtonToggle: React.FC<IButtonToggleProps> = ({
  className,
  labelCheck = 'True',
  labelUnCheck = 'False',
  ...props
}) => {
  const classNames = clsx(Styles.ButtonToggle, {
    className: className
  })

  return (
    <label className={classNames}>
      <input type="checkbox" {...props} hidden className={Styles.Input} readOnly />
      <p className={Styles.UnChecked}>{labelUnCheck}</p>
      <p className={Styles.Checked}>{labelCheck}</p>
    </label>
  )
}

export default memo(ButtonToggle)
