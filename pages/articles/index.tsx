import { Articles } from '@/components/templates/ArticlePage'
import Layouts from '@/layouts/index'
import { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react'

const ArticlePage: NextPageWithLayout = () => {
  return <Articles />
}

ArticlePage.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default ArticlePage
