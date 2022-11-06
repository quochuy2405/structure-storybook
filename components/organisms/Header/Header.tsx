import { Logo } from '@/assets/svg'
import Styles from './Header.module.scss'
import { Button, ButtonIcon, NavLink } from '@/components/atoms'
import { GiDevilMask } from 'react-icons/gi'
import { IoLanguageOutline } from 'react-icons/io5'
import React from 'react'
import MarketInfo from '@/components/molecules/MarketInfo'

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
          <Logo />
        </div>
        <div className={Styles.NavLinks}>
          <NavLink href="/" exact key={'a'}>
            <p>How Is Works</p>
          </NavLink>
          <NavLink href="/" exact key={'a1'}>
            <p>Benefits</p>
          </NavLink>
          <NavLink href="/" exact key={'a2'}>
            <p>Testimonials</p>
          </NavLink>
          <NavLink href="/" exact key={'a3'}>
            <p>Predictions</p>
          </NavLink>
          <NavLink href="/" exact key={'a4'}>
            <p>FAQ</p>
          </NavLink>
        </div>
        <div className={Styles.User}>
          <Button mode="primary" outline={true}>
            Sign In
          </Button>
          <Button mode="primary">Register</Button>
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
