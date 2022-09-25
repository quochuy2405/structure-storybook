import { ComponentMeta, ComponentStory } from '@storybook/react'
import Toast from './Toast'

export default {
  title: 'Components/Molecules/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>

export const Default: ComponentStory<typeof Toast> = (args) => {
  return <Toast {...args} />
}
export const Success: ComponentStory<typeof Toast> = (args) => {
  return <Toast {...args} />
}
Success.args = {
  type: 'success',
  message: 'Chúc mừng bạn đã đăng ký thành công !'
}
export const Info: ComponentStory<typeof Toast> = (args) => {
  return <Toast {...args} />
}

Info.args = {
  type: 'info',
  message: 'Xin chào, mình là Huy Pui !'
}

export const Warning: ComponentStory<typeof Toast> = (args) => {
  return <Toast {...args} />
}

Warning.args = {
  type: 'warning',
  message: 'Hãy kiểm tra lại thông tin của bạn !'
}

export const Error: ComponentStory<typeof Toast> = (args) => {
  return <Toast {...args} />
}

Error.args = {
  type: 'error',
  message: 'Cảnh báo lỗi !'
}
