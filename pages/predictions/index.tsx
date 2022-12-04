import { TChart } from '@/components/molecules/ChartView/ChartView'
import { PredictionPage } from '@/components/templates'
import useValidate from '@/hooks/useValidate'
import { Layouts } from '@/layouts/index'
import { TPredictQuery, TResponsePredict } from '@/types/predictions'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { post } from '../api/common'
import { predictByParams } from '../api/prediction'
import { GET_PREDICT, QUERY_PREDICT } from '../api/routers'
import { NextPageWithLayout } from '../_app'

const initChart: TResponsePredict = {
  model: '',
  data: {
    actual: [],
    predict: []
  }
}

const Prediction: NextPageWithLayout = () => {
  const methods = useValidate<TPredictQuery>({})
  const [dataChart, setDataChart] = useState<TResponsePredict>(initChart)
  const [chartType, setChartType] = useState<TChart>('candle')
  const [isPredicting, setIsPredicting] = useState(false)
  const viewChart = useRef<TChart>(chartType)

  useEffect(() => {
    const callBack = async () => {
      const response = await predictByParams(7, GET_PREDICT)
      if (response) console.log(response)
    }
    callBack()
  }, [])

  const handleSubmitForm = async (data: TPredictQuery) => {
    setIsPredicting(true)
    const response = (await post<TPredictQuery>(
      QUERY_PREDICT,
      data
    )) as Array<TResponsePredict>

    if (response?.length) {
      console.log('model', response[0]?.model)
      const predictTime = setTimeout(
        () => {
          setIsPredicting(false)
          setDataChart({
            model: response[0]?.model,
            data: response[0]?.data
          })
        },

        1200
      )
      return () => clearTimeout(predictTime)
    } else {
      setIsPredicting(false)
    }
  }
  const handleSaveView = () => {
    console.log(chartType)
  }

  const props = {
    methods,
    isPredicting,
    dataChart,
    chartType,
    viewChart: viewChart.current,
    setChartType,
    handleSubmitForm,
    handleSaveView
  }

  return <PredictionPage {...props} />
}

Prediction.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default Prediction
