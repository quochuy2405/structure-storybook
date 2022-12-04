import { PredictionPage } from '@/components/templates'
import useValidate from '@/hooks/useValidate'
import { IDataChartType } from '@/types/chart'
import { ReactElement, useEffect, useState } from 'react'
import { predictByParams } from '../api/prediction'
import { GET_PREDICT, QUERY_PREDICT } from '../api/routers'
import { Layouts } from '@/layouts/index'
import { NextPageWithLayout } from '../_app'
import { dataChartMocks } from '@/mocks/index'
import { TPredictQuery } from '@/types/predictions'
import { post } from '../api/common'
const Prediction: NextPageWithLayout = () => {
  const methods = useValidate<TPredictQuery>({})
  const [, setDataChart] = useState<Array<IDataChartType>>([])
  const [isPredicting, setIsPredicting] = useState(false)
  useEffect(() => {
    const callBack = async () => {
      const response = await predictByParams(7, GET_PREDICT)
      if (response) setDataChart(response)
      const predictTime = setTimeout(() => setIsPredicting(false), 1200)
      return () => clearTimeout(predictTime)
    }
    callBack()
  }, [])

  const handleSubmitForm = async (data: TPredictQuery) => {
    setIsPredicting(true)
    const response = await post<TPredictQuery>(QUERY_PREDICT, data)
    if (response) setDataChart(response)
    const predictTime = setTimeout(() => setIsPredicting(false), 1200)
    return () => clearTimeout(predictTime)
  }

  const props = {
    methods,
    isPredicting,
    dataChart: dataChartMocks,
    handleSubmitForm
  }

  return <PredictionPage {...props} />
}

Prediction.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default Prediction
