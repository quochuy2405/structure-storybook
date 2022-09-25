import Select from '@/components/atoms/Select'
import { IOptionSelect } from '@/components/atoms/Select/Select'
import React from 'react'
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form'

export interface ISelectFormProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  name: string
  className?: string
  options: IOptionSelect[]
  methods: UseFormReturn<FieldValues, object>
}

const SelectForm: React.FC<ISelectFormProps> = ({
  title,
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
        <Select title={title} className={className} {...props} {...field} />
      )}
    />
  )
}

export default SelectForm
