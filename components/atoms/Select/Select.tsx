import React, { forwardRef } from 'react'
import Styles from './Select.module.scss'

import clsx from 'clsx'
import { GoPrimitiveDot } from 'react-icons/go'
import ReactSelect, {
  components,
  GroupBase,
  MenuListProps,
  OptionProps
} from 'react-select'
import shortid from 'shortid'
export type IOptionSelect = {
  label: string
  value: string
}

export interface ISelectProps {
  title?: string
  className?: string
  errors?: object
  isRequired?: boolean
  options: IOptionSelect[]
  background?: string
  color?: string
  titleClassName?: string
}

const Select: React.FC<ISelectProps> = forwardRef<HTMLSelectElement, ISelectProps>(
  (
    {
      title,
      errors = {},
      options = [],
      isRequired = false,
      titleClassName,
      className,
      ...props
    },
    ref
  ) => {
    const titleClassNames = clsx(Styles.Title, {
      [titleClassName as string]: titleClassName
    })
    const classNames = clsx(Styles.Select, {
      [className as string]: className
    })
    const MenuList = (
      props: MenuListProps<IOptionSelect, false, GroupBase<IOptionSelect>>
    ) => {
      const { children, ...menuProps } = props
      return (
        <components.MenuList {...menuProps} className={Styles.MenuContainer}>
          <div className={Styles.Menu}>{children}</div>
        </components.MenuList>
      )
    }
    const Option = (
      props: OptionProps<IOptionSelect, false, GroupBase<IOptionSelect>>
    ) => {
      const { children, isSelected } = props

      return (
        <components.Option {...props}>
          <div className={clsx(Styles.Option, { [Styles.Selected]: isSelected })}>
            {children}{' '}
          </div>
        </components.Option>
      )
    }

    return (
      <div style={{ width: 'inherit' }}>
        {title && (
          <div className={Styles.TitleBox}>
            {isRequired && <GoPrimitiveDot className={Styles.DotRequired} />}
            <p className={titleClassNames}>{title}</p>
          </div>
        )}
        <ReactSelect
          ref={ref as any}
          id=""
          instanceId="react-select-3-live-region"
          defaultValue={options[0]}
          options={options}
          className={classNames}
          styles={{
            option: (base) => ({
              ...base,
              background: 'none',
              padding: 0
            })
          }}
          components={{
            MenuList,
            IndicatorSeparator: () => null,
            Option
          }}
          {...props}
        />
        {!!Object.keys(errors).length &&
          Object.keys(errors)?.map((key) => (
            <p key={shortid.generate()} className={Styles.TextError}>
              {errors[key as keyof typeof errors]}
            </p>
          ))}
      </div>
    )
  }
)
Select.displayName = 'select'
export default Select
