import { Avatar, Button, ButtonIcon, NavLink } from '@/components/atoms'
import MarketInfo from '@/components/molecules/MarketInfo'
import React from 'react'
import { GiDevilMask } from 'react-icons/gi'
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
  return (
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
          <Button mode="primary" outline={true} className={Styles.ButtonSignIn}>
            Sign In
          </Button>
          <Button mode="warning">Register</Button>
          <Button mode="primary" icon={<GiDevilMask />}>
            MetaMask
          </Button>
          <ButtonIcon>
            <IoLanguageOutline />
          </ButtonIcon>
        </div>
      </div>
    </div>
  )
}

export default Header
