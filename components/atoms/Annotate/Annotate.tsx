import React from 'react'
import { IoIosSquare } from 'react-icons/io'
import Styles from './Annotate.module.scss'

interface IAnnotateProps {
  color?: string
  content?: string
}

const Annotate: React.FC<IAnnotateProps> = ({ color, content }) => {
  return (
    <div className={Styles.Annotate}>
      <IoIosSquare size={12} color={color} />
      <p>{content}</p>
    </div>
  )
}

export default Annotate
