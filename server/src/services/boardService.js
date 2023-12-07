/* eslint-disable no-useless-catch */
import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'

const createNew = async (data, next) => {
  try {
    const boardData = {
      ...data,
      slug: slugify(data.title)
    };
    return boardData;
  } catch (error) { next(error)}
}

export const boardService = {
  createNew
}