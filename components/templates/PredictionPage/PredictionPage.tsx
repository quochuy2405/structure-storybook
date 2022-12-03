import { Button, Card, CheckBox, Title } from '@/components/atoms'
import { SelectForm } from '@/components/molecules'
import { CheckboxGroupForm } from '@/components/molecules'
import { Header } from '@/components/organisms'
import Footer from '@/components/organisms/Footer'
import { IDataChartType } from '@/types/chart'
import { TPredictQuery } from '@/types/predictions'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { Controller, UseFormReturn } from 'react-hook-form'
import Styles from './PredictionPage.module.scss'
import { amountPredictOpts } from './selectOptions'
const ChartView = dynamic(import('@/components/molecules/ChartView/ChartView'), {
  ssr: false
})
interface IPredictionPageProps {
  methods: UseFormReturn<TPredictQuery, any>
  dataChart: Array<IDataChartType>
  handleSubmitForm: (data: TPredictQuery) => void
}

const PredictionPage: React.FC<IPredictionPageProps> = ({
  methods,
  dataChart,
  handleSubmitForm
}) => {
  return (
    <div className={Styles.TradingView}>
      <Header />
      <div className={Styles.View}>
        <Card className={Styles.ChartContainer}>
          <ChartView size="full" data={dataChart} />
        </Card>
        <form
          onSubmit={methods.handleSubmit(handleSubmitForm)}
          className={Styles.FilterForm}
        >
          <Card>
            <div className={clsx(Styles.FilterCol, Styles.Model)}>
              <Title>CHART</Title>
              <div className={Styles.CheckBoxGroup}>
                <CheckBox label="Histogram" />
                <CheckBox label="Line" />
              </div>
              <Title>MODEL</Title>
              <div className={Styles.CheckBoxGroup}>
                <Controller
                  defaultValue={[]}
                  name="models"
                  control={methods.control}
                  render={({ field }) => (
                    <CheckboxGroupForm {...field}>
                      <CheckBox value="LSTM" label="LSTM" />
                      <CheckBox value="SVR" label="SVR" />
                      <CheckBox value="ARIMA" label="ARIMA" />
                      <CheckBox value="GRU" label="GRU" />
                      <CheckBox value="ARIMA_LSTM" label="ARIMA X LSTM" />
                      <CheckBox value="BOOSTING" label="BOOSTING" />
                      <CheckBox value="STACKING" label="STACKING" />
                    </CheckboxGroupForm>
                  )}
                />
              </div>
            </div>
            <div className={clsx(Styles.FilterCol, Styles.Filter)}>
              <div className={Styles.Time}>
                <SelectForm
                  className={Styles.Select}
                  options={amountPredictOpts}
                  methods={methods}
                  name="amount"
                  title="Amount Date Predict"
                  titleClassName={Styles.SelectText}
                />
                <SelectForm
                  className={Styles.Select}
                  options={[{ label: 'Production', value: '1' }]}
                  methods={methods}
                  name="featured"
                  title="featured"
                  titleClassName={Styles.SelectText}
                />
              </div>
            </div>
            <div className={Styles.Submit}>
              <Button type="button" mode="primary" className={Styles.ButtonSubmit}>
                Save View
              </Button>
              <Button type="submit" mode="danger" className={Styles.ButtonSubmit}>
                Predict
              </Button>
            </div>
          </Card>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default PredictionPage
