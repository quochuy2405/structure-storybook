import { ButtonIcon, Card } from '@/components/atoms'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { memo, ReactNode } from 'react'
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
  const { asPath } = useRouter()
  return (
    <div className={Styles.NavigationContainer}>
      <Card className={Styles.Navigation}>
        {navigations.map((item) => (
          <Link className={Styles.Link} href={item.url} key={shortid.generate()}>
            <a className={item.url === asPath ? 'active' : ''}>
              <ButtonIcon>{item.icon}</ButtonIcon>
            </a>
          </Link>
        ))}
      </Card>
    </div>
  )
}

export default memo(Navigation)
