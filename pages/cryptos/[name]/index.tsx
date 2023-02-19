import { TChart } from '@/components/molecules/ChartView/ChartView'
import { PredictionPage } from '@/components/templates'
import { urlCoins } from '@/constants/coins'
import { setPredicting } from '@/features/slices/predictions/predicting'
import { incrementByAmount } from '@/features/slices/predictions/timer'
import { useAppDispatch } from '@/hooks/useRedux'
import useValidate from '@/hooks/useValidate'
import Layouts from '@/layouts/index'
import axiosClient from '@/pages/api/axiosClient'
import { NextPageWithLayout } from '@/pages/_app'
import {
  TPredictQuery,
  TResponsePredict,
  TResponsePredictData
} from '@/types/predictions'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { ReactElement, useEffect, useRef, useState } from 'react'

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

const initLoading = {
  status: '',
  message: ''
}

const Prediction: NextPageWithLayout<IPredictionProps> = ({ chart = initChart.data }) => {
  const { enqueueSnackbar } = useSnackbar()
  const { query, isReady } = useRouter()
  const { methods, handleClearForm } = useValidate<TPredictQuery>({})
  const [statusLoading, setStatusLoading] = useState(initLoading)
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
        `/${urlCoins[query.name as string]}`,
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
    const url = urlCoins[query?.name as string]
    if (models.split('_')[0]) {
      setStatusLoading({
        status: 'running',
        message: 'Models are predicting...'
      })
      axiosClient(`/${url}/predict/${models}/${data.amount.value}`)
        .then(({ data }) => {
          const chartData = data as Array<TResponsePredict>
          const predictTime = setTimeout(() => {
            dispatch(setPredicting(false))
            setStatusLoading({
              status: 'success',
              message: 'Models predicted'
            })
            setDataChart(chartData)
          }, 2000)
          const time = setTimeout(() => {
            setStatusLoading(initLoading)
          }, 4000)
          return () => {
            clearTimeout(predictTime)
            clearTimeout(time)
          }
        })
        .catch(() => {
          dispatch(setPredicting(false))
          setStatusLoading(initLoading)
        })
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
    statusLoading,
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
