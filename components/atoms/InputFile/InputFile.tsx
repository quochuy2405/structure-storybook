import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import Styles from './InputFile.module.scss'

export interface IInputFileProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  name: string
  type?: 'csv' | 'image'
  isRequired?: boolean
  className?: string
  handleReadFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputFile: React.FC<IInputFileProps> = ({
  title,
  name,
  className,
  isRequired = false,
  handleReadFile,
  ...props
}) => {
  const fileRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<HTMLInputElement>()
  const classNames = clsx(Styles.InputFile, {
    [className as string]: className
  })

  useEffect(() => {
    ;(async (ref: React.RefObject<HTMLInputElement>) => {
      if (ref?.current?.files?.length) await setFile(ref.current)
    })(fileRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileRef?.current])
  return (
    <div className={classNames}>
      {title && (
        <div className={Styles.TitleBox}>
          {isRequired && <GoPrimitiveDot className={Styles.DotRequired} />}
          <p className={Styles.Title}>{title}</p>
        </div>
      )}
      <label className={Styles.InputFile}>
        <input
          {...props}
          type="file"
          name={name}
          ref={fileRef}
          accept=".csv"
          onChange={handleReadFile}
          hidden
        />
        <p>
          File is:{!!file?.files?.length && file.files[0].name}
          {file?.files?.length}
        </p>
      </label>
    </div>
  )
}

export default InputFile
