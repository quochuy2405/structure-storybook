import { ComponentMeta, ComponentStory } from '@storybook/react'
import { type } from 'os'
import Title from './Title'

export default {
  title: 'Components/Atoms/Title',
  component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => {
  return <Title {...args} />
}

export const Default = Template.bind({})
Default.args = { title: 'String', size: 1 }

export const Small = Template.bind({})
Small.args = { title: 'String', size: 0.5 }

export const Medium = Template.bind({})
Medium.args = { title: 'String', size: 1.5 }

export const Large = Template.bind({})
Large.args = { title: 'String', size: 2 }
