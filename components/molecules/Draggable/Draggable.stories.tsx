import { ComponentMeta, ComponentStory } from '@storybook/react'
import Draggable from './Draggable'

export default {
  title: 'Components/Molecules/Draggable',
  component: Draggable
} as ComponentMeta<typeof Draggable>

export const Default: ComponentStory<typeof Draggable> = (arg) => {
  return <Draggable {...arg} />
}
