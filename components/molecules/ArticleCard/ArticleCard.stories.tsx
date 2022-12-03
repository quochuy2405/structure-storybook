import { ComponentMeta, ComponentStory } from '@storybook/react'
import ArticleCard from './ArticleCard'
export default {
  title: 'Components/Molecules/ArticleCard',
  component: ArticleCard
} as ComponentMeta<typeof ArticleCard>

const Template: ComponentStory<typeof ArticleCard> = (args) => {
  return <ArticleCard {...args} />
}

export const Index = Template.bind({})
Index.args = {
  url: '',
  image: '',
  title: 'Predict Bitcoin With Ensemble Learning',
  description:
    'We introspect your database to provide APIs instantly. Stop building repetitive CRUD endpoints and focus on your product.',
  author: 'HB',
  avatar: 'sss'
}
