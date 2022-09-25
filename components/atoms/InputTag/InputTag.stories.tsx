import { ComponentMeta, ComponentStory } from '@storybook/react'
import InputTag from './InputTag'

export default {
  title: 'Components/Atoms/InputTag',
  component: InputTag
} as ComponentMeta<typeof InputTag>

const Template: ComponentStory<typeof InputTag> = (args) => {
  return <InputTag {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Input tag'
}
