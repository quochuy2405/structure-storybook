import { Avatar, Button, Card } from '@/components/atoms'
import Styles from './ArticleCard.module.scss'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
export interface IArticleCardProps {
  url?: string
  image?: string
  title?: string
  description?: string
  author?: string
  avatar?: string
  className?: string
}
const ArticleCard: React.FC<IArticleCardProps> = ({
  url,
  author,
  avatar,
  description,
  title,
  className
}) => {
  const classNames = clsx(Styles.Layout, {
    [className as string]: className
  })
  return (
    <Card>
      <>
        <div className={classNames}>
          <h2 className={Styles.Title}>{title}</h2>
          <p className={Styles.Description}>{description}</p>
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
                <p>View Article</p>
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
      </>
    </Card>
  )
}

export default ArticleCard
