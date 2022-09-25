import React from 'react'
import clsx from 'clsx'
import Styles from './Badge.module.scss'
import shortid from 'shortid'
import { GrNext } from 'react-icons/gr'

export interface IBadgeProps {
  options?: object
  mode?: 'primary' | 'secondary'
}

const Badge: React.FC<IBadgeProps> = ({ options = {}, mode = 'primary' }) => {
  const classNames = clsx(Styles.Container, {
    [Styles.Primary]: mode === 'primary',
    [Styles.Secondary]: mode === 'secondary'
  })

  return (
    <div className={classNames}>
      {!!Object.keys(options).length &&
        Object.keys(options)?.map((key, index) => (
          <>
            {!!index && <GrNext size={12} />}
            <p key={shortid.generate()} className={Styles.Badge}>
              {options[key as keyof typeof options]}
            </p>
          </>
        ))}
    </div>
  )
}

export default Badge
