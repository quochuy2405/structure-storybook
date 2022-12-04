import { Avatar, Button, ButtonIcon, NavLink } from '@/components/atoms'
import { Navigation } from '@/components/molecules'
import MarketInfo from '@/components/molecules/MarketInfo'
import clsx from 'clsx'
import React from 'react'
import { GiDevilMask } from 'react-icons/gi'
import {
  IoCloudyNight,
  IoLanguageOutline,
  IoPersonAdd,
  IoPricetag
} from 'react-icons/io5'
import Styles from './Header.module.scss'

export type TypeRouter = {
  name: string
  url: string
}

export interface IHeaderProps {
  links?: TypeRouter
}

const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <>
      <div className={Styles.HeaderContainer}>
        <MarketInfo />
        <div className={Styles.Header}>
          <div className={Styles.Logo}>
            <Avatar />
            <p>Predict</p>
          </div>
          <div className={Styles.NavLinks}>
            <NavLink href="/" exact key={'a'}>
              <p>How Is Works</p>
            </NavLink>
            <NavLink href="/" exact key={'a1'}>
              <p>Product</p>
            </NavLink>
            <NavLink href="/predictions" exact key={'a3'}>
              <p>Predictions</p>
            </NavLink>
            <NavLink href="/" exact key={'a2'}>
              <p>Blog</p>
            </NavLink>
            <NavLink href="/" exact key={'a4'}>
              <p>FAQ</p>
            </NavLink>
          </div>
          <div className={Styles.User}>
            <Button
              mode="primary"
              outline={true}
              className={clsx(Styles.ButtonSignIn, Styles.MdButton)}
            >
              Sign In
            </Button>
            <Button mode="warning" className={Styles.MdButton}>
              Register
            </Button>
            <Button mode="primary" icon={<GiDevilMask />} className={Styles.MdButton}>
              MetaMask
            </Button>
            <ButtonIcon className={Styles.ButtonLang}>
              <IoLanguageOutline />
            </ButtonIcon>
          </div>
        </div>
      </div>
      <Navigation
        navigations={[
          { icon: <IoCloudyNight />, url: '/' },
          { icon: <IoPricetag />, url: '/#' },
          { icon: <IoPersonAdd />, url: '/predictions' },
          { icon: <IoCloudyNight />, url: '/#' },
          { icon: <IoCloudyNight />, url: '/#' }
        ]}
      />
    </>
  )
}

export default Header
