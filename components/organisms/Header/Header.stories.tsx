import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from './Header'

export default {
  title: 'Components/Organisms/Header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />
}

export const Default = Template.bind({})
