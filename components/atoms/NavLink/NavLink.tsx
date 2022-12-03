import { useRouter } from 'next/router'
import Link from 'next/link'
export interface INavLinkProps {
  href: string
  exact?: boolean
  children?: React.ReactNode
  className?: string
}

const NavLink: React.FC<INavLinkProps> = ({ href, exact, children, className }) => {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    className += ' active'
  }

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}
export default NavLink
