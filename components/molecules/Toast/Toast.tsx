/* eslint-disable react-hooks/exhaustive-deps */
import { IconNotice } from '@/assets/icon'
import ToastContext from '@/contexts/ToastContext'
import clsx from 'clsx'
import React, {
  memo,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { IoClose } from 'react-icons/io5'
import Styles from './Toast.module.scss'
export interface IToastProps {
  id?: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
  icon?: ReactNode
  message?: ReactNode | string
  autoClose?: boolean
  className?: string
  button?: ReactNode
  isClose?: boolean
  handleButton?: () => void
}

export type TColor = {
  [x: string]: string
}

const modeColors: TColor = {
  success: ' #1aa174',
  info: '#4c6ad3',
  error: '#e35353',
  warning: '#ff9d09'
}

const modeIconColor: TColor = {
  success: ' #56CFA7',
  info: '#8AA0EE',
  error: '#FDACAC',
  warning: '#FFD89D'
}

const Toast: React.FC<IToastProps> = ({
  type = 'info',
  message = '',
  id,
  className,
  isClose = true,
  button = <></>
}) => {
  const { closeToast } = useContext(ToastContext)
  const ref = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  const classNames = clsx(Styles.Toast, {
    [className as string]: className
  })

  useEffect(() => {
    setContentHeight(ref.current?.clientHeight || 0)
  }, [ref.current])

  return (
    <div
      style={{
        height: (!isClose ? contentHeight : 0) + 'px',
        backgroundColor: modeColors[type],
        padding: !isClose ? '1px' : '0px',
        border: !isClose ? '1px solid #8a92a6b3' : ''
      }}
      className={Styles.BoxToast}
    >
      <div ref={ref} className={classNames}>
        <div className={Styles.ContentToast}>
          <div className={Styles.Icon}>
            <IconNotice color={modeIconColor[type]} />
          </div>
          <p className={Styles.Content}>{message} </p>
        </div>
        <div className={Styles.ButtonToast}>
          {button}

          <IoClose
            size={24}
            className={Styles.IconDelete}
            onClick={() => closeToast(id)}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(Toast)
