import clsx from 'clsx'
import React, { useState } from 'react'
import Styles from './Select.module.scss'
import shortid from 'shortid'
import { IoIosArrowDropdown } from 'react-icons/io'
export interface IOptions {
  [x: string]: string
}

export interface ISelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  title?: string
  name: string
  errors?: Array<string>
  options: Array<IOptions>
  className?: string
}

const Select: React.FC<ISelectProps> = ({
  title,
  name = 'name',
  errors = [],
  options = {},
  className,
  ...props
}) => {
  const classNames = clsx(Styles.Select, {
    [Styles.SelectError]: errors.length,
    className: className
  })

  return (
    <div className={Styles.SelectBox}>
      {title && <p className={Styles.Title}>{title}</p>}
      <label className={classNames}>
        <select {...props} name={name} id={name}>
          {Object.keys(options).map((value) => (
            <option key={shortid.generate()} value={value}>
              {options[value as keyof typeof options]}
            </option>
          ))}
        </select>
        <label htmlFor={name}>
          <IoIosArrowDropdown size={24} />
        </label>
      </label>

      {errors?.map((item) => (
        <p key={shortid.generate()} className={Styles.TextError}>
          {item}
        </p>
      ))}
    </div>
  )
}

export default Select
