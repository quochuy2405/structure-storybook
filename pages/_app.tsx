import { getMainLayout } from '@/components/layouts/Layouts'
import type { AppProps } from '@/types/next'
import '@/styles/global.scss'
function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || getMainLayout
  return getLayout(<Component {...pageProps} />)
}

export default App
