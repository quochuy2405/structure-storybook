import clsx from 'clsx'
import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { IoCalendarOutline } from 'react-icons/io5'
import ReactDatePicker, { DateObject } from 'react-multi-date-picker'
import DatePickerHeader from 'react-multi-date-picker/plugins/date_picker_header'
import shortid from 'shortid'
import Styles from './DatePicker.module.scss'
export interface ITexFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  name: string
  errors?: object
  isRequired?: boolean
  className?: string
}

export interface ICustomeInputProps {
  openCalendar: () => void
  value: string
  className: string
}
const CustomRangeInput: React.FC<ICustomeInputProps> = ({
  openCalendar,
  value,
  ...props
}) => {
  const from = value[0] || ''
  const to = value[1] || ''

  value = from && to ? 'from ' + from + ', to ' + to : from

  return <input type="text" onFocus={openCalendar} value={value} {...props} />
}

const DatePicker: React.FC<ITexFieldProps> = ({
  title,
  errors = {},
  isRequired = false,
  className
}) => {
  const classNames = clsx(Styles.DatePicker, {
    [className as string]: className
  })

  return (
    <div>
      {title && (
        <div className={Styles.TitleBox}>
          {isRequired && <GoPrimitiveDot className={Styles.DotRequired} />}
          <p className={Styles.Title}>{title}</p>
        </div>
      )}
      <label className={classNames}>
        <ReactDatePicker
          plugins={[
            <DatePickerHeader
              key={shortid.generate()}
              style={{ backgroundColor: '#e35353' }}
            />
          ]}
          mapDays={({
            date,
            today,
            selectedDate,
            currentMonth,
            isSameDate
          }: DateObject &
            (DateObject | DateObject[]) &
            object &
            ((arg1: DateObject, arg2: DateObject) => boolean) &
            any) => {
            const props = {} as any

            props.style = {
              width: '27px',
              height: '27px',
              gap: '3px',
              borderRadius: '100rem',
              color: 'black',
              backgroundColor:
                date.month.index === currentMonth.index ? '#ebebeb87' : ''
            }

            if (isSameDate(date, today))
              props.style = {
                backgroundColor: 'white',
                color: '#e35353',
                fontWeight: '600',
                width: '27px',
                height: '27px'
              }
            if (isSameDate(date, selectedDate))
              props.style = {
                ...props.style,
                color: 'white',
                backgroundColor: '#e35353',
                boxShadow: 'none',
                width: '27px',
                height: '27px'
              }

            return props
          }}
          render={(value: string, openCalendar: () => void) => (
            <CustomRangeInput
              value={value}
              openCalendar={openCalendar}
              className={Styles.resetInput}
            />
          )}
        />
        <IoCalendarOutline size={24} className={Styles.icon} />
      </label>
      {!!Object.keys(errors).length &&
        Object.keys(errors)?.map((key) => (
          <p key={shortid.generate()} className={Styles.TextError}>
            {errors[key as keyof typeof errors]}
          </p>
        ))}
    </div>
  )
}

export default DatePicker
