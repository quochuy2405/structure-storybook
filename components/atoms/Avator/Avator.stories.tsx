import { ComponentMeta, ComponentStory } from '@storybook/react'
import Avator from './Avator'
import Image from 'next/image'
import DefaultUser from '@/assets/image/default-user.png'

export default {
  title: 'Components/Atoms/Avator',
  component: Avator
} as ComponentMeta<typeof Avator>

const Template: ComponentStory<typeof Avator> = (args) => {
  return (
    <Avator {...args}>
      <Image src={DefaultUser} width={100} height={100} layout="fill" alt="" />
    </Avator>
  )
}

export const Default = Template.bind({})
