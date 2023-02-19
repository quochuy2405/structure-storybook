import clsx from 'clsx'
import React, { forwardRef, memo, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import shortid from 'shortid'
import Styles from './TextField.module.scss'

const regexOnlyChar = /[a-zA-Z]+/g
const regexOnlyNumber = /^\d+$/
type typeReg = { [x: string]: RegExp }
const optionRegex: typeReg = {
  number: regexOnlyNumber,
  char: regexOnlyChar
}

export interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  name: string
  type?: 'text' | 'password'
  errors?: any
  required?: boolean
  className?: string
  regex?: 'number' | 'char'
}

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  (
    {
      title,
      name,
      type = 'text',
      errors = {},
      className,
      required = false,
      regex,
      ...props
    },
    ref
  ) => {
    const [isShowPass, setIsShowPass] = useState(false)
    const [value, setValue] = useState('')
    const classNames = clsx(Styles.Input, {
      [Styles.InputError]: Object.keys(errors).length,
      [className as string]: className
    })

    const requiredValueByRegex = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (regex && !e.target.value.match(optionRegex[regex])) {
        setValue((val) => val)
      } else {
        setValue(e.target.value)
      }
      if (regex && !e.target.value.matchAll(optionRegex[regex])) {
        setValue('')
      }
    }

    return (
      <div className={Styles.InputBox}>
        {title && (
          <div className={Styles.TitleBox}>
            {required && <GoPrimitiveDot className={Styles.DotRequired} />}
            <p className={Styles.Title}>{title}</p>
          </div>
        )}
        {type === 'password' ? (
          <div className={classNames}>
            <input
              {...props}
              className={Styles.Password}
              type={isShowPass ? 'text' : type}
              name={name}
            />
            {isShowPass ? (
              <AiFillEyeInvisible
                size={20}
                className={Styles.Icon}
                onClick={() => setIsShowPass(false)}
              />
            ) : (
              <AiFillEye
                size={20}
                className={Styles.Icon}
                onClick={() => setIsShowPass(true)}
              />
            )}
          </div>
        ) : (
          <input
            ref={ref}
            onChange={requiredValueByRegex}
            value={value}
            className={classNames}
            type={type}
            name={name}
            {...props}
          />
        )}

        {!!errors?.message && required && (
          <p key={shortid.generate()} className={Styles.TextError}>
            {errors?.message}
          </p>
        )}
      </div>
    )
  }
)
TextField.displayName = 'TextField'
export default memo(TextField)
