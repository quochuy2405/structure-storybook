/* eslint-disable react-hooks/exhaustive-deps */
import Toast from '@/components/molecules/Toast'
import { IToastProps } from '@/components/molecules/Toast/Toast'
import ToastContext from '@/contexts/ToastContext'
import { ReactNode, useState, useEffect } from 'react'
interface IToastProviderProps {
  children?: ReactNode
  limit?: string
}

const ToastProvider: React.FC<IToastProviderProps> = ({
  children,
  limit = 4
}) => {
  const [toasts, setToasts] = useState<Array<Partial<IToastProps>>>([])

  const addToast = (newToast: Partial<IToastProps>) => {
    const openToasts = toasts.filter((e) => !e.isClose)
    if (openToasts.length > limit) {
      const toast = toasts.find((e) => e.isClose === false)
      if (toast) closeToast(toast.id)
    }
    setToasts((cur) => [...cur, { ...newToast }])
    setTimeout(() => {
      closeToast(newToast.id)
    }, newToast.duration || 3000)
  }
  useEffect(() => {
    const list = toasts.filter((e) => !e.isClose)
    if (list.length < 1) {
      setToasts([])
    }
  }, [toasts.length])

  const closeToast = (id?: string) => {
    setToasts((cur) =>
      cur.map((e) => {
        if (e.id === id) e.isClose = true
        return e
      })
    )
  }

  return (
    <ToastContext.Provider value={{ addToast, closeToast }}>
      {children}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {toasts.map((toast: Partial<IToastProps>) => (
          <Toast {...toast} key={toast.id} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider
