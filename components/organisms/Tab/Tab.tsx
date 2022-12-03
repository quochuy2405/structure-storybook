import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import Styles from './Tab.module.scss'

export type TabTypes = {
  [tab: string]: {
    label: string
    children: ReactNode
  }
}

export interface ITabProps {
  tabs: TabTypes
}
const Tab: React.FC<ITabProps> = ({ tabs = {} }) => {
  const { query } = useRouter()
  return (
    <div>
      <div className={Styles.Tags}>
        {Object.keys(tabs).map((tab) => (
          <Link href={`?tab=${tab}`} key={tab}>
            <p className={`${Styles.Tag} ${query?.tab == tab && Styles.active} `}>
              {tabs[tab].label}
            </p>
          </Link>
        ))}
      </div>

      <div className={Styles.BodyChildren}>
        {tabs[query?.tab as keyof typeof tabs]?.children}
      </div>
    </div>
  )
}

export default Tab
