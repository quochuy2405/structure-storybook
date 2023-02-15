import { Footer, Header } from '@/components/organisms'
import React from 'react'
import Meta from './Meta'
interface ILayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Meta title="Ftisu Predict" description="PREDICT" />

      {children}
    </>
  )
}

const Layouts: React.FC<ILayoutProps> = ({ children }) => (
  <MainLayout>
    <Header />
    {children}
    <Footer />
  </MainLayout>
)

export default Layouts
