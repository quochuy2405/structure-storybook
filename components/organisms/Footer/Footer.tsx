import { Avatar } from '@/components/atoms'
import Icon from '@/components/atoms/Icon'
import Styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={Styles.Footer}>
      <div className={Styles.QuickLink}>
        <div className={Styles.Logo}>
          <Avatar />
          <h2>Predict</h2>
        </div>
        <p className={Styles.QuickLinkDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae, facere rem
          ducimus ab.
        </p>
        <h2 className={Styles.QuickLinkTitle}>Quick Links</h2>
        <ul className={Styles.QuickLinkList}>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor sit</li>
          <li>amet consectetur adipisicing</li>
          <li> veniam beatae neque.</li>
          <li> Quisquam rerum</li>
          <li> rerum neque culpa</li>
        </ul>
      </div>

      <div className={Styles.News}>
        <div className={Styles.NewsItem}>
          <div className={Styles.Thumbnail}>
            <Avatar />
          </div>
          <div className={Styles.Content}>
            <div className={Styles.Title}>NEWS</div>
            <div className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt illum
              sint culpa, labore cum nisi.
            </div>
          </div>
        </div>
        <div className={Styles.NewsItem}>
          <div className={Styles.Thumbnail}>
            <Avatar />
          </div>
          <div className={Styles.Content}>
            <div className={Styles.Title}>NEWS</div>
            <div className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt illum
              sint culpa, labore cum nisi.
            </div>
          </div>
        </div>
        <div className={Styles.NewsItem}>
          <div className={Styles.Thumbnail}>
            <Avatar />
          </div>
          <div className={Styles.Content}>
            <div className={Styles.Title}>NEWS</div>
            <div className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt illum
              sint culpa, labore cum nisi.
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.Contacts}>
        <div className={Styles.ICons}>
          <Icon type="facebook" size={35} />
          <Icon type="linker" size={35} />
          <Icon type="facebook" size={35} />
        </div>
        <p>©HPNV 2022</p>
      </div>
    </div>
  )
}

export default Footer
