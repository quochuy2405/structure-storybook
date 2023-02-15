import { ArticleDetailPage } from '@/components/templates'
import Layouts from '@/layouts/index'
import { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react'
import 'prismjs/themes/prism-tomorrow.css'

const ArticleDetails: NextPageWithLayout = () => {
  return <ArticleDetailPage />
}

ArticleDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default ArticleDetails
