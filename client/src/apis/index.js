import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsAPI = async (boardId) => {
  try {
    const request = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
    return request.data
  } catch (error) {
    return error.response.data
  }
}

export const checkServerStatus = async () => {
  const request = await axios.get(`${API_ROOT}/v1/status`)
  if (!request) {
    return false
  }
  return true
}