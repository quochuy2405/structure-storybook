import { Layouts } from '@/layouts/index'
import { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react'

const ArticleDetails: NextPageWithLayout = () => {
  return <></>
}

ArticleDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default ArticleDetails
