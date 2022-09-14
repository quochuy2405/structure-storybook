import clsx from 'clsx'
import React, { forwardRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { IoCalendarOutline } from 'react-icons/io5'
import Styles from './DatePicker.module.scss'
import 'react-datepicker/dist/react-datepicker.css'

export interface ITexFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  name: string
  errors?: Array<string>
  className?: string
}

const DatePicker: React.FC<ITexFieldProps> = ({
  title,
  name,
  errors,
  className,
  ...props
}) => {
  const [startDate, setStartDate] = useState(new Date())
  const classNames = clsx(Styles.DatePicker, { className: className })

  return (
    <label className={classNames}>
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        className={Styles.resetInput}
      />
      <IoCalendarOutline size={24} className={Styles.icon} />
    </label>
  )
}

export default DatePicker
