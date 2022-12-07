import { ComponentMeta, ComponentStory } from '@storybook/react'
import SectionEditors from './SectionEditors'

export default {
  title: 'Components/Organisms/SectionEditors',
  component: SectionEditors
} as ComponentMeta<typeof SectionEditors>

const Template: ComponentStory<typeof SectionEditors> = (args) => {
  return <SectionEditors {...args} />
}

export const Default = Template.bind({})
