import { ComponentMeta, ComponentStory } from '@storybook/react'
import Blogs from './Blogs'

export default {
  title: 'Components/Organisms/Blogs',
  component: Blogs
} as ComponentMeta<typeof Blogs>

export const BlogsPage: ComponentStory<typeof Blogs> = (args) => {
  return <Blogs {...args} />
}
