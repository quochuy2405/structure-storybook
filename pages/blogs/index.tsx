import { Blogs } from '@/components/templates/BlogPage'
import Layouts from '@/layouts/index'
import { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react'

const BlogPage: NextPageWithLayout = () => {
  return <Blogs />
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default BlogPage
