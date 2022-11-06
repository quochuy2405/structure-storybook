/* eslint-disable @next/next/no-img-element */
import { CoinSystems } from '@/assets/svg'
import { Header } from '@/components/organisms'
import { Fragment } from 'react'
import BackgroundMain from '@/assets/image/br.png'
import Styles from './Landing.module.scss'
import { Button, ButtonIcon, Card } from '@/components/atoms'
import Footer from '@/components/organisms/Footer'
import Decor from '@/assets/svg/Decor'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { NextPage } from '@/types/next'

const LandingPage: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <div className={Styles.Banner}>
        <div className={Styles.Bg}>
          <img src={BackgroundMain.src} alt="home" />
        </div>
        <div className={Styles.Content}>
          <h2>Digital currency leads at market in the right amount.</h2>
          <p className={Styles.SubTitle}>
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis
            ligula, eget suscipit orci
          </p>
          <div className={Styles.ButtonContent}>
            <Button className={Styles.Button} mode="warning">
              get started
            </Button>
            <Button className={Styles.ButtonOutline} outline mode="primary">
              view market
            </Button>
          </div>
        </div>
        <div className={Styles.CoinSystem}>
          <div>
            <CoinSystems />
          </div>
        </div>
      </div>

      <div className={Styles.Promotion}>
        <Card className={Styles.PromotionContent}>
          <div className={Styles.Decor}>
            <Decor />
          </div>
          <h2 className={Styles.TitleContent}>
            Digital currency leads at market in the right amount.
          </h2>
          <p className={Styles.SubContent}>
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis
            ligula, eget suscipit orci
          </p>
        </Card>
        <div className={Styles.ButtonSlide}>
          <ButtonIcon className={Styles.ButtonNav}>
            <GrLinkNext />
          </ButtonIcon>
          <ButtonIcon className={Styles.ButtonNav}>
            <GrLinkPrevious />
          </ButtonIcon>
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}

export default LandingPage
