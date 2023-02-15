import { ComponentMeta, ComponentStory } from '@storybook/react'
import Articles from './Articles'

export default {
  title: 'Components/Organisms/Articles',
  component: Articles
} as ComponentMeta<typeof Articles>

export const ArticlesPage: ComponentStory<typeof Articles> = (args) => {
  return <Articles {...args} />
}
