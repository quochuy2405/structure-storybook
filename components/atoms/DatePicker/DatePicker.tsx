import React, { forwardRef, MutableRefObject, useEffect, useState } from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { IoCalendarClearOutline } from 'react-icons/io5'
import MultiDatePicker, { DateObject, DatePickerProps } from 'react-multi-date-picker'
import shortid from 'shortid'
import Styles from './DatePicker.module.scss'

export interface IDatePickerProps extends DatePickerProps {
  onChange: (date: Date | Array<Date>) => void
  errors?: object
  value: string | Array<string>
  range?: boolean
  title?: string
  isRequired?: string
  titleClassName?: string
}

const DatePicker: React.FC<IDatePickerProps> = forwardRef<
  MutableRefObject<any> | undefined,
  IDatePickerProps
>(
  (
    {
      titleClassName = 'Date',
      range,
      value,
      errors,
      title,
      isRequired,
      onChange,
      ...props
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ) => {
    const [selected, setSelected] = useState<DateObject | Array<DateObject> | null>(null)
    useEffect(() => {
      if (!value) setSelected(null)
      else {
        if (range) {
          setSelected((value as Array<string>).map((item) => new DateObject(item)))
        } else {
          setSelected(new DateObject(value as string))
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
      <>
        {title && (
          <div className={Styles.TitleBox}>
            {isRequired && <GoPrimitiveDot className={Styles.DotRequired} />}
            <p className={titleClassName}>{title}</p>
          </div>
        )}
        <MultiDatePicker
          {...props}
          range={range}
          value={selected}
          onChange={(date: DateObject | Array<DateObject>) => {
            if (date) {
              if (range) {
                onChange(
                  (date as Array<DateObject>).map((item) => new Date(item.format()))
                )
              } else {
                onChange(new Date((date as DateObject).format()))
              }
              setSelected(date)
            }
          }}
          render={(value: string, openCalendar: () => void) => {
            return (
              <div onClick={openCalendar} className={Styles.DatePicker}>
                <div>{value}</div>
                <IoCalendarClearOutline color="#000" size={20} />
              </div>
            )
          }}
        />
        {errors &&
          !!Object.keys(errors).length &&
          Object.keys(errors)?.map((key) => (
            <p key={shortid.generate()}>{errors[key as keyof typeof errors]}</p>
          ))}
      </>
    )
  }
)
DatePicker.displayName = 'Date_Picker'
export default DatePicker
