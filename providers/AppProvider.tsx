import React, { ReactNode } from 'react'
import ToastProvider from './ToastProvider'
interface IAppProviderProps {
  children: ReactNode
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>
}

export default AppProvider
