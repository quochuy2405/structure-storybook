import axiosClient from './axiosClient'

// get  by lazy loading
const getLazy = async (page: string, limit: string, route: string) => {
  try {
    const response = await axiosClient.get('')
    if (response.data) {
      return response.data
    }
    return []
  } catch (error) {
    return []
  }
}

// get  by id
const getById = async (id: string, route: string) => {
  try {
    const response = await axiosClient.get('')
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

// update by id
const updateById = async (id: string, data: any, route: string) => {
  try {
    const response = await axiosClient.put('')
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

// update by id
const deleteById = async (id: string, route: string) => {
  try {
    const response = await axiosClient.delete('')
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

// create
const post = async <T>(route: string, data: T) => {
  try {
    const response = await axiosClient.post(route, data)
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

export { getLazy, getById, updateById, deleteById, post }
