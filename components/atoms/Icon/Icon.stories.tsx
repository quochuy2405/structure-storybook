import { ComponentMeta, ComponentStory } from '@storybook/react'
import Icon from './Icon'

export default {
  title: 'Components/Atoms/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />
}

export const Default = Template.bind({})
