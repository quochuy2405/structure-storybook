import Ethereum from '@/assets/svg/coins/Ethereum'
import { Button, CheckBox, Loading, Switch, Title } from '@/components/atoms'
import {
  ButtonPredict,
  CheckboxGroupForm,
  ModelReview,
  SelectForm
} from '@/components/molecules'
import { TChart } from '@/components/molecules/ChartView/ChartView'
import { amountPredictOpts } from '@/constants/options'
import { setVisualizeMovingAverage } from '@/features/slices/predictions/movingAverage'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { TStatusLoading } from '@/types/index'
import { TPredictQuery, TResponsePredict } from '@/types/predictions'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Dispatch, ReactElement, ReactNode, SetStateAction, useState } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { GrBitcoin, GrFormNextLink } from 'react-icons/gr'
import { SiBinance } from 'react-icons/si'
import Styles from './PredictionPage.module.scss'
const ChartView = dynamic(import('@/components/molecules/ChartView/ChartView'), {
  ssr: false
})

interface IPredictionPageProps {
  methods: UseFormReturn<TPredictQuery, any>
  dataChart: Array<TResponsePredict>
  isPredicting?: boolean
  chartType?: TChart
  viewChart?: TChart
  statusLoading: TStatusLoading
  handleReset: () => void
  handleSubmitForm: (data: TPredictQuery) => void
  setChartType: Dispatch<SetStateAction<TChart>>
}

export const coinIcons: Record<string, ReactElement> = {
  btc: <GrBitcoin size={100} color="orange" />,
  eth: <Ethereum />,
  bnb: <SiBinance size={100} color="orange" />
}
export const coinTexts: Record<string, string> = {
  btc: 'Bitcoin',
  eth: 'Ethereum',
  bnb: 'Binance Coin'
}
export const introPredict: Record<string, ReactNode> = {
  btc: (
    <div className={Styles.InfoCoin}>
      <div className={Styles.Coin}>{coinIcons['btc']}</div>

      <div className={Styles.InfoText}>
        <div className={Styles.Title}>
          <Title>BitCoin</Title>
          <h3>BTC</h3>
        </div>

        <p className={Styles.Description}>
          Bitcoin (BTC) is a decentralized currency that eliminates the need for central
          authorities such as banks or governments by using a peer-to-peer internet
          network to confirm transactions directly between users.
        </p>
      </div>
    </div>
  ),
  eth: (
    <div className={Styles.InfoCoin}>
      <div className={Styles.Coin}>{coinIcons['eth']}</div>
      <div className={Styles.InfoText}>
        <div className={Styles.Title}>
          <Title>Ethereum</Title>
          <h3>ETH</h3>
        </div>

        <p className={Styles.Description}>
          Ether (ETH) is the native cryptocurrency that powers Ethereum. It{"'"} primarily
          used to pay transaction fees and the creation of blockchain smart contracts.
        </p>
      </div>
    </div>
  ),
  bnb: (
    <div className={Styles.InfoCoin}>
      <div className={Styles.Coin}>{coinIcons['bnb']}</div>
      <div className={Styles.InfoText}>
        <div className={Styles.Title}>
          <Title>Binance Coin</Title>
          <h3>BNB</h3>
        </div>

        <p className={Styles.Description}>
          Binance Coin (BNB) is the native digital asset of the Binance ecosystem. It{"'"}
          s primarily used to pay transaction fees on the Binance Chain and Binance Smart
          Chain. It also provides utility benefits to users of the Binance exchange who
          can receive discounts on trading fees when using BNB.
        </p>
      </div>
    </div>
  )
}

