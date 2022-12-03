import { ComponentMeta, ComponentStory } from '@storybook/react'
import Avatar from './Avatar'
import Image from 'next/image'
import DefaultUser from '@/assets/image/default-user.png'

export default {
  title: 'Components/Atoms/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => {
  return (
    <Avatar {...args}>
      <Image src={DefaultUser} width={100} height={100} layout="fill" alt="" />
    </Avatar>
  )
}

export const Default = Template.bind({})
