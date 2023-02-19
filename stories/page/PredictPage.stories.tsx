import Crypto from '@/pages/cryptos'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Templates/Crypto',
  component: Crypto
} as ComponentMeta<typeof Crypto>

const Template: ComponentStory<typeof Crypto> = () => {
  return <Crypto />
}

export const Default = Template.bind({})
