import { Logo } from '@/assets/svg'
import MetaMask from '@/assets/svg/MetaMask'
import { Avatar, Button, ButtonIcon } from '@/components/atoms'
import { Navigation } from '@/components/molecules'
import MarketInfo from '@/components/molecules/MarketInfo'
import { resetUser, setUser } from '@/features/slices/auth/user'
import { auth } from '@/firebase/config'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment, memo, useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { FaBlogger, FaChartLine, FaQq } from 'react-icons/fa'
import { IoLanguageOutline } from 'react-icons/io5'
import Styles from './Header.module.scss'

export type TypeRouter = {
  name: string
  url: string
}

export interface IHeaderProps {
  links?: TypeRouter
}

const Header: React.FC<IHeaderProps> = ({}) => {
  const { asPath } = useRouter()
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    auth.signOut()
    dispatch(resetUser())
  }

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const { displayName, email, photoURL } = userAuth
        dispatch(setUser({ name: displayName, email, photo: photoURL }))

        return
      }
    })
    return () => {
      unsubscribed()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  const links: Array<TypeRouter> = [
    {
      name: 'How Is Works',
      url: '/'
    },
    {
      name: 'Articles',
      url: '/articles'
    },
    {
      name: 'Cryptos',
      url: '/cryptos'
    },
    {
      name: 'Stocks',
      url: '/stocks'
    },
    {
      name: 'Blogs',
      url: '/blogs'
    }
  ]
  return (
    <Fragment>
      <header className={Styles.HeaderContainer}>
        <MarketInfo />
        <div className={Styles.Header}>
          <Link href="/">
            <div className={Styles.Logo}>
              <Logo />
              <p>Predict</p>
            </div>
          </Link>
          <div className={Styles.NavLinks}>
            {links.map((item) => (
              <Link href={item.url} key={item.url + item.name}>
                <a className={item.url === asPath ? 'active' : ''}>
                  <p>{item.name}</p>
                </a>
              </Link>
            ))}
          </div>
          <div className={Styles.User}>
            {!!user.name ? (
              <>
                <Avatar className={Styles.AvatarUser}>
                  <Image src={user.photo || ''} alt={user.name} layout="fill" />
                </Avatar>
                <Button
                  mode="warning"
                  className={Styles.MdButton}
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button mode="primary" className={Styles.MdButton}>
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button mode="warning" className={Styles.MdButton}>
                    Register
                  </Button>
                </Link>
              </>
            )}

            <Button
              mode="primary"
              icon={<MetaMask />}
              className={clsx(Styles.ButtonMetaMask, Styles.MdButton)}
              outline
            >
              MetaMask
            </Button>
            <ButtonIcon className={Styles.ButtonLang}>
              <IoLanguageOutline />
            </ButtonIcon>
          </div>
        </div>
      </header>
      <Navigation
        navigations={[
          { icon: <AiOutlineHome />, url: '/' },
          { icon: <FaQq />, url: '/articles' },
          { icon: <FaChartLine />, url: '/cryptos' },
          { icon: <FaBlogger />, url: '/blogs' }
        ]}
      />
    </Fragment>
  )
}

export default memo(Header)
