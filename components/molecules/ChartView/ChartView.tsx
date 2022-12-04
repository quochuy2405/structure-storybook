import { IChartApi } from 'lightweight-charts'
import React, { useEffect, useRef } from 'react'
import Styles from './ChartView.module.scss'
import {
  handleCandleChart,
  handleCreateChart,
  handleHistogram,
  handleLineChart,
  handleMarker,
  handleMovingAverage
} from './ChartsHandle'
import { TResponsePredictData } from '@/types/predictions'

export type TChart = 'histogram' | 'line' | 'candle'
export type TDataSeries = {
  time: { year: number; month: number; day: number }
  open: number
  high: number
  low: number
  close: number
}

interface IChartViewProps {
  data: TResponsePredictData
  moving?: boolean
  isMarker?: boolean
  size: 'full'
  type?: TChart
}

const ChartView: React.FC<IChartViewProps> = (props) => {
  const {
    data: { actual = [], predict = [] },
    moving = false,
    isMarker = false,
    type = 'candle'
  } = props
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartContainerRef.current) return

    const chart = handleCreateChart(
      chartContainerRef,
      chartContainerRef.current.clientWidth,
      chartContainerRef.current.clientHeight
    ) as IChartApi

    switch (type) {
      case 'candle': {
        const candles = handleCandleChart(chart, actual, false)
        handleMarker(isMarker, candles, actual)
        if (!!predict.length) {
          const candles = handleCandleChart(chart, predict, true)
          handleMarker(isMarker, candles, predict)
        }
        break
      }
      case 'histogram': {
        handleHistogram(chart, actual)
        if (!!predict.length) {
          handleHistogram(chart, predict)
        }
        break
      }
      case 'line': {
        handleLineChart(chart, actual, false)
        if (!!predict.length) {
          handleLineChart(chart, [actual[actual.length - 1], ...predict], true)
        }
        break
      }
    }

    handleMovingAverage(moving, chart, actual, false)
    if (predict) {
      handleMovingAverage(moving, chart, predict, true)
    }

    return () => {
      chart.remove()
    }
  }, [actual, predict, type, isMarker, moving])

  return <div ref={chartContainerRef} className={Styles.ChartView} />
}

export default ChartView
