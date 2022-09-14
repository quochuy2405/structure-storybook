import clsx from 'clsx'
import React, { useState } from 'react'
import Styles from './TextField.module.scss'
import shortid from 'shortid'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export interface ITexFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  name: string
  type?: 'text' | 'password'
  errors?: Array<string>
  className?: string
}

const TextField: React.FC<ITexFieldProps> = ({
  title,
  name,
  type = 'text',
  errors = [],
  className,
  ...props
}) => {
  const [isShowPass, setIsShowPass] = useState(false)

  const classNames = clsx(Styles.Input, {
    [Styles.InputError]: errors.length,
    className: className
  })

  return (
    <div className={Styles.InputBox}>
      {title && <p className={Styles.Title}>{title}</p>}
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

      {errors?.map((item) => (
        <p key={shortid.generate()} className={Styles.TextError}>
          {item}
        </p>
      ))}
    </div>
  )
}

export default TextField
