import { ComponentMeta, ComponentStory } from '@storybook/react'
import SpeedDial from './SpeedDial'

export default {
  title: 'Components/Atoms/SpeedDial',
  component: SpeedDial
} as ComponentMeta<typeof SpeedDial>

export const Default: ComponentStory<typeof SpeedDial> = (args) => {
  return <SpeedDial {...args} />
}
