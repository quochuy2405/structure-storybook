import EditorCreate from '@/pages/articles/create'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Templates/EditorCreate',
  component: EditorCreate
} as ComponentMeta<typeof EditorCreate>

const Template: ComponentStory<typeof EditorCreate> = () => {
  return <EditorCreate />
}

export const Default = Template.bind({})
