import { HomePage } from '@/components/templates'
import Layouts from '@/layouts/index'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <HomePage />
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default Home
