import axios from 'axios'
import { API_SERVER_DEV, API_SERVER_PROD } from '~/constants/apis'
import { env } from '~/constants/environments'

const API_SERVER = env.BUILD_MODE === 'dev' ? API_SERVER_DEV : API_SERVER_PROD

export const fetchBoardDetailsAPI = async (boardId) => {
  try {
    const response = await axios.get(`${API_SERVER}/v1/boards/${boardId}`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const createNewColumnAPI = async (columnData) => {
  try {
    const response = await axios.post(`${API_SERVER}/v1/columns`, columnData)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export const createNewCardAPI = async (cardData) => {
  try {
    const response = await axios.post(`${API_SERVER}/v1/cards`, cardData)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export const checkServerStatus = async () => {
  try {
    return await axios.get(`${API_SERVER}/v1/status`)
  } catch (error) {
    return error
  }
}