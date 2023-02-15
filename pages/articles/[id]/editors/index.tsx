import { ArticleEditPage } from '@/components/templates'
import Layouts from '@/layouts/index'
import { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react'
import 'prismjs/themes/prism-tomorrow.css'

const ArticleEdit: NextPageWithLayout = () => {
  return <ArticleEditPage />
}

ArticleEdit.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default ArticleEdit
