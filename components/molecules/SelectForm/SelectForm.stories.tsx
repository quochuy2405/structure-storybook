import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import SelectForm, { ISelectFormProps } from './SelectForm'

export default {
  title: 'Components/Molecules/SelectForm',
  component: SelectForm
} as ComponentMeta<typeof SelectForm>

export const Default: ComponentStory<typeof SelectForm> = (args) => {
  const methods = useForm()
  return <SelectForm {...args} methods={methods} name={'name'} />
}

export const Error: ComponentStory<typeof SelectForm> = () => {
  const methods = useForm()
  const configs: ISelectFormProps = {
    methods,
    name: 'name',
    placeholder: 'Enter input',
    options: [
      {
        label: 'test',
        value: 'test'
      }
    ]
  }
  return <SelectForm {...configs} />
}
