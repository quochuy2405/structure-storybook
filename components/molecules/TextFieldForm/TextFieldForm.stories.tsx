import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import TextFieldForm, { ITextFieldFormProps } from './TextFieldForm'

export default {
  title: 'Components/Molecules/TextFieldForm',
  component: TextFieldForm
} as ComponentMeta<typeof TextFieldForm>

export const Default: ComponentStory<typeof TextFieldForm> = (args) => {
  const methods = useForm()
  return <TextFieldForm {...args} methods={methods} name={'name'} />
}

export const Error: ComponentStory<typeof TextFieldForm> = () => {
  const methods = useForm()
  const configs: ITextFieldFormProps = {
    methods,
    name: 'name',
    placeholder: 'Enter input'
  }
  return <TextFieldForm {...configs} />
}
