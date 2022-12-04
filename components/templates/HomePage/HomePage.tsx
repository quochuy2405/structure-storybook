/* eslint-disable @next/next/no-img-element */
import { Button, ButtonIcon, Card, Title } from '@/components/atoms'
import ArticleCard from '@/components/molecules/ArticleCard'
import { Footer, Header } from '@/components/organisms'
import { NextPage } from '@/types/next'
import { motion, Variants } from 'framer-motion'
import { scrollSpring } from 'motions'
import { Fragment } from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import shortid from 'shortid'
import Styles from './HomePage.module.scss'
const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 20,
    rotate: -6,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <div className={Styles.Banner}>
        <div className={Styles.Content}>
          <h2>Digital currency leads at market in the right amount.</h2>
          <p className={Styles.SubTitle}>
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula,
            eget suscipit orci
          </p>
          <div className={Styles.ButtonContent}>
            <Button className={Styles.Button} mode="primary">
              get started
            </Button>
            <Button className={Styles.ButtonOutline} outline mode="primary">
              view market
            </Button>
          </div>
        </div>
        <div className={Styles.CoinSystem}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dBOSUER_5T4?list=TLGGNnD3VLhx5_MwMzEyMjAyMg"
            title="Basic demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className={Styles.Promotion}
        variants={cardVariants}
      >
        <Card className={Styles.PromotionContent}>
          <h2 className={Styles.TitleContent}>
            Digital currency leads at market in the right amount.
          </h2>
          <p className={Styles.SubContent}>
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula,
            eget suscipit orci Vestibulum faucibus eget erat eget pretium. Donec commodo
            convallis ligula, eget suscipit orci
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
      </motion.div>
      <Title size={2} className={Styles.Title}>
        Article
      </Title>
      <div className={Styles.ListArticle}>
        {[...Array(6)].map((_, index) => (
          <motion.div key={shortid.generate()} {...scrollSpring(index)}>
            <ArticleCard />
          </motion.div>
        ))}
      </div>
      <Title size={2} className={Styles.Title}>
        Blog
      </Title>
      <div className={Styles.ListArticle}>
        {[...Array(4)].map((_, index) => (
          <motion.div key={shortid.generate()} {...scrollSpring(index)}>
            <ArticleCard />
          </motion.div>
        ))}
      </div>

      <Footer />
    </Fragment>
  )
}

export default HomePage
