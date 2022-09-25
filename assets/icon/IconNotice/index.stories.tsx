import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconNotice from '.'

export default {
  title: 'Assets/Icons/IconNotice',
  component: IconNotice
} as ComponentMeta<typeof IconNotice>

const Template: ComponentStory<typeof IconNotice> = (args) => {
  return <IconNotice {...args} />
}

export const Primary = Template.bind({})
