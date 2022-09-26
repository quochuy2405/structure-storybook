import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from './Card'

export default {
  title: 'Components/Atoms/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />
}

export const Default = Template.bind({})
