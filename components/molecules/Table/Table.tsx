import React, { ReactNode } from 'react'
import Styles from './Table.module.scss'
import shortid from 'shortid'
import clsx from 'clsx'

export type HeadersType = {
  icon?: ReactNode
  title?: string
  isSort?: string
  keyName?: string
}

export interface ITableProps {
  headers?: HeadersType[]
  rowItems?: object[]
  mode?: 'default' | 'primary'
}

const Table: React.FC<ITableProps> = ({
  headers = [],
  rowItems = [],
  mode = 'default'
}) => {
  const tableClassNames = clsx(Styles.Table, {
    [Styles.TablePrimary]: mode === 'primary'
  })

  const trClassNames = clsx(Styles.Tr, {
    [Styles.TrPrimary]: mode === 'primary'
  })

  const headerClassNames = clsx(Styles.Header, {
    [Styles.HeaderPrimary]: mode === 'primary'
  })

  const thClassNames = clsx(Styles.Th, {
    [Styles.ThPrimary]: mode === 'primary'
  })

  const tdClassNames = clsx(Styles.Td, {
    [Styles.TdPrimary]: mode === 'primary'
  })

  return (
    <div>
      <table className={tableClassNames} border={1}>
        <thead>
          <tr className={headerClassNames}>
            {headers &&
              headers.map((item) => (
                <th key={shortid.generate()} className={thClassNames}>
                  <p>{item.title}</p>
                  {item.icon}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {rowItems &&
            rowItems.map((row) => (
              <tr key={shortid.generate()} className={trClassNames}>
                {Object.keys(row).map((key) => (
                  <td className={tdClassNames} key={key}>
                    {row[key as keyof typeof row]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
