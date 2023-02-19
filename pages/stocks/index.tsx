import { columnTableMarket } from '@/components/organisms/TableMarket/makeColums'
import { StockPage } from '@/components/templates'
import Layouts from '@/layouts/index'
import { TResponsePredict } from '@/types/predictions'
import { ReactElement, useEffect, useState } from 'react'
import axiosClient from '../api/axiosClient'
import { NextPageWithLayout } from '../_app'
const data = [
  {
    name: 'VCB',
    price: '22,971.06',
    day: '+0.98%',
    market_cap: '$244,971.06',
    volume: '12121,971',
    type: 'vcb'
  },
  {
    name: 'Ethereum',
    price: '24,971.06',
    day: '+0.08%',
    market_cap: '$34,971.06',
    volume: '2121,971',
    type: 'ethereum'
  },
  {
    name: 'Binance',
    price: '20,971.06',
    day: '-0.98%',
    market_cap: '$12,971.06',
    volume: '2444,971',
    type: 'binance'
  }
]
const initChart = {
  model: '',
  data: { actual: [], predict: [] }
}
const Stock: NextPageWithLayout = () => {
  const [stockActive, setCoinActive] = useState('bitcoin')
  const [dataChart, setDataChart] = useState<TResponsePredict>(initChart)
  const handelChangeCoin = (coin: string) => setCoinActive(coin)
  const columns = columnTableMarket(stockActive, handelChangeCoin, 'stocks')

  useEffect(() => {
    const getCoin = async () => {
      try {
        const { status, data } = await axiosClient.get(`/${stockActive}`, {
          timeout: 3000
        })

        if (status === 200) {
          console.log(data)
          setDataChart({
            model: '',
            data: {
              actual: data,
              predict: []
            }
          })
        } else {
        }
      } catch (error) {}
    }
    getCoin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stockActive])

  const props = {
    data,
    columns,
    dataChart,
    name: stockActive
  }
  return <StockPage {...props} />
}

Stock.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default Stock
