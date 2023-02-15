import store from '@/features/store'
import { SnackbarProvider } from 'notistack'
import React, { ReactNode } from 'react'
import { FcApproval, FcDislike, FcIdea, FcInfo } from 'react-icons/fc'
import { Provider } from 'react-redux'
interface IAppProviderProps {
  children: ReactNode
}
const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  return (
    <SnackbarProvider
      iconVariant={{
        success: <FcApproval size={20} />,
        error: <FcDislike size={20} />,
        warning: <FcIdea size={20} />,
        info: <FcInfo size={20} />
      }}
    >
      <Provider store={store}>{children}</Provider>
    </SnackbarProvider>
  )
}

export default AppProvider
