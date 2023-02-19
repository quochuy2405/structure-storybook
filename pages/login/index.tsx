import { LoginPage } from '@/components/templates'
import { schema } from '@/components/templates/LoginPage/resolve'
import { setUser } from '@/features/slices/auth/user'
import firebase, { auth } from '@/firebase/config'
import { addDocument } from '@/firebase/services'
import { useAppDispatch } from '@/hooks/useRedux'
import useValidate from '@/hooks/useValidate'
import { TStatusLoading } from '@/types/index'
import { IUserAccount } from '@/types/login'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axiosClient from '../api/axiosClient'
import { CREATE_REGISTER_API } from '../api/register'
import { NextPageWithLayout } from '../_app'
const initForm = {
  username: '',
  password: '',
  email: ''
}
const Login: NextPageWithLayout = () => {
  const router = useRouter()
  const [statusLoading, setStatusLoading] = useState<TStatusLoading>({
    status: '',
    message: ''
  })
  const dispatch = useAppDispatch()

  const { methods } = useValidate<IUserAccount>({
    validationSchema: schema,
    defaultValues: initForm
  })

  const ggProvider = new firebase.auth.GoogleAuthProvider()
  const onLoginGoogle = async () => {
    const { additionalUserInfo, user: User } = await auth.signInWithPopup(ggProvider)
    if (additionalUserInfo?.isNewUser) {
      const data = {
        displayName: User?.displayName,
        photoURL: User?.photoURL,
        email: User?.email,
        uid: User?.uid,
        providerId: User?.providerId
      }

      addDocument('users', data)
    }

    const data = User?.multiFactor as any
    if (data?.user) {
      dispatch(
        setUser({
          email: data?.user?.email,
          name: data?.user?.displayName,
          photo: data?.user?.photoURL
        })
      )
    }
    router.push('/')
  }
  const onSubmit = (data: IUserAccount) => {
    console.log(data)
    const statusRunning = new Promise((resolve) => {
      setTimeout(() => {
        setStatusLoading({
          status: 'checking',
          message: 'Checking...'
        })
        resolve(1)
      }, 1000)
    })
    axiosClient
      .post(CREATE_REGISTER_API, data)
      .then(() => {
        statusRunning.then(async () => {
          setTimeout(() => {
            setStatusLoading({
              status: 'success',
              message: 'Successfully.'
            })
          }, 3000)
          setTimeout(() => {
            router.push('/')
          }, 5000)
        })
      })
      .catch(() => {
        setTimeout(() => {
          setStatusLoading({
            status: 'success',
            message: 'Successfully.'
          })
        }, 3000)
        setTimeout(() => {
          router.push('/')
        }, 5000)
      })
  }
  const props = {
    onLoginGoogle,
    onSubmit,
    methods,
    statusLoading
  }
  return <LoginPage {...props} />
}

export default Login
