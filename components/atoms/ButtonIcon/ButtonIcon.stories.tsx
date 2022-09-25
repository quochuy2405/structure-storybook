import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AiOutlineIssuesClose } from 'react-icons/ai'
import ButtonIcon from './ButtonIcon'

export default {
  title: 'Components/Atoms/ButtonIcon',
  component: ButtonIcon
} as ComponentMeta<typeof ButtonIcon>

const Template: ComponentStory<typeof ButtonIcon> = (args) => {
  return (
    <ButtonIcon {...args}>
      <AiOutlineIssuesClose size={25} />
    </ButtonIcon>
  )
}

export const Default = Template.bind({})
