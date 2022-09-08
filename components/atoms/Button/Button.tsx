import clsx from 'clsx'
import React from 'react'
import Styles from './Button.module.scss'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'default' | 'primary'
  title?: string
  outline?: boolean
}

const Button: React.FC<IButtonProps> = ({ mode = 'default', ...props }) => {
  const classNames = clsx(Styles.button, { [Styles.buttonPrimary]: mode === 'primary' })
  return <div className={classNames}>Button</div>
}

export default Button
