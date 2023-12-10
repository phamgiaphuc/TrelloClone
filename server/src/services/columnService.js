import { columnModel } from '~/models/columnModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { boardModel } from '~/models/boardModel';

const createNew = async (data) => {
  try {
    const columnData = {
      ...data
    };
    const createColumn = await columnModel.createNew(columnData);
    const newColumnData = await columnModel.findOneById(createColumn.insertedId);
    if (!newColumnData) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Column not found!')
    } else {
      newColumnData.cards = []
      await boardModel.pushColumnOrderIds(newColumnData)
    }
    return newColumnData;
  } catch (error) { throw error }
}

export const columnService = {
  createNew
}