import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Default = Template.bind({})
export const Primary = Template.bind({})
Primary.args = {
  mode: 'primary'
}
export const Danger = Template.bind({})
Danger.args = {
  mode: 'danger'
}
export const Warning = Template.bind({})
Warning.args = {
  mode: 'warning'
}
