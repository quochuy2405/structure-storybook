import { InputTag, TextArea, TextField } from '@/components/atoms'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tab from './Tab'

export default {
  title: 'Components/Organisms/Tab',
  component: Tab
} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = (args) => {
  return <Tab {...args} />
}

export const Default = Template.bind({})
Default.args = {
  tabs: {
    search: { label: 'Search', children: <TextField name="search" /> },
    buy: { label: 'Buy', children: <TextArea name="buy" /> },
    price: { label: 'Price', children: <InputTag name="search" /> }
  }
}
