import clsx from 'clsx'
import React, { memo } from 'react'
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
>(({ label: title, isError, className, ...props }, ref) => {
  const classNames = clsx(Styles.CheckBoxContainer, {
    [Styles.Error]: isError,
    className: className
  })

  return (
    <label className={classNames}>
      <div className={Styles.CheckBox}>
        <input ref={ref} type="checkbox" className={Styles.Input} {...props} />
        <BsCheckLg className={Styles.isChecked} />
      </div>
      {title && <p className={Styles.CheckBoxLabel}>{title}</p>}
    </label>
  )
})
CheckBox.displayName = 'check_box'
export default memo(CheckBox)
