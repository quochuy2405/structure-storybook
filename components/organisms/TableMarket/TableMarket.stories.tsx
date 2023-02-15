import { ComponentMeta, ComponentStory } from '@storybook/react'
import TableMarket from './TableMarket'

export default {
  title: 'Components/Organisms/TableMarket',
  component: TableMarket
} as ComponentMeta<typeof TableMarket>

const Template: ComponentStory<typeof TableMarket> = (args) => {
  return <TableMarket {...args} />
}

export const Default = Template.bind({})
