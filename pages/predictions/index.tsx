import PredictionPage from '@/components/templates/PredictionPage'
import Layouts from 'layouts'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const Prediction: NextPageWithLayout = () => {
  return <PredictionPage />
}

Prediction.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default Prediction
