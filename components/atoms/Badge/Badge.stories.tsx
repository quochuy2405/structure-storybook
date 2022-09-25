import { ComponentMeta, ComponentStory } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'Components/Atoms/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  mode: 'primary',
  options: {
    home: 'Home',
    address: 'Address',
    detail: 'Details'
  }
}
