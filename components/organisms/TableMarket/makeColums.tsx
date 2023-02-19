import { Button, CheckBox } from '@/components/atoms'
import { coinIcons, subTitle, urls } from '@/constants/coins'
import Link from 'next/link'

import { ColumnDef } from '@tanstack/react-table'
import Styles from './TableMarket.module.scss'

export const columnTableMarket = (
  active: string,
  onChange: (data: string) => void,
  parentPath: string
): ColumnDef<object>[] => {
  return [
    {
      header: undefined,
      accessorKey: 'checkbox',
      size: 3,
      cell: ({ row }: any) => {
        const value = row?.original?.type || ''
        return (
          <div
            style={{ paddingLeft: '10px' }}
            onClick={() => onChange(row?.original?.type)}
          >
            <CheckBox checked={value === active} readOnly />
          </div>
        )
      }
    },
    {
      header: 'Name',
      accessorKey: 'name',
      size: 25,
      cell: (data) => {
        const value = (data.getValue() as keyof typeof coinIcons) || ''
        return (
          <div className={Styles.NameOfTable}>
            <div style={{ width: '25px' }}>{coinIcons[value.toLowerCase()]}</div>

            <div>
              <p className={Styles.Capitalize}>{value}</p>
              <p className={Styles.SubTitle}>{subTitle[value.toLowerCase()]}</p>
            </div>
          </div>
        )
      }
    },
    {
      header: 'Price',
      accessorKey: 'price',
      size: 20
    },
    {
      header: '1d',
      accessorKey: 'day',
      size: 20
    },
    {
      header: 'MarketCap',
      accessorKey: 'market_cap',
      size: 20
    },
    {
      header: 'Volume(24h)',
      accessorKey: 'volume',
      size: 20
    },
    {
      header: 'Predict',
      accessorKey: 'type',
      cell: (data) => {
        const value = (data.getValue() as keyof typeof urls) || ''
        return (
          <Link href={`${parentPath}/${urls[value.toLowerCase()]}`}>
            <Button className={Styles.ButtonPredict}>
              <p>Predict</p>
            </Button>
          </Link>
        )
      }
    }
  ]
}
