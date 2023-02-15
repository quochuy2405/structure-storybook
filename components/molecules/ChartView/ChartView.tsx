import { StatusTag } from '@/components/atoms'
import { TResponsePredict, TResponsePredictData } from '@/types/predictions'
import { IChartApi } from 'lightweight-charts'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { BsBarChartFill } from 'react-icons/bs'
import { MdShowChart } from 'react-icons/md'
import {
  colorChartLines,
  handleAreaSeries,
  handleCandleChart,
  handleCreateChart,
  handleHistogram,
  handleLineChart,
  handleMarker,
  handleMovingAverage
} from './ChartsHandle'
import Styles from './ChartView.module.scss'

export type TChart = 'histogram' | 'line' | 'candle' | 'area'
export type TDataSeries = {
  time: { year: number; month: number; day: number }
  open: number
  high: number
  low: number
  close: number
}
export type TOptionModel = { [x: string]: TResponsePredictData }

interface IChartViewProps {
  data: Array<TResponsePredict>
  moving?: boolean
  isMarker?: boolean
  size: 'full'
  type?: TChart
}

const ChartView: React.FC<IChartViewProps> = (props) => {
  const { data, moving = false, isMarker = false, type = 'candle' } = props
  const models = useMemo(() => data?.map((item) => item.model), [data])
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const chartContainerBoxRef = useRef<HTMLDivElement>(null)
  const [activeModel, setActiveModel] = useState(models[0])

  useEffect(() => {
    if (models.length) {
      setActiveModel(models[0])
    }
  }, [models])

  useEffect(() => {
    if (!chartContainerRef.current || !data?.length) return

    const activeData = data.find((item) => item.model === activeModel) as TResponsePredict

    if (!activeData) return

    const { actual = [], predict = [] } = activeData.data

    const chart = handleCreateChart(
      chartContainerRef,
      chartContainerRef.current.clientWidth,
      chartContainerRef.current.clientHeight
    ) as IChartApi

    switch (type) {
      case 'candle': {
        handleCandleChart(chart, actual, false)
        if (!!predict.length) {
          const candlesPredict = handleCandleChart(chart, predict, true)
          handleMarker(isMarker, candlesPredict, predict)
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
      case 'area': {
        handleAreaSeries(chart, actual)
        break
      }
      case 'line': {
        if (data.length) {
          handleLineChart(chart, data[0].data.actual, false, 1)
          console.log(data)
          data.forEach(({ data: { predict: pred } }, index) => {
            if (!!pred.length) {
              handleLineChart(
                chart,
                [actual[actual.length - 1], ...pred],
                true,
                index + 1
              )
            }
          })
        }
        break
      }
      default: {
        handleCandleChart(chart, actual, false)
        if (!!predict.length) {
          const candlesPredict = handleCandleChart(chart, predict, true)
          handleMarker(isMarker, candlesPredict, predict)
        }
        break
      }
    }

    handleMovingAverage(moving, chart, actual, false)
    if (predict) {
      const lenOfActual = actual.length
      handleMovingAverage(
        moving,
        chart,
        [...actual.slice(lenOfActual - 10, lenOfActual), ...predict],
        true
      )
    }
    if (window)
      window.addEventListener('resize', () => {
        try {
          chart.resize(
            chartContainerBoxRef.current?.clientWidth || 0,
            chartContainerBoxRef.current?.clientHeight || 0
          )
        } catch (error) {}
      })

    return () => {
      chart.remove()
      if (window)
        window.removeEventListener('resize', () => {
          try {
            chart.resize(
              chartContainerBoxRef.current?.clientWidth || 0,
              // eslint-disable-next-line react-hooks/exhaustive-deps
              chartContainerBoxRef.current?.clientHeight || 0
            )
          } catch (error) {}
        })
    }
  }, [type, isMarker, moving, activeModel, data])

  return (
    <div ref={chartContainerBoxRef} className={Styles.BoxChart}>
      <div className={Styles.Models}>
        {!!models.length &&
          models?.map(
            (model, index) =>
              model && (
                <StatusTag
                  key={model}
                  close={false}
                  onClick={() => type === 'candle' && setActiveModel(model)}
                  color="#333333"
                >
                  <>
                    <h2>{model.toUpperCase()}</h2>
                    {type === 'candle' && model === activeModel && <BsBarChartFill />}
                    {type === 'line' && (
                      <MdShowChart
                        size={20}
                        color={
                          colorChartLines[
                            ((index + 1) % 5) as keyof typeof colorChartLines
                          ]
                        }
                      />
                    )}
                  </>
                </StatusTag>
              )
          )}
      </div>
      <div ref={chartContainerRef} className={Styles.ChartView} />
    </div>
  )
}

export default ChartView
