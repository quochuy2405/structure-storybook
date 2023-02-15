import { Tooltip } from '@mui/material'
import React, { ReactElement } from 'react'
import Styles from './SpeedDial.module.scss'

export interface SpeedDialProps {
  children: ReactElement
  tooltip?: string
}

const SpeedDial: React.FC<SpeedDialProps> = ({ children, tooltip }) => {
  return (
    <Tooltip title={tooltip} className={Styles.SpeedDial}>
      {children}
    </Tooltip>
  )
}

export default SpeedDial
