/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel';

const createNew = async (data) => {
  try {
    const boardData = {
      ...data,
      slug: slugify(data.title)
    };
    const createBoard = await boardModel.createNew(boardData)
    const getNewBoard = await boardModel.findOneById(createBoard.insertedId)
    return getNewBoard;
  } catch (error) { throw error }
}

export const boardService = {
  createNew
}