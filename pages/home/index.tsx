import Layouts from 'layouts'
import Home from '@/components/templates/Home'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const HomePage: NextPageWithLayout = () => {
  return <Home />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default HomePage
