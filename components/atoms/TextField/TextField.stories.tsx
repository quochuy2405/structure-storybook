import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextField from './TextField'

export default {
  title: 'Components/Atoms/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'Primary',
  placeholder: 'Enter your name'
}

export const Error = Template.bind({})
Error.args = {
  title: 'Error',
  errors: {
    empty: 'required'
  }
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Secondary',
  placeholder: 'Enter your name'
}

export const Password = Template.bind({})
Password.args = {
  title: 'Password',
  placeholder: 'Enter your password',
  type: 'password'
}
