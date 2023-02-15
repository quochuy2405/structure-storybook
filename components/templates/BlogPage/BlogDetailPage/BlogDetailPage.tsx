import { Avatar, Button, Card } from '@/components/atoms'
import { templateArticle } from '@/mocks/index'
import Prism from 'prismjs'
import { Fragment, useEffect } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { BiShare } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'
import Image from 'next/image'
import Styles from './BlogDetailPage.module.scss'
export interface IBlogDetailPageProps {
  template?: string
}
const BlogDetailPage: React.FC<IBlogDetailPageProps> = ({
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
      <Card className={Styles.BlogDetail}>
        <div className={Styles.BoxBlog}>
          <div dangerouslySetInnerHTML={{ __html: template }} />
        </div>
      </Card>
      <div className={Styles.Author}>
        <Card className={Styles.InfoAuthor}>
          <Fragment>
            <div className={Styles.InfoName}>
              <Avatar>
                <Image
                  src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/305443131_586306206527514_3377930383707742756_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fgpjtNjUxnkAX9p9lkk&tn=17YDmb8_cIGQru1K&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfAjywq_n4ItIlS2mgnb-RDguFzGHshzjhKj3U-9emrvzg&oe=63ADD046"
                  layout="fill"
                  alt="huy bui"
                />
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

export default BlogDetailPage
