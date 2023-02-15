import { Button } from '@/components/atoms'
import Styles from './BlogEditPage.module.scss'

const BlogEditPage = () => {
  return (
    <div className={Styles.Banner}>
      <div className={Styles.Content}>
        <h2>Digital currency leads at market in the right amount.</h2>
        <p className={Styles.SubTitle}>
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget
          suscipit orci
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
    </div>
  )
}

export default BlogEditPage
