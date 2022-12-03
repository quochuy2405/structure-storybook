import axiosClient from './axiosClient'

// predict by params
const predictByParams = async (amountNextDay: number, route: string) => {
  try {
    const response = await axiosClient.get(route + '?next=' + amountNextDay)
    if (response.data) {
      return response.data
    }
    return []
  } catch (error) {
    return []
  }
}
export { predictByParams }
