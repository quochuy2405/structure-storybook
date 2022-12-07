import ArticleEditorEdit from '@/pages/articles/[id]/editors'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Templates/ArticleEditorEdit',
  component: ArticleEditorEdit
} as ComponentMeta<typeof ArticleEditorEdit>

const Template: ComponentStory<typeof ArticleEditorEdit> = () => {
  return <ArticleEditorEdit />
}

export const Default = Template.bind({})
