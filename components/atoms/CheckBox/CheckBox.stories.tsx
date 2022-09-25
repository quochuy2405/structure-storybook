import { ComponentMeta, ComponentStory } from '@storybook/react'
import CheckBox from './CheckBox'

export default {
  title: 'Components/Atoms/Checkbox',
  component: CheckBox
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => {
  return <CheckBox {...args} />
}

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
  label: 'label',
  name: 'name'
}

export const Error = Template.bind({})
Error.args = {
  label: 'required',
  name: 'name',
  isError: true
}
