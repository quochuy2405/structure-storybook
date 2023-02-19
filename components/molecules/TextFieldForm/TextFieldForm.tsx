import { TextField } from '@/components/atoms'
import React, { memo } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

export interface ITextFieldFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  name: string
  type?: 'text' | 'password'
  className?: string
  methods: UseFormReturn<any, object>
}

const TextFieldForm: React.FC<ITextFieldFormProps> = ({
  title,
  name,
  type = 'text',
  methods,
  className,
  ...props
}) => {
  return (
    <Controller
      defaultValue=""
      name={name}
      control={methods.control}
      render={({ field, fieldState }) => (
        <TextField
          title={title}
          type={type}
          className={className}
          errors={fieldState.error}
          {...field}
          {...props}
        />
      )}
    />
  )
}

export default memo(TextFieldForm)
