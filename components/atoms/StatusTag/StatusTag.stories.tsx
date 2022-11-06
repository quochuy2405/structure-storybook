import { ComponentMeta, ComponentStory } from '@storybook/react'
import StatusTag from './StatusTag'

export default {
  title: 'Components/Atoms/StatusTag',
  component: StatusTag
} as ComponentMeta<typeof StatusTag>

const Template: ComponentStory<typeof StatusTag> = (args) => {
  return <StatusTag {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  label: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  label: 'Secondary'
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  label: 'Warning'
}

export const Error = Template.bind({})
Error.args = {
  type: 'error',
  label: 'Error'
}
