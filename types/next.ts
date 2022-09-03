import type { NextPage as NextPageType } from 'next'
import type { AppProps as NextAppProps } from 'next/app'
import '@/styles/global.scss'
import type * as React from 'react'

type NextPage = NextPageType & {
  getLayout?: (page: JSX.Element) => React.ReactNode
}

type AppProps = NextAppProps & {
  Component: NextPage
}

export type { NextPage, AppProps }
