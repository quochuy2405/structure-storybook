import { IOptionSelect } from '@/components/atoms/Select/Select'
import { IDataChartType } from './chart'

export type TPredictQuery = {
  models: Array<string>
  amount: IOptionSelect
  featured: IOptionSelect
}
export type TResponsePredictData = {
  actual: Array<IDataChartType>
  predict: Array<IDataChartType>
}

export type TResponsePredict = {
  model: string
  data: TResponsePredictData
}
