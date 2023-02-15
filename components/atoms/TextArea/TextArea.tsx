import clsx from 'clsx'
import React, { memo } from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import shortid from 'shortid'
import Styles from './TextArea.module.scss'
export interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string
  name: string
  errors?: object
  className?: string
  isRequired?: boolean
}

const TextArea: React.FC<ITextArea> = ({
  title,
  name,
  className,
  errors = {},
  isRequired = false,
  ...props
}) => {
  const classNames = clsx(Styles.TextArea, {
    [Styles.TextAreaError]: !!Object.keys(errors).length,
    [className as string]: className
  })

  return (
    <>
      {title && (
        <div className={Styles.TitleBox}>
          {isRequired && <GoPrimitiveDot className={Styles.DotRequired} />}
          <p className={Styles.Title}>{title}</p>
        </div>
      )}
      <textarea rows={8} name={name} className={classNames} {...props} />
      {!!Object.keys(errors).length &&
        Object.keys(errors)?.map((key) => (
          <p key={shortid.generate()} className={Styles.TextError}>
            {errors[key as keyof typeof errors]}
          </p>
        ))}
    </>
  )
}

export default memo(TextArea)
