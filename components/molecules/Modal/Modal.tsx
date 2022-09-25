import { Button } from '@/components/atoms'
import clsx from 'clsx'
import React, { ReactNode } from 'react'
import Styles from './Modal.module.scss'
export interface IModalProps {
  className?: string
  isOpen: boolean
  children?: ReactNode
}
const Modal: React.FC<IModalProps> = ({ className, isOpen, children }) => {
  const classNames = clsx(Styles.Modal, {
    [Styles.isOpen]: isOpen,
    className: className
  })
  return (
    <>
      {isOpen && (
        <div className={Styles.ModalBox}>
          <div className={classNames}>{children}</div>
          <div>
            <Button title="Cancel" type="reset" mode="danger" />
            <Button title="Sumit" type="submit" mode="primary" />
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
