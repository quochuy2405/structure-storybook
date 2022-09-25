import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'

import CheckBoxForm from './CheckBoxForm'

export default {
  title: 'Components/Molecules/CheckBoxForm',
  component: CheckBoxForm
} as ComponentMeta<typeof CheckBoxForm>

export const Default: ComponentStory<typeof CheckBoxForm> = (args) => {
  const methods = useForm()
  return <CheckBoxForm {...args} methods={methods} name={'name'} />
}
