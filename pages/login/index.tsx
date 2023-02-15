import { LoginPage } from '@/components/templates'
import { setUser } from '@/features/slices/auth/login'
import firebase, { auth } from '@/firebase/config'
import { addDocument } from '@/firebase/services'
import { useAppDispatch } from '@/hooks/useRedux'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '../_app'

const Login: NextPageWithLayout = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
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

  const props = {
    onLoginGoogle
  }
  return <LoginPage {...props} />
}

export default Login
