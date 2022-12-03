/* eslint-disable @next/next/no-page-custom-font */
import NextHead from 'next/head'

interface MetaProps {
  title: string
  description: string
  image?: string
}

function Meta({ title, description, image = '/logo/logo512.png' }: MetaProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta key="meta-title" name="title" content={title} />
      <meta key="meta-description" name="description" content={description} />
      <meta key="meta-og:type" property="og:type" content="website" />
      <meta key="meta-og:title" property="og:title" content={title} />
      <meta key="meta-og:description" property="og:description" content={description} />
      <meta key="meta-og:image" property="og:image" content={image} />
      <meta
        key="meta-twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <meta key="meta-twitter:title" property="twitter:title" content={title} />
      <meta
        key="meta-twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta key="meta-twitter:image" property="twitter:image" content={image} />
    </NextHead>
  )
}

export default Meta
