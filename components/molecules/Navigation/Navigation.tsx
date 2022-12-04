import { ButtonIcon, Card, NavLink } from '@/components/atoms'
import React, { ReactNode } from 'react'
import shortid from 'shortid'
import Styles from './Navigation.module.scss'
type NavigationItem = {
  icon: ReactNode
  url: string
}
export interface INavigationProps {
  navigations: Array<NavigationItem>
}

const Navigation: React.FC<INavigationProps> = ({ navigations }) => {
  return (
    <div className={Styles.NavigationContainer}>
      <Card className={Styles.Navigation}>
        {navigations.map((item) => (
          <NavLink className={Styles.Link} href={item.url} key={shortid.generate()} exact>
            <ButtonIcon>{item.icon}</ButtonIcon>
          </NavLink>
        ))}
      </Card>
    </div>
  )
}

export default Navigation
