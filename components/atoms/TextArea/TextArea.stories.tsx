import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextArea from './TextArea'

export default {
  title: 'Components/Atoms/TextArea',
  component: TextArea
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />
}

export const Index = Template.bind({})
Index.args = {
  title: 'TextArea',
  name: 'TextArea'
}

export const Error = Template.bind({})
Error.args = {
  title: 'TextArea',
  name: 'TextArea',
  errors: {
    empty: 'required'
  }
}
