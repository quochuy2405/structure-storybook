import { Avatar, Button, Card } from '@/components/atoms'
import { templateArticle } from '@/mocks/index'
import Prism from 'prismjs'
import { Fragment, useEffect } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { BiShare } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

import { Facebook } from '@/assets/svg'
import Styles from './ArticleDetailPage.module.scss'
export interface IArticleDetailPageProps {
  template?: string
}
const ArticleDetailPage: React.FC<IArticleDetailPageProps> = ({
  template = templateArticle
}) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className={Styles.BodyContainer}>
      <div className={Styles.Reaction}>
        <AiOutlineLike size={30} color="white" />
        <MdFavoriteBorder size={30} color="white" />
        <BiShare size={30} color="white" />
      </div>
      <Card className={Styles.ArticleDetail}>
        <div className={Styles.BoxArticle}>
          <div dangerouslySetInnerHTML={{ __html: template }} />
        </div>
      </Card>
      <div className={Styles.Author}>
        <Card className={Styles.InfoAuthor}>
          <Fragment>
            <div className={Styles.InfoName}>
              <Avatar>
                <Facebook />
              </Avatar>
              <h3 className={Styles.Name}>Huy Bui</h3>
            </div>
            <Button mode="primary" className={Styles.ButtonFollow}>
              Follow
            </Button>
            <div className={Styles.InfoContent}>
              <p className={Styles.Title}>education</p>
              <p className={Styles.Content}>University of Information Technology</p>
              <p className={Styles.Title}>Location</p>
              <p className={Styles.Content}>Ho Chi Minh</p>
              <p className={Styles.Title}>joined</p>
              <p className={Styles.Content}>May 14, 2022</p>
              <p className={Styles.Title}>Work</p>
              <p className={Styles.Content}>Software Engineer</p>
            </div>
          </Fragment>
        </Card>
        <Card className={Styles.DetailAuthor}>
          <div className={Styles.More}>
            <h2>More from</h2>
            <h2 className={Styles.MoreFrom}>Huy Bui</h2>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ArticleDetailPage
