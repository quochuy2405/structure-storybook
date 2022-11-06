/* eslint-disable react-hooks/exhaustive-deps */
import { Toast } from '@/components/molecules'
import { IToastProps } from '@/components/molecules/Toast/Toast'
import ToastContext from '@/contexts/ToastContext'
import { useImperativeHandle } from 'react'
import { useRef } from 'react'
import { forwardRef } from 'react'

import { ReactNode, useState, useEffect } from 'react'
interface IToastProviderProps {
  children?: ReactNode
  limit?: number
}

interface IToastList {
  limit?: number
}
type ToastListHandle = {
  addToast: (newToast: Partial<IToastProps>) => void
  closeToast: (id?: string) => void
}
const ToastList = forwardRef<ToastListHandle, IToastList>(({ limit }, ref) => {
  const [toasts, setToasts] = useState<Array<Partial<IToastProps>>>([])

  const closeToast = (id?: string) => {
    setToasts((cur) =>
      cur.map((e) => {
        if (e.id === id) e.isClose = true
        return e
      })
    )
  }
  useEffect(() => {
    const list = toasts.filter((e) => !e.isClose)
    if (list.length < 1) {
      setToasts([])
    }
  }, [toasts.length])

  const addToast = (newToast: Partial<IToastProps>) => {
    const openToasts = toasts.filter((e) => !e.isClose)
    if (openToasts.length > Number(limit)) {
      const toast = toasts.find((e) => e.isClose === false)
      if (toast) closeToast(toast.id)
    }
    setToasts((cur) => [...cur, { ...newToast }])
    setTimeout(() => {
      closeToast(newToast.id)
    }, newToast.duration || 3000)
  }

  useImperativeHandle(ref, () => ({ addToast, closeToast }), [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        width: '100%'
      }}
    >
      {toasts.map((toast: Partial<IToastProps>) => (
        <Toast {...toast} key={toast.id} />
      ))}
    </div>
  )
})

ToastList.displayName = 'toast'

const ToastProvider: React.FC<IToastProviderProps> = ({
  children,
  limit = 4
}) => {
  const toastRef = useRef<ToastListHandle>(null)
  const { addToast, closeToast } = {
    addToast: (newToast: Partial<IToastProps>) =>
      toastRef.current?.addToast(newToast),
    closeToast: (id?: string) => toastRef.current?.closeToast(id)
  }
  return (
    <ToastContext.Provider value={{ addToast, closeToast }}>
      {children}
      <ToastList limit={limit} ref={toastRef} />
    </ToastContext.Provider>
  )
}

export default ToastProvider
