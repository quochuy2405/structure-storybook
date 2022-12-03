export type formatTime = { year: number; month: number; day: number }
export interface IDataChartType {
  time: formatTime
  open: number
  high: number
  low: number
  close: number
  value: number
}
