import { IChartApi } from 'lightweight-charts'
import React, { useEffect, useRef } from 'react'
import {
  handleCandleChart,
  handleCreateChart,
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
}

const ChartView: React.FC<IChartViewProps> = (props) => {
  const { data = [], moving = false } = props
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartContainerRef.current) return
    const chart = handleCreateChart(
      chartContainerRef,
      chartContainerRef.current.clientWidth,
      chartContainerRef.current.clientHeight
    ) as IChartApi

    const candles = handleCandleChart(chart, data)
    handleMarker(candles, data)
    handleMovingAverage(moving, chart, data)
    // window.addEventListener('resize', handleResize)
    return () => {
      // window.removeEventListener('resize', handleResize)
      chart.remove()
    }
  }, [data, moving])

  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: '100vh' }} />
  )
}

export default ChartView
