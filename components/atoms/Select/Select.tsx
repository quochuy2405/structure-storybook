import React from 'react'
import Styles from './Select.module.scss'

import { GoPrimitiveDot } from 'react-icons/go'
import ReactSelect from 'react-select'
import shortid from 'shortid'

export interface ISelectProps {
  title?: string
  className?: string
  errors?: object
  isRequired?: boolean
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Select: React.FC<ISelectProps> = ({
  title,
  errors = {},
  isRequired = false,
  className
}) => {
  const customStyles: any = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'white',
      borderRadius: 8,
      border: Object.keys(errors).length
        ? '2px solid #e35353'
        : '2px solid #1aa174',
      boxShadow: 0,
      outline: 0
    }),
    menu: (styles: any) => ({
      ...styles,
      backgroundColor: 'white',
      borderRadius: 4
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: Object.keys(errors).length ? '#e35353' : '#1aa174',
      border: 0
    }),
    indicatorSeparator: (base: any) => ({
      diplay: 'none'
    }),
    option: (styles: any, { isDisabled, isFocused, isSelected }: any) => {
      const color = ['#1aa174']
      return {
        ...styles,
        borderRadius: 4,
        margin: 4,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? color
          : isFocused
          ? color
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? 'white'
          : isFocused
          ? color
            ? 'white'
            : 'black'
          : color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? color
              : color
            : undefined
        }
      }
    }
  }
  return (
    <div>
      {title && (
        <div className={Styles.TitleBox}>
          {isRequired && <GoPrimitiveDot className={Styles.DotRequired} />}
          <p className={Styles.Title}>{title}</p>
        </div>
      )}
      <ReactSelect
        defaultValue={options[0]}
        options={options}
        className={Styles.Select}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,

          colors: {
            ...theme.colors,
            primary: '#1aa174',
            primary25: 'rgba(0, 82, 204, 0.1)'
          }
        })}
      />
      {!!Object.keys(errors).length &&
        Object.keys(errors)?.map((key) => (
          <p key={shortid.generate()} className={Styles.TextError}>
            {errors[key as keyof typeof errors]}
          </p>
        ))}
    </div>
  )
}
export default Select
