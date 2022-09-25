import { TextArea } from '@/components/atoms'
import React from 'react'
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form'

export interface ITextAreaFormProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string
  name: string
  className?: string
  methods: UseFormReturn<FieldValues, object>
}

const TextAreaForm: React.FC<ITextAreaFormProps> = ({
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
        <TextArea title={title} className={className} {...props} {...field} />
      )}
    />
  )
}

export default TextAreaForm
