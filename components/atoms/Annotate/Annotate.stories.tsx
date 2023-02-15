import { ComponentMeta, ComponentStory } from '@storybook/react'
import Annotate from './Annotate'

export default {
  title: 'Components/Atoms/Annotate',
  component: Annotate
} as ComponentMeta<typeof Annotate>

const Template: ComponentStory<typeof Annotate> = (args) => {
  return <Annotate {...args} />
}

export const Default = Template.bind({})
Default.args = {
  color: '#da3939',
  content: 'Regular'
}
