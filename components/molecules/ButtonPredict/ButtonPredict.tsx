import { Button } from '@/components/atoms'
import Styles from './ButtonPredict.module.scss'
import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { AiOutlineLoading } from 'react-icons/ai'
import { decrement } from '@/features/slices/predictions/timer'
export interface IButtonPredictProps {
  className: string
}
const ButtonPredict: React.FC<IButtonPredictProps> = ({ className }) => {
  const count = useAppSelector((state) => state.timer.value)
  const isPredicting = useAppSelector((state) => state.predicting.value)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (count > 0 && !isPredicting) {
      const time = setTimeout(() => {
        dispatch(decrement())
      }, 1000)
      return () => clearTimeout(time)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isPredicting])
  return (
    <Button
      type="submit"
      mode="danger"
      className={className}
      disabled={count > 0 || !!isPredicting}
      icon={
        isPredicting && (
          <div className={Styles.RotateLoading}>
            <AiOutlineLoading size={18} />
          </div>
        )
      }
    >
      <>{!isPredicting && count > 0 ? <span>{count}s</span> : <> Predict</>}</>
    </Button>
  )
}

export default memo(ButtonPredict)
