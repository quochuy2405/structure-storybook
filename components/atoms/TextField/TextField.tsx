import clsx from 'clsx'
import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import shortid from 'shortid'
import Styles from './TextField.module.scss'

export interface ITexFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  name: string
  type?: 'text' | 'password'
  errors?: object
  isRequired?: boolean
  className?: string
}

const TextField: React.FC<ITexFieldProps> = ({
  title,
  name,
  type = 'text',
  errors = {},
  className,
  isRequired = false,
  ...props
}) => {
  const [isShowPass, setIsShowPass] = useState(false)

  const classNames = clsx(Styles.Input, {
    [Styles.InputError]: Object.keys(errors).length,
    [className as string]: className
  })

  return (
    <div className={Styles.InputBox}>
      {title && (
        <div className={Styles.TitleBox}>
          {isRequired && <GoPrimitiveDot className={Styles.DotRequired} />}
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
        <input {...props} className={classNames} type={type} name={name} />
      )}

      {!!Object.keys(errors).length &&
        Object.keys(errors)?.map((key) => (
          <p key={shortid.generate()} className={Styles.TextError}>
            {errors[key as keyof typeof errors]}
          </p>
        ))}
    </div>
  )
}

export default TextField
