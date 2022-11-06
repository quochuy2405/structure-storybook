import clsx from 'clsx'
import { ReactNode } from 'react'
import { GrBitcoin } from 'react-icons/gr'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import Styles from './MarketInfo.module.scss'

export interface IIconInfoProps {
  icon: ReactNode
  name: string
  price: string
  percent: number
  status: 'increase' | 'reduce'
}

const IconInfo: React.FC<IIconInfoProps> = ({
  icon,
  name,
  price,
  percent,
  status = 'increase'
}) => {
  const statusStyles = clsx(Styles.TraddingPercent, {
    [Styles.Increase]: status === 'increase',
    [Styles.Reduce]: status === 'reduce'
  })

  return (
    <div className={Styles.CoinInfo}>
      <div className={Styles.CoinImage}>{icon}</div>
      <p>{name}</p>
      <p className={Styles.Price}>${price}</p>(
      <div className={statusStyles}>
        {status === 'increase' ? (
          <TiArrowSortedUp size={14} />
        ) : (
          <TiArrowSortedDown size={14} />
        )}
        <p>{percent}%</p>
      </div>
      )
    </div>
  )
}

const MarketInfo = () => {
  return (
    <div className={Styles.MarketInfo}>
      <IconInfo
        icon={<GrBitcoin size={20} />}
        name="BTC"
        price="10.100"
        percent={8}
        status="increase"
      />
      <IconInfo
        icon={<GrBitcoin size={20} />}
        name="BTC"
        price="10.200"
        percent={8}
        status="increase"
      />
      <IconInfo
        icon={<GrBitcoin size={20} />}
        name="BTC"
        price="10.200"
        percent={8}
        status="reduce"
      />
      <IconInfo
        icon={<GrBitcoin size={20} />}
        name="BTC"
        price="10.200"
        percent={8}
        status="increase"
      />
      <IconInfo
        icon={<GrBitcoin size={20} />}
        name="BTC"
        price="10.200"
        percent={8}
        status="reduce"
      />{' '}
      <IconInfo
        icon={<GrBitcoin size={20} />}
        name="BTC"
        price="10.200"
        percent={8}
        status="increase"
      />
      <IconInfo
        icon={<GrBitcoin size={20} />}
        name="BTC"
        price="10.200"
        percent={8}
        status="increase"
      />
      <IconInfo
        icon={<GrBitcoin size={20} />}
        name="BTC"
        price="10.200"
        percent={8}
        status="increase"
      />
      <IconInfo
        icon={<GrBitcoin size={20} />}
        name="BTC"
        price="10.200"
        percent={8}
        status="increase"
      />
    </div>
  )
}

export default MarketInfo
