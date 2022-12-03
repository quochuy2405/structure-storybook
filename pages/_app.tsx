import { getMainLayout } from 'layouts/Layouts/Layouts'
import type { AppProps, NextPage } from '@/types/next'
import '@/styles/global.scss'
import { ReactElement, ReactNode } from 'react'
import AppProvider from 'providers/AppProvider'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayouts = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayouts) {
  const getLayout = Component.getLayout || ((page) => page) || getMainLayout
  const layouts = getLayout(<Component {...pageProps} />)
  return (
    <AppProvider>
      <div className="dark">{layouts}</div>
    </AppProvider>
  )
}

export default App
