import { Button, Card, CheckBox, Title } from '@/components/atoms'
import { CheckboxGroupForm, ModelReview, SelectForm } from '@/components/molecules'
import { TChart } from '@/components/molecules/ChartView/ChartView'
import { Footer, Header } from '@/components/organisms'
import { TPredictQuery, TResponsePredict } from '@/types/predictions'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { showUp } from 'motions'
import dynamic from 'next/dynamic'
import { Dispatch, SetStateAction } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { AiOutlineLoading } from 'react-icons/ai'
import Styles from './PredictionPage.module.scss'
import { amountPredictOpts, featureOpts } from './selectOptions'
const ChartView = dynamic(import('@/components/molecules/ChartView/ChartView'), {
  ssr: false
})
interface IPredictionPageProps {
  methods: UseFormReturn<TPredictQuery, any>
  dataChart: TResponsePredict
  isPredicting?: boolean
  chartType?: TChart
  viewChart?: TChart
  handleSaveView: () => void
  handleSubmitForm: (data: TPredictQuery) => void
  setChartType: Dispatch<SetStateAction<TChart>>
}

const PredictionPage: React.FC<IPredictionPageProps> = ({
  isPredicting = false,
  chartType = 'candle',
  methods,
  dataChart,
  setChartType,
  handleSubmitForm,
  handleSaveView
}) => {
  return (
    <div className={Styles.TradingView}>
      <Header />

      <Title size={2} className={Styles.TitleReview}>
        Predict
      </Title>
      <div className={Styles.View}>
        <Card className={Styles.ChartContainer}>
          <ChartView size="full" data={dataChart.data} type={chartType} />
        </Card>
        <motion.form
          onSubmit={methods.handleSubmit(handleSubmitForm)}
          className={Styles.FilterForm}
          {...showUp}
        >
          <Card>
            <div className={clsx(Styles.FilterCol, Styles.Model)}>
              <Title>CHART</Title>
              <div className={Styles.CheckBoxGroup}>
                <CheckBox
                  label="Candle"
                  value="candle"
                  checked={chartType === 'candle'}
                  onChange={(e) => setChartType(e.target.value as TChart)}
                />
                <CheckBox
                  label="Line"
                  value="line"
                  checked={chartType === 'line'}
                  onChange={(e) => setChartType(e.target.value as TChart)}
                />
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
                  options={featureOpts}
                  methods={methods}
                  name="featured"
                  title="featured"
                  titleClassName={Styles.SelectText}
                />
              </div>
            </div>
            <div className={Styles.Submit}>
              <Button
                type="button"
                mode="primary"
                className={Styles.ButtonSubmit}
                onClick={handleSaveView}
              >
                Save View
              </Button>
              <Button
                type="submit"
                mode="danger"
                className={Styles.ButtonSubmit}
                disabled={!!isPredicting}
                icon={
                  isPredicting && (
                    <div className={Styles.rotateLoading}>
                      <AiOutlineLoading size={18} />
                    </div>
                  )
                }
              >
                Predict
              </Button>
            </div>
          </Card>
        </motion.form>
      </div>

      <Title size={2} className={Styles.TitleReview}>
        Review Model
      </Title>

      <div className={Styles.ModelView}>
        <ModelReview name="SLTM" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="ARIMA" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="SVR" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="ARIMA X LSTM" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="GRU" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="BOOSTING" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="STACKING" MAE={0} MSE={0} RMSE={0} RSquared={0} />
      </div>
      <Footer />
    </div>
  )
}

export default PredictionPage
