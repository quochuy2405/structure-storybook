import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import Styles from './Tab.module.scss'

export type TabTypes = {
  [key: string]: {
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
        {Object.keys(tabs).map((key) => (
          <Link href={`?key=${key}`} key={key}>
            <p
              className={`${Styles.Tag} ${query?.key == key && Styles.active} `}
            >
              {tabs[key].label}
            </p>
          </Link>
        ))}
      </div>

      <div className={Styles.BodyChildren}>
        {tabs[query?.key as keyof typeof tabs]?.children}
      </div>
    </div>
  )
}

export default Tab
