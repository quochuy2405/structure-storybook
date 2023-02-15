import Price from '@/pages/prices'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Templates/Price',
  component: Price
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = () => {
  return <Price />
}

export const Default = Template.bind({})
