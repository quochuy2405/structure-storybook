import { Avatar, Card } from '@/components/atoms'
import React, { Fragment } from 'react'
import Styles from './ModelReview.module.scss'
export interface IModelReviewProps {
  name?: string
  MAE?: number
  MSE?: number
  RMSE?: number
  RSquared?: number
}
const ModelReview: React.FC<IModelReviewProps> = ({
  name = 'MODEL',
  MAE,
  MSE,
  RMSE,
  RSquared
}) => {
  return (
    <Card className={Styles.ModelReview}>
      <Fragment>
        <div className={Styles.ModelName}>
          <Avatar />
          <p>{name}</p>
        </div>
        <ul>
          <li>MAE (Mean absolute error) : {MAE?.toString() || 'No result'}</li>
          <li>MSE (Mean Squared Error) : {MSE?.toString() || 'No result'}</li>
          <li>RMSE (Root Mean Squared Error) : {RMSE?.toString() || 'No result'}</li>
          <li>
            R-squared (Coefficient of determination) :
            {RSquared?.toString() || 'No result'}
          </li>
        </ul>
      </Fragment>
    </Card>
  )
}

export default ModelReview
