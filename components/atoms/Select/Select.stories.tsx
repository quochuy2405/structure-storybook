import { ComponentMeta, ComponentStory } from '@storybook/react'
import Select from './Select'

export default {
  title: 'Components/Atoms/Select',
  component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Select'
}
