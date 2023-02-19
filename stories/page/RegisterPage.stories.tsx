import { RegisterPage } from '@/components/templates'
import useValidate from '@/hooks/useValidate'
import { IUserRegister } from '@/types/register'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Templates/RegisterPage',
  component: RegisterPage
} as ComponentMeta<typeof RegisterPage>

const Template: ComponentStory<typeof RegisterPage> = (arg) => {
  const { methods } = useValidate<IUserRegister>({})
  return <RegisterPage {...arg} methods={methods} />
}

export const Default = Template.bind({})
Default.args = {
  handleUsingGPS: () => true,
  onSubmit: () => true
}
