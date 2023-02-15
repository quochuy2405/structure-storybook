import { Select } from '@/components/atoms'
import { IOptionSelect } from '@/components/atoms/Select/Select'
import React, { memo } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

export interface ISelectFormProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  title?: string
  name: string
  className?: string
  options: IOptionSelect[]
  methods: UseFormReturn<object | any, object>
  color?: string
  titleClassName?: string
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
      defaultValue={props.options[0]}
      name={name}
      control={methods.control}
      render={({ field }) => (
        <Select title={title} className={className} {...props} {...field} />
      )}
    />
  )
}

export default memo(SelectForm)
