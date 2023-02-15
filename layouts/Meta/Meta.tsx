/* eslint-disable @next/next/no-page-custom-font */
import NextHead from 'next/head'
import Script from 'next/script'

interface MetaProps {
  title: string
  description: string
  image?: string
}

function Meta({
  title,
  description,
  image = '../../assets/default-user.png'
}: MetaProps) {
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
      <link
        rel="icon"
        type="image/png"
        href="http://luhanhliendaiduong.com.vn/logo64.png"
      />
      <meta
        key="meta-twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta key="meta-twitter:image" property="twitter:image" content={image} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  )
}

export default Meta
