import {
  createChart,
  IChartApi,
  ISeriesApi,
  SeriesMarker,
  Time
} from 'lightweight-charts'
import { TDataSeries } from './ChartView'

const calculateSMA = (data: Array<TDataSeries>, count: number) => {
  const avg = (data: Array<TDataSeries>) => {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
      sum += data[i].close
    }
    return sum / data.length
  }

  const result = []

  for (let i = count - 1, len = data.length; i < len; i++) {
    const val = avg(data.slice(i - count + 1, i))
    result.push({ time: data[i].time, value: val })
  }
  return result
}

const handleCreateChart = (
  chartContainerRef: React.RefObject<HTMLDivElement>,
  width?: number,
  height?: number
) => {
  if (!chartContainerRef.current) return

  const chart = createChart(chartContainerRef.current, {
    localization: {
      dateFormat: 'yyyy/MM/dd',
      locale: 'en-US'
    },
    width: width || 600,
    height: height || 300,
    timeScale: {
      timeVisible: true,
      borderColor: '#D1D4DC'
    },

    rightPriceScale: {
      borderColor: '#D1D4DC',
      borderVisible: false
    },
    layout: {
      backgroundColor: '#ffffff',
      textColor: '#000000'
    },
    grid: {
      vertLines: {
        color: '#ffffff'
      },
      horzLines: {
        color: '#c4c4c440'
      }
    }
  })
  chart.timeScale().fitContent()
  return chart
}

const handleMovingAverage = (
  moving: boolean,
  chart: IChartApi,
  data: Array<TDataSeries>,
  isPredict: boolean
) => {
  if (!moving) return
  const smaData = calculateSMA(data, 10)
  const color = isPredict ? 'black' : 'rgba(4, 111, 232, 1)'
  const movingAVG = chart.addLineSeries({
    color: color,
    lineWidth: 2
  })
  movingAVG.setData(smaData)
}
export const colorChartLines = {
  1: '#3fcf8e',
  2: '#ff9d09',
  3: '#850000',
  4: '#FF597B',
  5: '#FB2576',
  6: '#EB6440',
  7: '#3A8891',
  8: '#474E68'
}
const handleLineChart = (
  chart: IChartApi,
  data: Array<TDataSeries>,
  isPredict: boolean,
  indexColor: number
) => {
  const color = isPredict
    ? indexColor > 8
      ? Math.floor(Math.random() * 16777215).toString(16)
      : colorChartLines[indexColor as keyof typeof colorChartLines]
    : '#5337ee'
  const movingAVG = chart.addLineSeries({
    color: color,
    lineWidth: 2
  })
  movingAVG.setData(
    data?.map((item) => ({
      time: item.time,
      value: item.close
    }))
  )
}

const handleCandleChart = (
  chart: IChartApi,
  data: Array<TDataSeries>,
  isPredict: boolean
) => {
  const upColor = isPredict ? '#0022ffd8' : '#3fcf8e'
  const downColor = isPredict ? '#ff9d09' : '#da3939'
  const borderUpColor = isPredict ? '#0022ffd8' : '#3fcf8e'
  const borderDownColor = isPredict ? '#ff9d09' : '#da3939'
  const candleSeries = chart.addCandlestickSeries({
    upColor,
    downColor,
    borderUpColor,
    borderDownColor
  })
  candleSeries.setData(data)
  return candleSeries
}

const handleMarker = (
  marker: boolean,
  series: ISeriesApi<'Candlestick' | 'Line' | 'Area' | 'Bar' | 'Baseline' | 'Histogram'>,
  data: Array<TDataSeries>
) => {
  if (!marker) return
  const datesForMarkers = [data[data.length - 39], data[data.length - 19]]

  let indexOfMinPrice = 0
  for (let i = 1; i < datesForMarkers.length; i++) {
    if (datesForMarkers[i].high < datesForMarkers[indexOfMinPrice].high) {
      indexOfMinPrice = i
    }
  }
  const markers: SeriesMarker<Time>[] = [
    {
      time: data[data.length - 48].time,
      position: 'aboveBar',
      color: '#f68410',
      shape: 'circle',
      text: 'D'
    }
  ]

  for (let i = 0; i < datesForMarkers.length; i++) {
    if (i !== indexOfMinPrice) {
      markers.push({
        time: datesForMarkers[i].time,
        position: 'aboveBar',
        color: '#e91e63',
        shape: 'arrowDown',
        text: 'Sell @ ' + Math.floor(datesForMarkers[i].high + 2)
      })
    } else {
      markers.push({
        time: datesForMarkers[i].time,
        position: 'belowBar',
        color: '#2196F3',
        shape: 'arrowUp',
        text: 'Buy @ ' + Math.floor(datesForMarkers[i].low - 2)
      })
    }
  }
  series.setMarkers(markers)
}
const handleHistogram = (chart: IChartApi, data: Array<TDataSeries>) => {
  const volumeSeries = chart.addHistogramSeries({
    color: '#26a69a',
    priceFormat: {
      type: 'volume'
    },
    priceScaleId: '',
    scaleMargins: {
      top: 0.9,
      bottom: 0
    }
  })
  volumeSeries.setData(data)
}

const handleAreaSeries = (chart: IChartApi, data: Array<TDataSeries>) => {
  const areaSeries = chart.addAreaSeries({
    lineColor: '#2962FF',
    topColor: '#2962FF',
    bottomColor: 'rgba(41, 98, 255, 0.28)'
  })
  areaSeries.setData(data)

  chart.timeScale().fitContent()
}
export {
  handleCandleChart,
  handleCreateChart,
  handleMarker,
  handleMovingAverage,
  calculateSMA,
  handleHistogram,
  handleLineChart,
  handleAreaSeries
}
