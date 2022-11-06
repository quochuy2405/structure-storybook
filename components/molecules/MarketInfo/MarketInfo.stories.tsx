import { ComponentMeta, ComponentStory } from '@storybook/react'
import MarketInfo from './MarketInfo'

export default {
  title: 'Components/Molecules/MarketInfo',
  component: MarketInfo
} as ComponentMeta<typeof MarketInfo>

export const Default: ComponentStory<typeof MarketInfo> = () => {
  return <MarketInfo />
}
