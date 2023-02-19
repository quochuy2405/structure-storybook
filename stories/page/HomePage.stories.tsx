import Home from '@/pages/index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Templates/Home',
  component: Home
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => {
  return <Home />
}

export const Default = Template.bind({})
