import Meta from './Meta'

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Meta title="Aution FNT" description="Aution FNT" />
      {children}
    </>
  )
}

const getMainLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>

export default MainLayout
export { getMainLayout }
