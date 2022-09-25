import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import TextAreaForm from './TextAreaForm'

export default {
  title: 'Components/Molecules/TextAreaForm',
  component: TextAreaForm
} as ComponentMeta<typeof TextAreaForm>

export const Default: ComponentStory<typeof TextAreaForm> = (args) => {
  const methods = useForm()
  return <TextAreaForm {...args} methods={methods} name={'name'} />
}
