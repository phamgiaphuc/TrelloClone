/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'

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
    const boardData = await boardModel.getDetails(id);
    if (!boardData) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!');
    }
    const modifyBoardData = cloneDeep(boardData);
    modifyBoardData.columns.forEach(column => {
      column.cards = modifyBoardData.cards.filter(card => card.columnId.toString() === column._id.toString())
    });
    modifyBoardData.columnOrderIds = modifyBoardData.columns.map(column => column._id);
    delete modifyBoardData.cards;
    return modifyBoardData;
  } catch (error) { throw error }
}

export const boardService = {
  createNew,
  getDetails
}