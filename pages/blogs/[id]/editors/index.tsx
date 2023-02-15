import Layouts from '@/layouts/index'
import { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react'
import 'prismjs/themes/prism-tomorrow.css'
import { BlogEditPage } from '@/components/templates'

const BlogEdit: NextPageWithLayout = () => {
  return <BlogEditPage />
}

BlogEdit.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default BlogEdit
