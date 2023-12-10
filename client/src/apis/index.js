import axios from 'axios'
import { API_SERVER_DEV, API_SERVER_PROD } from '~/constants/apis'
import { env } from '~/constants/environments'

const API_SERVER = env.BUILD_MODE === 'dev' ? API_SERVER_DEV : API_SERVER_PROD

export const fetchBoardDetailsAPI = async (boardId) => {
  try {
    const request = await axios.get(`${API_SERVER}/v1/boards/${boardId}`)
    return request.data
  } catch (error) {
    return error.response.data
  }
}

export const checkServerStatus = async () => {
  try {
    return await axios.get(`${API_SERVER}/v1/status`)
  } catch (error) {
    return error
  }
}