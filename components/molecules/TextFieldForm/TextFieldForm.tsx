import TextField from '@/components/atoms/TextField'
import React from 'react'
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form'

export interface ITextFieldFormProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  name: string
  type?: 'text' | 'password'
  className?: string
  methods: UseFormReturn<FieldValues, any>
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
      render={({ field }) => (
        <TextField
          title={title}
          type={type}
          className={className}
          {...props}
          {...field}
        />
      )}
    />
  )
}

export default TextFieldForm
