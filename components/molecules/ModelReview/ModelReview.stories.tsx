import { ComponentMeta, ComponentStory } from '@storybook/react'
import ModelReview from './ModelReview'

export default {
  title: 'Components/Molecules/ModelReview',
  component: ModelReview
} as ComponentMeta<typeof ModelReview>

export const Default: ComponentStory<typeof ModelReview> = (args) => {
  return <ModelReview {...args} />
}
