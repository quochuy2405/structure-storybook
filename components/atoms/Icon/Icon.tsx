import { Facebook, YouTube } from '@/assets/svg'
import GitHub from '@/assets/svg/GitHub'
import Google from '@/assets/svg/Google'
import React, { memo, ReactNode } from 'react'

type TIcon = { [key: string]: ReactNode }
const ICONS: TIcon = {
  facebook: <Facebook />,
  youtube: <YouTube />,
  google: <Google />,
  github: <GitHub />
}

export interface IconProps {
  className?: string
  type: keyof typeof ICONS
  size?: number
}

const Icon: React.FC<IconProps> = ({ className, type, size }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px` }} className={className}>
      {ICONS[type]}
    </div>
  )
}

export default memo(Icon)
