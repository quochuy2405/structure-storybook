import clsx from 'clsx'
import React from 'react'
import Styles from './Switch.module.scss'

export interface IButtonToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultToggle?: boolean
  labelCheck?: string
  labelUnCheck?: string
  className?: string
}

const ButtonToggle: React.FC<IButtonToggleProps> = ({
  className,
  defaultToggle = false,
  labelCheck = 'False',
  labelUnCheck = 'True',
  ...props
}) => {
  const classNames = clsx(Styles.ButtonToggle, {
    className: className
  })

  return (
    <label className={classNames}>
      <input
        type="checkbox"
        defaultChecked={defaultToggle}
        {...props}
        hidden
        className={Styles.Input}
      />
      <p className={Styles.Checked}>{labelCheck}</p>
      <p className={Styles.UnChecked}>{labelUnCheck}</p>
    </label>
  )
}

export default ButtonToggle
