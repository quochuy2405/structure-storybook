import { TChart } from '@/components/molecules/ChartView/ChartView'
import { PredictionPage } from '@/components/templates'
import { setPredicting } from '@/features/slices/predictions/predicting'
import { incrementByAmount } from '@/features/slices/predictions/timer'
import { useAppDispatch } from '@/hooks/useRedux'
import { useSnackbar } from 'notistack'
import useValidate from '@/hooks/useValidate'
import Layouts from '@/layouts/index'
import {
  TPredictQuery,
  TResponsePredict,
  TResponsePredictData
} from '@/types/predictions'
import { ReactElement, useEffect, useRef, useState } from 'react'
import axiosClient from '@/pages/api/axiosClient'
import { NextPageWithLayout } from '@/pages/_app'
import { useRouter } from 'next/router'
import { urlCoins } from '@/constants/coins'

const initChart: TResponsePredict = {
  model: '',
  data: {
    actual: [],
    predict: []
  }
}
interface IPredictionProps {
  chart?: TResponsePredictData
}

const Prediction: NextPageWithLayout<IPredictionProps> = ({ chart = initChart.data }) => {
  const { enqueueSnackbar } = useSnackbar()
  const { query, isReady } = useRouter()
  const { methods, handleClearForm } = useValidate<TPredictQuery>({})
  const [dataChart, setDataChart] = useState<TResponsePredict[]>([
    {
      model: '',
      data: chart
    }
  ])
  const dispatch = useAppDispatch()
  const [chartType, setChartType] = useState<TChart>('candle')
  const viewChart = useRef<TChart>(chartType)

  const getCoin = async () => {
    try {
      const { status, data } = await axiosClient.get(
        `/${urlCoins[query.coin as string]}`,
        {
          timeout: 3000
        }
      )

      if (status === 200) {
        setDataChart([
          {
            model: '',
            data: {
              actual: data,
              predict: []
            }
          }
        ])
      } else {
      }
    } catch (error) {}
  }

  const handleSubmitForm = async (data: TPredictQuery) => {
    dispatch(setPredicting(true))
    dispatch(incrementByAmount(10))
    const models = data.models.join('_').toLowerCase()
    const url = urlCoins[query?.coin as string]
    if (models) {
      const { status, data: response } = await axiosClient(
        `/${url}/predict/${models}/${data.amount.value}`
      )

      if (status === 200) {
        const chartData = response as Array<TResponsePredict>
        const predictTime = setTimeout(() => {
          dispatch(setPredicting(false))
          setDataChart(chartData)
        }, 1000)
        return () => clearTimeout(predictTime)
      } else {
        dispatch(setPredicting(false))
      }
    } else {
      enqueueSnackbar('\xa0\xa0You need choose minimum a model', {
        variant: 'warning',
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        }
      })
      dispatch(setPredicting(false))
    }
  }
  const handleReset = () => {
    handleClearForm()
    getCoin()
  }

  useEffect(() => {
    if (isReady) getCoin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady])

  const props = {
    methods,
    dataChart,
    chartType,
    viewChart: viewChart.current,
    setChartType,
    handleSubmitForm,
    handleReset
  }

  return <PredictionPage {...props} />
}

Prediction.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}

export default Prediction
