import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import DatePickerForm, { IDatePickerFormProps } from './DatePickerForm'

export default {
  title: 'Components/Molecules/DatePickerForm',
  component: DatePickerForm
} as ComponentMeta<typeof DatePickerForm>

export const Default: ComponentStory<typeof DatePickerForm> = (args) => {
  const methods = useForm()
  return <DatePickerForm {...args} methods={methods} name={'name'} />
}

export const Error: ComponentStory<typeof DatePickerForm> = () => {
  const methods = useForm()
  const configs: IDatePickerFormProps = {
    methods,
    name: 'name'
  }
  return <DatePickerForm {...configs} />
}
