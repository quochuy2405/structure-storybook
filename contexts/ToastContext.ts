import { IToastProps } from '@/components/molecules/Toast/Toast'
import { createContext } from 'react'
interface IToastContextProps {
  closeToast: (id?: string) => void
  addToast: (newToast: Partial<IToastProps>) => void
}
const ToastContext = createContext({} as IToastContextProps)

export default ToastContext
