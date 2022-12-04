import { ComponentMeta, ComponentStory } from '@storybook/react'
import ChartView from './ChartView'

export default {
  title: 'Components/Molecules/ChartView',
  component: ChartView
} as ComponentMeta<typeof ChartView>

export const Default: ComponentStory<typeof ChartView> = (args) => {
  return <ChartView {...args} />
}
Default.args = {
  data: { actual: [], predict: [] }
}

export const MovingAverage: ComponentStory<typeof ChartView> = (args) => {
  return <ChartView {...args} />
}
MovingAverage.args = {
  data: { actual: [], predict: [] },
  moving: true
}
