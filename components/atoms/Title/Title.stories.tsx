import { ComponentMeta, ComponentStory } from '@storybook/react'
import Title from './Title'

export default {
  title: 'Components/Atoms/Title',
  component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => {
  return <Title {...args}>String</Title>
}

export const Default = Template.bind({})
Default.args = { size: 1 }

export const Small = Template.bind({})
Small.args = { size: 0.5 }

export const Medium = Template.bind({})
Medium.args = { size: 1.5 }

export const Large = Template.bind({})
Large.args = { size: 2 }
