import { LoginPage } from '@/components/templates'
import { Layouts } from '@/layouts/index'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const Login: NextPageWithLayout = () => {
  return <LoginPage />
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default Login
