import { IChartApi } from 'lightweight-charts'
import React, { useEffect, useRef } from 'react'
import Styles from './ChartView.module.scss'
import {
  handleCandleChart,
  handleCreateChart,
  handleHistogram,
  handleMarker,
  handleMovingAverage
} from './ChartsHandle'

export type TDataSeries = {
  time: { year: number; month: number; day: number }
  open: number
  high: number
  low: number
  close: number
}

interface IChartViewProps {
  data?: Array<TDataSeries>
  moving?: boolean
  isMarker?: boolean
  size: 'full'
  histogram?: boolean
}

const ChartView: React.FC<IChartViewProps> = (props) => {
  const { data = [], moving = false, histogram = false, isMarker = false } = props
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartContainerRef.current) return
    const chart = handleCreateChart(
      chartContainerRef,
      chartContainerRef.current.clientWidth,
      chartContainerRef.current.clientHeight
    ) as IChartApi

    const candles = handleCandleChart(chart, data)
    handleMarker(isMarker, candles, data)
    handleMovingAverage(moving, chart, data)
    handleHistogram(histogram, chart, data)

    return () => {
      chart.remove()
    }
  }, [data, histogram, isMarker, moving])

  return <div ref={chartContainerRef} className={Styles.ChartView} />
}

export default ChartView
