import CheckBox from '@/components/atoms/CheckBox'
import React from 'react'
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form'

export interface ICheckBoxFormProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  className?: string
  methods: UseFormReturn<FieldValues, object>
}

const CheckBoxForm: React.FC<ICheckBoxFormProps> = ({
  label,
  name,
  methods,
  className,
  ...props
}) => {
  return (
    <Controller
      defaultValue=""
      name={name}
      control={methods.control}
      render={({ field }) => (
        <CheckBox label={label} {...props} {...field} className={className} />
      )}
    />
  )
}

export default CheckBoxForm