import { IToastProps } from '@/components/molecules/Toast/Toast'
import ToastContext from '@/contexts/ToastContext'
import React from 'react'
import shortid from 'shortid'

const useToast = () => {
  const { addToast } = React.useContext(ToastContext)
  const defaultConfig = (type = 'success') =>
    ({
      id: shortid.generate(),
      type,
      message: '',
      isClose: false
    } as IToastProps)
  const create = (config: Partial<IToastProps>) => {
    addToast({ ...defaultConfig(), ...config })
  }

  return { create }
}

export default useToast
