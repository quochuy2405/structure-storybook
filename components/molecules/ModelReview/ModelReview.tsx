import { Avatar, Card } from '@/components/atoms'
import Tooltip from '@mui/material/Tooltip'
import React, { Fragment, memo } from 'react'
import { FcIdea } from 'react-icons/fc'
import Styles from './ModelReview.module.scss'
export interface IModelReviewProps {
  name?: string
  MAE?: number
  MSE?: number
  RMSE?: number
  RSquared?: number
  isBest?: boolean
}
const ModelReview: React.FC<IModelReviewProps> = ({
  name = 'MODEL',
  MAE,
  MSE,
  RMSE,
  RSquared,
  isBest
}) => {
  return (
    <Card className={Styles.ModelReview}>
      <Fragment>
        <div className={Styles.ModelName}>
          <Avatar>
            {isBest && (
              <Tooltip title="Is the best model">
                <FcIdea size={30} />
              </Tooltip>
            )}
          </Avatar>
          <p>{name}</p>
        </div>
        <ul>
          <li>
            MAE (Mean absolute error) :{'\xa0\xa0'} {MAE?.toString() || 'No result'}
          </li>
          <li>
            MSE (Mean Squared Error) :{'\xa0\xa0'} {MSE?.toString() || 'No result'}
          </li>
          <li>
            RMSE (Root Mean Squared Error) :{'\xa0\xa0'} {RMSE?.toString() || 'No result'}
          </li>
          <li>
            R-squared (Coefficient of determination) :{'\xa0\xa0'}
            {RSquared?.toString() || 'No result'}
          </li>
        </ul>
      </Fragment>
    </Card>
  )
}

export default memo(ModelReview)
