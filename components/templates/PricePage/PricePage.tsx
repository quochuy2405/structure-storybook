import Ethereum from '@/assets/svg/coins/Ethereum'
import { Card, Title } from '@/components/atoms'
import TableMarket from '@/components/organisms/TableMarket'
import { TResponsePredict } from '@/types/predictions'
import { ColumnDef } from '@tanstack/react-table'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import { GrBitcoin } from 'react-icons/gr'
import { SiBinance } from 'react-icons/si'
import Styles from './PricePage.module.scss'
const ChartView = dynamic(import('@/components/molecules/ChartView/ChartView'), {
  ssr: false
})

interface IPricePageProps {
  data: Array<object>
  columns: ColumnDef<object, unknown>[]
  dataChart: TResponsePredict
  coin: string
}

export const detailCoin: Record<string, ReactNode> = {
  bitcoin: (
    <div>
      <div style={{ width: '50px', height: '50px' }}>
        <GrBitcoin size={50} color="orange" />
      </div>
      <Title>Bitcoin</Title>
      <h3>BTC</h3>
    </div>
  ),
  ethereum: (
    <div>
      <div style={{ width: '50px', height: '50px' }}>
        <Ethereum />
      </div>

      <Title>Ethereum</Title>
      <h3>ETH</h3>
    </div>
  ),
  binance: (
    <div>
      <div style={{ width: '50px', height: '50px' }}>
        <SiBinance size={50} color="orange" />
      </div>
      <Title>Binance Coin</Title>
      <h3>BNB</h3>
    </div>
  )
}

const PricePage: React.FC<IPricePageProps> = ({ data, columns, dataChart, coin }) => {
  return (
    <div className={Styles.Container}>
      <Card className={Styles.IntroContainer}>
        <div className={Styles.CryptoInfo}>
          <h2 className={Styles.Title}>Cryptocurrency Prices</h2>
          <p className={Styles.Description}>
            The cryptocurrency market is valued at $1.2T, and on average a 1.56% increase
            over the last day. The total marketcap for stablecoins is $134.4B. The total
            marketcap for DeFi is $130.7B.
            <br />
            <br />
            The total crypto market volume over the last 24 hours is $2.5B. The total
            volume in DeFi is $415.8M, 16.59% of the total crypto volume. The volume for
            stablecoins is $227.0M, which is 11.16% of the total crypto market 24-hour
            volume.
            <br />
            <br />
            Bitcoin{"'"}s price is currently $22,927.42 BTC Dominance is currently 36.72%,
            and volume of $832.0M is 33.21% of total crypto volume.
          </p>
        </div>
        <div className={Styles.ChartPreview}>
          <div>{detailCoin[coin]}</div>
          <ChartView type="line" size="full" data={[dataChart]} />
        </div>
      </Card>
      <Card className={Styles.TableCoins}>
        <TableMarket data={data} columns={columns} />
      </Card>
    </div>
  )
}

export default PricePage
