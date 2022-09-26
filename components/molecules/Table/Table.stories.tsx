import { ComponentMeta, ComponentStory } from '@storybook/react'

import Table from './Table'

export default {
  title: 'Components/Molecules/Table',
  component: Table
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => {
  return <Table {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  headers: [
    {
      title: 'Number'
    },
    {
      title: 'Name'
    },
    {
      title: 'Age'
    },
    {
      title: 'Description'
    },
    {
      title: 'Address'
    },
    {
      title: 'Country'
    },
    {
      title: 'Language'
    }
  ],
  rowItems: [
    {
      number: 'abc',
      name: 'huy',
      age: '12',
      description: 'details',
      address: 'hcm',
      country: 'VN',
      language: 'vietnames'
    },
    {
      number: 'abc',
      name: 'huy',
      age: '12',
      description: 'details',
      address: 'hcm',
      country: 'VN',
      language: 'vietnames'
    },
    {
      number: 'abc',
      name: 'huy',
      age: '12',
      description: 'details',
      address: 'hcm',
      country: 'VN',
      language: 'vietnames'
    },
    {
      number: 'abc',
      name: 'huy',
      age: '12',
      description: 'details',
      address: 'hcm',
      country: 'VN',
      language: 'vietnames'
    },
    {
      number: 'abc',
      name: 'huy',
      age: '12',
      description: 'details',
      address: 'hcm',
      country: 'VN',
      language: 'vietnames'
    },
    {
      number: 'abc',
      name: 'huy',
      age: '12',
      description: 'details',
      address: 'hcm',
      country: 'VN',
      language: 'vietnames'
    }
  ]
}
