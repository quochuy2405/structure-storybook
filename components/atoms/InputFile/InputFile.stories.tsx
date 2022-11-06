import { ComponentMeta, ComponentStory } from '@storybook/react'
import InputFile from './InputFile'

export default {
  title: 'Components/Atoms/InputFile',
  component: InputFile
} as ComponentMeta<typeof InputFile>

export const Default: ComponentStory<typeof InputFile> = (args) => {
  return <InputFile {...args} />
}
