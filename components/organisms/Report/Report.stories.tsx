import { ComponentMeta, ComponentStory } from '@storybook/react'
import Report from './Report'

export default {
  title: 'Components/Organisms/Report',
  component: Report
} as ComponentMeta<typeof Report>

const Template: ComponentStory<typeof Report> = (args) => {
  return <Report {...args} />
}

export const Default = Template.bind({})
