import clsx from 'clsx'
import React from 'react'
import Styles from './CheckBox.module.scss'
import { BsCheckLg } from 'react-icons/bs'
interface ICheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name?: string
  isError?: boolean
  className?: string
}

const CheckBox: React.FC<ICheckBoxProps> = ({
  label,
  name,
  isError,
  className,
  ...props
}) => {
  const classNames = clsx(Styles.CheckBoxContainer, {
    [Styles.Error]: isError,
    className: className
  })
  return (
    <div className={classNames}>
      <div className={Styles.CheckBox}>
        <input
          type="checkbox"
          name={name}
          className={Styles.Input}
          {...props}
        />
        <BsCheckLg className={Styles.isChecked} />
      </div>
      {label && <p className={Styles.CheckBoxLabel}>{label}</p>}
    </div>
  )
}

export default CheckBox
