import { ComponentMeta, ComponentStory } from '@storybook/react'
import Modal from './Modal'

export default {
  title: 'Components/Molecules/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

export const Default: ComponentStory<typeof Modal> = (args) => {
  return <Modal {...args} />
}

export const Error: ComponentStory<typeof Modal> = (args) => {
  return <Modal {...args} />
}
