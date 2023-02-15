import AppProvider from '@/providers/AppProvider'
import '@/styles/global.scss'
import type { AppProps, NextPage } from '@/types/next'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<T = object> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayouts = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayouts) {
  const getLayout = Component.getLayout || ((page: any) => page)
  const layouts = getLayout(<Component {...pageProps} />)

  return <AppProvider>{layouts}</AppProvider>
}

export default App
