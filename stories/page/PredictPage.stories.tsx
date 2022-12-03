import Prediction from '@/pages/predictions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Templates/Prediction',
  component: Prediction
} as ComponentMeta<typeof Prediction>

const Template: ComponentStory<typeof Prediction> = () => {
  return <Prediction />
}

export const Default = Template.bind({})
