/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createNew = async (data) => {
  try {
    const boardData = {
      ...data,
      slug: slugify(data.title)
    };
    const createBoard = await boardModel.createNew(boardData);
    const newBoardData = await boardModel.findOneById(createBoard.insertedId);
    if (!newBoardData) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')
    }
    return newBoardData;
  } catch (error) { throw error }
}

const getDetails = async (id) => {
  try {
    let boardData = await boardModel.getDetails(id);
    if (!boardData) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!');
    }
    boardData.columns.forEach(column => {
      column.cards = boardData.cards.filter(card => card.columnId.toString() === column._id.toString())
    });
    const newData = boardData.columnOrderIds.map((columnId) => {
      const temp = boardData.columns.find((item) => {
        return item['_id'].toString() === columnId
      })
      return temp
    });
    boardData = {
      ...boardData,
      columns: newData
    };
    delete boardData.cards;
    return boardData;
  } catch (error) { throw error }
}

const updateBoard = async (id, data) => {
  try {
    const updateData = {
      ...data,
      updatedAt: Date.now()
    }
    const boardData = await boardModel.updateBoard(id, updateData);
    return boardData;
  } catch (error) { throw error }
}

export const boardService = {
  createNew,
  getDetails,
  updateBoard
}