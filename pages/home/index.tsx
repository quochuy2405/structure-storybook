import { LandingPage } from '@/components/templates'
import Layouts from 'layouts'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const Home: NextPageWithLayout = () => {
  return <LandingPage />
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default Home
