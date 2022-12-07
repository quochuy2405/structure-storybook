import clsx from 'clsx'
import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import Styles from './CheckBox.module.scss'
interface ICheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  label?: string
  name?: string
  isError?: boolean
  className?: string
}

const CheckBox: React.FC<ICheckBoxProps> = React.forwardRef<
  HTMLInputElement,
  ICheckBoxProps
>(({ label, isError, className, ...props }, ref) => {
  const classNames = clsx(Styles.CheckBoxContainer, {
    [Styles.Error]: isError,
    className: className
  })

  return (
    <div className={classNames}>
      <div className={Styles.CheckBox}>
        <input ref={ref} type="checkbox" className={Styles.Input} {...props} />
        <BsCheckLg className={Styles.isChecked} />
      </div>
      {label && <p className={Styles.CheckBoxLabel}>{label}</p>}
    </div>
  )
})
CheckBox.displayName = 'check_box'
export default CheckBox
