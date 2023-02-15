import { Logo } from '@/assets/svg'
import { Title } from '@/components/atoms'
import Icon from '@/components/atoms/Icon'
import Image from 'next/image'
import { memo } from 'react'
import Styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={Styles.Footer}>
      <div className={Styles.Logo}>
        <Logo />
        <Title size={2}>Predict</Title>
      </div>
      <div className={Styles.Contents}>
        <div className={Styles.Part}>
          <Title size={1.3}>About</Title>
          <ul>
            <li>About</li>
            <li>Predictions</li>
            <li>Ftisu</li>
            <li>University of Information Technology</li>
            <li>Information Systems</li>
          </ul>
        </div>
        <div className={Styles.Part}>
          <Title size={1.3}>Products</Title>
          <ul>
            <li>ISCV</li>
            <li>Predictions</li>
            <li>Trading bot</li>
            <li>Natural language analysis</li>
          </ul>
        </div>
        <div className={Styles.Part}>
          <Title size={1.3}>Get In Touch</Title>
          <ul>
            <li>Contact us</li>
            <li>Advertise</li>
            <li>FAQ</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div className={Styles.Part}>
          <Title size={1.3}>The Fire Print</Title>
          <ul>
            <li>Privacy</li>
            <li>Terms of use</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className={Styles.Contents}>
        <div className={Styles.Part}>
          <Title size={1.3}>Team Research</Title>
          <ul>
            <p>
              The field of applied mathematics and machine learning research for
              application in the field of time series (Time Series), Blockchain
              application-oriented research to change the current Web02 process....
            </p>
          </ul>
        </div>
        <div className={Styles.CopyRight}>
          <h1>©2022 HPNV </h1>
        </div>
        <div className={Styles.Medial}>
          <Title size={1}>Social Medial</Title>
          <div className={Styles.Social}>
            <Icon type="facebook" size={25} />
            <Icon type="youtube" size={25} />
            <Icon type="github" size={25} />
          </div>
        </div>
        <div className={Styles.Part}>
          <div className={Styles.BelongTo}>
            <Image
              src="https://ftisu.vn/static/media/logoname176.5e8347a6739c57831114.png"
              alt="ftisu"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Footer)
