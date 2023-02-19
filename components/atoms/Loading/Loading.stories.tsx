import { ComponentMeta, ComponentStory } from '@storybook/react'
import Loading from './Loading'

export default {
  title: 'Components/Atoms/Loading',
  component: Loading
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = (args) => {
  return (
    <div style={{ padding: '30px' }}>
      <Loading {...args} />
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {
  text: 'Email is sending...'
}
