import { Avatar, Button, Card } from '@/components/atoms'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { memo } from 'react'
import Styles from './ArticleCard.module.scss'
export interface IArticleCardProps {
  url?: string
  image?: string
  title?: string
  description?: string
  author?: string
  avatar?: string
  className?: string
  isBlog?: boolean
}
const ArticleCard: React.FC<IArticleCardProps> = ({
  url,
  author,
  avatar,
  description,
  image = '',
  title,
  isBlog,
  className
}) => {
  const classNames = clsx(Styles.Layout, {
    [className as string]: className
  })
  return (
    <Card>
      <div className={Styles.BoxArticle}>
        <div className={Styles.Thumbnail}>
          <Image
            src={image}
            alt={title}
            layout="fill"
            blurDataURL="https://1.bp.blogspot.com/-_OPh21BPAdY/Yozth5jiK4I/AAAAAAAAIvg/AmSLLUPevgMjG2JTHTYAxDL1PYZ6Vtn0QCNcBGAsYHQ/w600-h300-p-k-no-nu/mung-sinh-nhat-mot-tuoi-code-pro.png"
          />
        </div>
        <div className={Styles.Description}>
          <p>{description}</p>
        </div>
        <div className={classNames}>
          <h2 className={Styles.Title}>{title}</h2>
          <div className={Styles.Author}>
            <Avatar>
              <>{avatar && <Image src={avatar} layout="fill" alt={author} />}</>
            </Avatar>

            <p className={Styles.Name}>{author}</p>
          </div>
        </div>

        <div className={Styles.Other}>
          <Button mode="primary">
            <Link href={url || ''}>
              <div className={Styles.ViewArticle}>
                {isBlog ? <p>View Blog</p> : <p>View Article</p>}

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default memo(ArticleCard)
