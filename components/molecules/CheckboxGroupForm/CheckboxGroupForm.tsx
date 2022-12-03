/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Children, cloneElement, ReactElement, useState, useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { json } from 'stream/consumers'

export interface ICheckBoxGroupFormProps {
  label?: string
  className?: string
  //   methods: UseFormReturn<object | any, object>
  children: JSX.Element | JSX.Element[]
  value: Array<string>
  onChange: (selected: Array<string>) => void
}

const CheckboxGroupForm = React.forwardRef<HTMLInputElement, ICheckBoxGroupFormProps>(
  ({ children, value = [], onChange }, ref) => {
    const [selected, setSelected] = useState<string[]>([])
    console.log(value)

    useEffect(() => {
      if (JSON.stringify(value) !== JSON.stringify(selected)) setSelected(value)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(() => {
      onChange(selected)

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    const handleToggleBox = ({
      target: { value, checked }
    }: React.ChangeEvent<HTMLInputElement>) => {
      console.log(value)
      if (checked) {
        setSelected((cur) => [...cur, value])
      } else {
        setSelected((cur) => cur.filter((item) => item !== value))
      }
    }

    return (
      <>
        {Children.map(
          children,
          (child: ReactElement) =>
            child &&
            cloneElement(child, {
              readOnly: true,
              checked: value?.includes(child.props?.value),
              onClick: handleToggleBox
            })
        )}
      </>
    )
  }
)
CheckboxGroupForm.displayName = 'CheckboxGroupForm'

export default CheckboxGroupForm
