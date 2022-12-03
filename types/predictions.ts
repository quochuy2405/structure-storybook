import { IOptionSelect } from '@/components/atoms/Select/Select'

export type TPredictQuery = {
  models: Array<string>
  amount: IOptionSelect
  featured: IOptionSelect
}