const PredictionPage: React.FC<IPredictionPageProps> = ({
  chartType = 'candle',
  methods,
  dataChart,
  statusLoading,
  setChartType,
  handleSubmitForm,
  handleReset
}) => {
  const { query } = useRouter()
  const isMoving = useAppSelector((state) => state.movingAverage.value)
  const isMaker = useAppSelector((state) => state.marker.value)
  const isPredict = useAppSelector((state) => state.predicting.value)
  const dispatch = useAppDispatch()
  const [switchForm, setSwitchForm] = useState(false)

  return (
    <div>
      <div className={Styles.TradingView}>
        {query?.name && introPredict[query?.name as string]}
        <div className={Styles.View}>
          <div className={Styles.ChartContainer}>
            <ChartView
              moving={isMoving}
              size="full"
              data={dataChart}
              type={chartType}
              isMarker={isMaker}
            />
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className={Styles.FilterForm}
              key={!switchForm ? 'get' : 'predict'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {!switchForm ? (
                <div className={Styles.InTroPredict}>
                  <div className={Styles.IconCoin}>
                    {query?.name && coinIcons[query?.name as string]}
                  </div>
                  <Title size={1.7}>
                    Trading {coinTexts[query?.name as string] || ''} with the world{"'"}s
                    most popular crypto wallet
                  </Title>
                  <p>
                    Using a peer-to-peer internet network to confirm transactions directly
                    between users.
                  </p>
                  <Button
                    className={Styles.ButtonGetPredict}
                    icon={<GrFormNextLink size={20} color="white" />}
                    onClick={() => setSwitchForm(true)}
                    outline
                  >
                    Get Predict
                  </Button>
                </div>
              ) : (
                <motion.form
                  onSubmit={methods.handleSubmit(handleSubmitForm)}
                  key={switchForm ? 'get' : 'predict'}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <div className={clsx(Styles.FilterCol, Styles.Model)}>
                      <Title>CHART</Title>
                      <div className={Styles.CheckBoxGroup}>
                        <CheckBox
                          label="CANDLE"
                          value="candle"
                          checked={chartType === 'candle'}
                          onChange={(e) => setChartType(e.target.value as TChart)}
                        />
                        <CheckBox
                          label="LINE"
                          value="line"
                          checked={chartType === 'line'}
                          onChange={(e) => setChartType(e.target.value as TChart)}
                        />
                      </div>
                      <Title>MODEL</Title>
                      <h2 className={Styles.TitleGroup}>Mathematical statistics</h2>
                      <div className={Styles.CheckBoxGroup}>
                        <Controller
                          defaultValue={[]}
                          name="models"
                          control={methods.control}
                          render={({ field }) => (
                            <CheckboxGroupForm {...field}>
                              <CheckBox value="SVR" label="SVR" />
                              <CheckBox value="AR" label="AR" />
                            </CheckboxGroupForm>
                          )}
                        />
                      </div>
                      <h2 className={Styles.TitleGroup}>Machine learning</h2>
                      <div className={Styles.CheckBoxGroup}>
                        <Controller
                          defaultValue={[]}
                          name="models"
                          control={methods.control}
                          render={({ field }) => (
                            <CheckboxGroupForm {...field}>
                              <CheckBox value="LSTM" label="LSTM" />
                              <CheckBox value="PROPHET" label="PROPHET" />
                              <CheckBox value="GRU" label="GRU" />
                            </CheckboxGroupForm>
                          )}
                        />
                      </div>
                      <h2 className={Styles.TitleGroup}>Hybrid</h2>
                      <div className={Styles.CheckBoxGroup}>
                        <Controller
                          defaultValue={[]}
                          name="models"
                          control={methods.control}
                          render={({ field }) => (
                            <CheckboxGroupForm {...field}>
                              <CheckBox value="ARXES" label="AR X ES" />
                              <CheckBox value="ARIMAXLSTM" label="ARIMA X LSTM" />
                              <CheckBox value="BOOSTING" label="BOOSTING" />
                              <CheckBox value="STACKING" label="STACKING" />
                            </CheckboxGroupForm>
                          )}
                        />
                      </div>
                      <Title>MOVING AVERAGE</Title>
                      <div className={Styles.CheckBoxGroup}>
                        <Switch
                          checked={isMoving}
                          onClick={() => dispatch(setVisualizeMovingAverage(!isMoving))}
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
                        {/* <SelectForm
                    className={Styles.Select}
                    options={featureOpts}
                    methods={methods}
                    name="featured"
                    title="featured"
                    titleClassName={Styles.SelectText}
                  /> */}
                      </div>
                    </div>
                    <div className={Styles.Submit}>
                      <Button
                        type="button"
                        mode="warning"
                        className={Styles.ButtonSubmit}
                        disabled
                      >
                        {!isMaker ? 'View' : 'Remove'} Marker
                      </Button>
                      <ButtonPredict className={Styles.ButtonSubmit} />
                    </div>
                    <div className={Styles.Submit}>
                      <Button
                        type="button"
                        mode="primary"
                        className={Styles.ButtonSubmit}
                        onClick={handleReset}
                        disabled={isPredict}
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                </motion.form>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <Title size={2} className={Styles.TitleReview}>
          Review Model
        </Title>

        <div className={Styles.ModelView}>
          {dataChart.map(
            ({ model }, index) =>
              model && (
                <ModelReview
                  isBest={!index}
                  name={model.toUpperCase()}
                  MAE={0.9}
                  MSE={1}
                  RMSE={0.2}
                  RSquared={0.99}
                />
              )
          )}

          {/* <ModelReview name="ARIMA" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="SVR" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="ARIMA X LSTM" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="GRU" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="BOOSTING" MAE={0} MSE={0} RMSE={0} RSquared={0} />
        <ModelReview name="STACKING" MAE={0} MSE={0} RMSE={0} RSquared={0} /> */}
        </div>
      </div>
      {statusLoading && (
        <Loading status={statusLoading.status} text={statusLoading.message} />
      )}
    </div>
  )
}

export default PredictionPage
