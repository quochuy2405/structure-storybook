/* eslint-disable @next/next/no-img-element */
import { Button, ButtonIcon, Card, Title } from '@/components/atoms'
import ArticleCard from '@/components/molecules/ArticleCard'
import { scrollSpring } from '@/motions/index'
import { NextPage } from '@/types/next'
import { Tooltip } from '@mui/material'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import Styles from './HomePage.module.scss'
const cardVariants: Variants = {
  offscreen: {
    y: 200
  },
  onscreen: {
    y: 20,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1
    }
  }
}
type TSliderHome = {
  title: string
  content: string
}

const sliderContent: Record<number, TSliderHome> = {
  0: {
    title: 'Digital currency leads at market in the right amount.',
    content: `Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula,
              eget suscipit orci Vestibulum faucibus eget erat eget pretium. Donec commodo
              convallis ligula, eget suscipit orci`
  },
  1: {
    title: 'Digital currency.',
    content: `Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula,
              eget suscipit orci `
  }
}

const HomePage: NextPage = () => {
  const [slider, setSlider] = useState(0)

  const handleNext = () => {
    if (slider >= Object.keys(sliderContent).length - 1) {
      setSlider(0)
      return
    }
    setSlider((e) => e + 1)
  }

  const handlePrev = () => {
    if (slider < 1) {
      setSlider(Object.keys(sliderContent).length - 1)
      return
    }
    setSlider((e) => e - 1)
  }
  return (
    <Fragment>
      <div className={Styles.Banner}>
        <div className={Styles.Content}>
          <h2>Digital currency leads at market in the right amount.</h2>
          <p className={Styles.SubTitle}>
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula,
            eget suscipit orci
          </p>
          <div className={Styles.ButtonContent}>
            <Link href="/predictions">
              <Button className={Styles.Button} mode="primary">
                get started
              </Button>
            </Link>
            <Tooltip title="Developing">
              <Button className={Styles.ButtonOutline} outline mode="primary">
                view market
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className={Styles.CoinSystem}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/crb2APddijE"
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
        <motion.div
          key={slider}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%' }}
        >
          <Card className={Styles.PromotionContent}>
            <h2 className={Styles.TitleContent}>{sliderContent[slider]?.title}</h2>
            <p className={Styles.SubContent}>{sliderContent[slider]?.content}</p>
          </Card>
        </motion.div>

        <div className={Styles.ButtonSlide}>
          <ButtonIcon className={Styles.ButtonNav} onClick={handleNext}>
            <GrLinkNext />
          </ButtonIcon>
          <ButtonIcon className={Styles.ButtonNav} onClick={handlePrev}>
            <GrLinkPrevious />
          </ButtonIcon>
        </div>
      </motion.div>
      <Title size={2} className={Styles.Title}>
        Article
      </Title>
      <div className={Styles.ListArticle}>
        {[...Array(6)].map((_, index) => (
          <motion.div key={index} {...scrollSpring(index)}>
            <ArticleCard
              url={`/articles/${index}`}
              image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC"
              description={`Sau một thời gian làm việc với ReactJS với Client Side Rendering (CSR) thì gần đây, mình đang tìm hiểu về việc thực hiện Server Side Rendering (SSR) với ReactJS cụ thể là với NextJS - một framework cho chúng ta thực hiện SSR với ReactJS`}
            />
          </motion.div>
        ))}
      </div>

      <Title size={2} className={Styles.Title}>
        Blog
      </Title>
      <div className={Styles.ListArticle}>
        {[...Array(4)].map((_, index) => (
          <motion.div key={index} {...scrollSpring(index)}>
            <ArticleCard
              url={`/blogs/${index}`}
              image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC"
              isBlog
            />
          </motion.div>
        ))}
      </div>
    </Fragment>
  )
}

export default HomePage
