import { coinMarket, fullNameCoins } from '@/constants/coins'
import axiosClient from '@/pages/api/axiosClient'
import clsx from 'clsx'
import { memo, ReactNode, useEffect, useState } from 'react'
import Styles from './MarketInfo.module.scss'
export interface IDataCoin {
  name: string
  value?: number
  percent: number
}
export interface IIconInfoProps {
  icon: ReactNode
  name: string
  value?: number
  percent: number
}

const IconInfo: React.FC<IIconInfoProps> = ({ icon, name, percent = 0, value }) => {
  const statusClassNames = clsx(Styles.StatusCoin, {
    [Styles.Reduce]: percent < 0,
    [Styles.Increase]: percent >= 0
  })
  return (
    <div className={Styles.CoinInfo}>
      <p className={Styles.CoinValues}>{value?.toLocaleString()} USD</p>
      <div className={Styles.Coin}>
        <div className={Styles.CoinImage}>{icon}</div>
        <p>{name}</p>
        <span className={statusClassNames}>{percent.toFixed(2)}%</span>
      </div>
    </div>
  )
}

const MarketInfo = () => {
  const [coins, setCoin] = useState<Array<IIconInfoProps>>([])
  useEffect(() => {
    const getCoins = async () => {
      const response = await axiosClient(`slider`)
      if (response.status === 200) {
        const data = response.data || []
        setCoin(
          data.map((item: IDataCoin) => ({
            icon: coinMarket[item.name],
            name: fullNameCoins[item.name],
            percent: item.percent,
            value: item.value
          }))
        )
      }
    }
    getCoins()
  }, [])

  return (
    <div className={Styles.MarketInfo}>
      {[...Array(6)]
        .reduce((list: Array<IIconInfoProps>) => {
          return [...list, ...coins]
        }, [])
        .map((item, index) => (
          <IconInfo {...item} key={item.name + index} />
        ))}
    </div>
  )
}

export default memo(MarketInfo)
