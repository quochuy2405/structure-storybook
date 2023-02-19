import clsx from 'clsx'
import React, { ReactNode } from 'react'
import Styles from './Loading.module.scss'
import { VscError } from 'react-icons/vsc'
import { BiMailSend } from 'react-icons/bi'
import { TiTickOutline } from 'react-icons/ti'
import { GiRunningNinja } from 'react-icons/gi'
import { AiOutlineUnlock } from 'react-icons/ai'
export interface ILoadingProps {
  status?: 'success' | 'error' | 'email' | 'checking' | string
  text?: string
}
const statusIcon: Record<string, ReactNode> = {
  email: <BiMailSend size={30} />,
  checking: <AiOutlineUnlock size={30} />,
  error: <VscError size={30} />,
  success: <TiTickOutline size={30} />,
  running: <GiRunningNinja size={30} />
}

const Loading: React.FC<ILoadingProps> = ({ status = '', text }) => {
  const typeOthers = ['email', 'checking', 'running']
  const classNames = clsx(Styles.LdsRipple, {
    [Styles.LdsRippleError as string]: status === 'error',
    [Styles.LdsRippleSuccess as string]: status === 'success',
    [Styles.LdsRippleInfo as string]: typeOthers.includes(status)
  })
  const textClassNames = clsx(Styles.Text, {
    [Styles.TextError as string]: status === 'error',
    [Styles.TextSuccess as string]: status === 'success',
    [Styles.TextInfo as string]: typeOthers.includes(status)
  })
  if (!status) return <></>
  return (
    <div className={Styles.Loading}>
      <div className={classNames}>
        <div></div>
        <div></div>
        {status && (
          <div className={Styles.StatusIcon}>{statusIcon[status as string]}</div>
        )}
      </div>
      {text && <p className={textClassNames}>{text}</p>}
    </div>
  )
}

export default Loading
