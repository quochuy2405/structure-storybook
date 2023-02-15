import clsx from 'clsx'
import React, { memo, useState } from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import shortid from 'shortid'
import StatusTag from '../StatusTag'
import { IStatusTag, typeTag } from '../StatusTag/StatusTag'
import Styles from './InputTag.module.scss'
export interface IInputTagProps {
  title?: string
  name: string
  errors?: object
  className?: string
  isRequired?: boolean
}

const InputTag: React.FC<IInputTagProps> = ({
  title,
  name,
  className,
  errors = {},
  isRequired = false
}) => {
  const [text, setText] = useState('')
  const [tags, setTags] = useState<IStatusTag[]>([])
  const types: typeTag[] = ['default', 'primary', 'warning', 'error', 'secondary']
  const classNames = clsx(Styles.InputTag, {
    [Styles.InputTagError]: !!Object.keys(errors).length,
    [className as string]: className
  })

  const handleAddTag = (label: string) => {
    const id = Math.floor(Math.random() * types.length)
    const type = types[id]
    setTags((cur) => [
      ...cur,
      {
        id: shortid.generate(),
        label: label,
        type: type
      }
    ])
    setText('')
  }

  return (
    <>
      {title && (
        <div className={Styles.TitleBox}>
          {isRequired && <GoPrimitiveDot className={Styles.DotRequired} />}
          <p className={Styles.Title}>{title}</p>
        </div>
      )}
      <div className={classNames}>
        {!!tags?.length &&
          tags.map((item) => (
            <StatusTag type={item.type} key={item.id} id={item.id} setTags={setTags}>
              {item?.label || ''}
            </StatusTag>
          ))}
        <input
          type="text"
          name={name}
          value={text}
          placeholder="+ Add tag"
          onChange={(e) => setText(e.target.value)}
          className={Styles.InputText}
          onKeyUp={(e) => e.keyCode === 13 && handleAddTag(text)}
        />
      </div>
      {!!Object.keys(errors).length &&
        Object.keys(errors)?.map((key) => (
          <p key={shortid.generate()} className={Styles.TextError}>
            {errors[key as keyof typeof errors]}
          </p>
        ))}
    </>
  )
}

export default memo(InputTag)
