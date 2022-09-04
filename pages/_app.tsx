import { getMainLayout } from '@/components/layouts/Layouts'
import type { AppProps, NextPage } from '@/types/next'
import '@/styles/global.scss'
import { ReactElement, ReactNode } from 'react'
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayouts = AppProps & {
  Component: NextPageWithLayout
}
function App({ Component, pageProps }: AppPropsWithLayouts) {
  const getLayout = Component.getLayout || ((page) => page) || getMainLayout
  const layouts = getLayout(<Component {...pageProps} />)
  return <>{layouts}</>
}

export default App
