import { Button, SpeedDial, Title } from '@/components/atoms'
import { ArticleCard } from '@/components/molecules'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { TbWritingSign } from 'react-icons/tb'
import { CiGrid2H, CiGrid41 } from 'react-icons/ci'
import { TiNews } from 'react-icons/ti'
import Styles from './Articles.module.scss'
import clsx from 'clsx'
import { TKeyValue } from '@/types/common'
import { MdOutlineArticle } from 'react-icons/md'
export interface Articles {
  data?: Array<object>
}

const layoutOptions: TKeyValue = {
  Grid: <CiGrid41 />,
  List: <CiGrid2H />
}

const Articles: React.FC<Articles> = ({}) => {
  const [layout, setLayout] = useState('Grid')

  const handleToggleLayout = () => {
    setLayout((layout) => (layout === 'Grid' ? 'List' : 'Grid'))
  }

  return (
    <>
      <div className={Styles.Articles}>
        <div className={Styles.Popular}>
          <div className={Styles.Titles}>
            <Title size={1.2}>
              <span className={Styles.Title}>
                <MdOutlineArticle size={20} />
                <h2>POPULAR</h2>
              </span>
            </Title>
            <Button
              className={Styles.ChangeLayout}
              icon={layoutOptions[layout]}
              onClick={handleToggleLayout}
            >
              {layout.toString()}
            </Button>
          </div>
          <div
            className={clsx(Styles.ArticleGrid, {
              [Styles.ArticleList as string]: layout === 'List'
            })}
          >
            {[...Array(10)].map((_, index) => (
              <motion.div key={index} className={Styles.Article}>
                <ArticleCard
                  url={`/articles/${index}`}
                  image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC"
                  description={`Sau một thời gian làm việc với ReactJS với Client Side Rendering (CSR) thì gần đây, mình đang tìm hiểu về việc thực hiện Server Side Rendering (SSR) với ReactJS cụ thể là với NextJS - một framework cho chúng ta thực hiện SSR với ReactJS`}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className={Styles.ThisWeek}>
          <div className={Styles.Titles}>
            <Title size={1.2}>
              <span className={Styles.Title}>
                <TiNews size={20} />
                <h2>New Articles</h2>
              </span>
            </Title>
            <hr />
          </div>
          <div className={Styles.ArticleList}>
            {[...Array(6)].map((_, index) => (
              <motion.div key={index} className={Styles.Article}>
                <ArticleCard
                  url={`/articles/${index}`}
                  image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC"
                  description={`Sau một thời gian làm việc với ReactJS với Client Side Rendering (CSR) thì gần đây, mình đang tìm hiểu về việc thực hiện Server Side Rendering (SSR) với ReactJS cụ thể là với NextJS - một framework cho chúng ta thực hiện SSR với ReactJS`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <SpeedDial tooltip="Click for create new article">
        <Button mode="warning" icon={<TbWritingSign size={20} />}>
          <Link href="/articles/create">Write your article</Link>
        </Button>
      </SpeedDial>
    </>
  )
}

export default Articles
