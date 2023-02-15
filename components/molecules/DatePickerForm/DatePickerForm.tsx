import { DatePicker } from '@/components/atoms'
import React, { memo } from 'react'
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form'

export interface IDatePickerFormProps {
  title?: string
  name: string
  className?: string
  methods: UseFormReturn<FieldValues, object>
  color?: string
  titleClassName?: string
}

const DatePickerForm: React.FC<IDatePickerFormProps> = ({
  title,
  name,
  methods,
  titleClassName
}) => {
  return (
    <Controller
      defaultValue={undefined}
      name={name}
      control={methods.control}
      render={({ field }) => (
        <DatePicker title={title} titleClassName={titleClassName} {...field} />
      )}
    />
  )
}

export default memo(DatePickerForm)
