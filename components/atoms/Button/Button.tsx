import clsx from 'clsx'
import React, { forwardRef, memo, ReactNode } from 'react'
import Styles from './Button.module.scss'

export interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  mode?: 'default' | 'primary' | 'danger' | 'warning' | 'white'
  outline?: boolean
  type?: 'submit' | 'reset' | 'button'
  className?: string
  icon?: ReactNode
  children?: ReactNode
}

const Button: React.FC<IButtonProps> = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    { mode = 'default', outline, className, icon, children, type = 'button', ...props },
    ref
  ) => {
    const classNames = clsx(Styles.Button, {
      [Styles.ButtonPrimary]: mode === 'primary',
      [Styles.ButtonDanger]: mode === 'danger',
      [Styles.ButtonWarning]: mode === 'warning',
      [Styles.ButtonWhite]: mode === 'white',
      [Styles.Outline]: outline,
      [className as string]: className
    })
    return (
      <button ref={ref} type={type} {...props} className={classNames}>
        {icon && icon}
        {children || 'Default'}
      </button>
    )
  }
)
Button.displayName = 'button'

export default memo(Button)
