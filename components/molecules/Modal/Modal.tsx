import { Button } from '@/components/atoms'
import clsx from 'clsx'
import React, { Fragment, memo, ReactNode } from 'react'
import Styles from './Modal.module.scss'
export interface IModalProps {
  className?: string
  isOpen: boolean
  children?: ReactNode
  isSubmit?: boolean
  onCancel?: () => void
  onSubmit?: () => void
}
const Modal: React.FC<IModalProps> = ({
  className,
  isOpen,
  children,
  isSubmit = true,
  onCancel,
  onSubmit
}) => {
  const classNames = clsx(Styles.Modal, {
    [Styles.isOpen]: isOpen,
    [className as string]: className
  })
  if (!isOpen) return <Fragment></Fragment>
  return (
    <div className={Styles.ModalBox}>
      <div className={classNames}>
        {children}
        <div className={Styles.Buttons}>
          <Button type="reset" mode="danger" onClick={onCancel}>
            Cancel
          </Button>
          {isSubmit && (
            <Button title="Submit" type="submit" mode="primary" onClick={onSubmit} />
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(Modal)
