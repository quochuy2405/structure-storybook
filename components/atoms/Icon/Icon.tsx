import { Facebook, LinkerIn } from '@/assets/svg'
import React, { ReactNode } from 'react'

type TIcon = { [key: string]: ReactNode }
const ICONS: TIcon = {
  facebook: <Facebook />,
  linker: <LinkerIn />
}

export interface IconProps {
  className?: string
  type: keyof typeof ICONS
  size?: number
}

const Icon: React.FC<IconProps> = ({ className, type, size }) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={className}
    >
      {ICONS[type]}
    </div>
  )
}

export default Icon
