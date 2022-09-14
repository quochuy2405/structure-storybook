import { ComponentMeta, ComponentStory } from '@storybook/react'
import DatePicker from './DatePicker'

export default {
  title: 'Components/Atoms/DatePicker',
  component: DatePicker
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args) => {
  return <DatePicker {...args} />
}

export const Index = Template.bind({})
Index.args = {
  title: 'DatePicker',
  name: 'DatePicker'
}
