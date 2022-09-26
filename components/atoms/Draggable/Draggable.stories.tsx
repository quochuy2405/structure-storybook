import { ComponentMeta, ComponentStory } from '@storybook/react'
import Draggable, { getItems } from './Draggable'

export default {
  title: 'Components/Atoms/Draggable',
  component: Draggable
} as ComponentMeta<typeof Draggable>

const Template: ComponentStory<typeof Draggable> = (args) => {
  return <Draggable {...args} />
}

export const Default = Template.bind({})
Default.args = {
  listOptions: getItems(5)
}
