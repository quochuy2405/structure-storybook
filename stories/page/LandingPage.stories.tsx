import { LandingPage } from '@/components/templates'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Templates/LandingPage',
  component: LandingPage
} as ComponentMeta<typeof LandingPage>

const Template: ComponentStory<typeof LandingPage> = () => {
  return <LandingPage />
}

export const Default = Template.bind({})
