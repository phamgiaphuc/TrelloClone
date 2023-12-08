import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    const createBoard = await boardService.createNew(req.body);
    res.status(StatusCodes.CREATED).json({
      new_board: {
        ...createBoard
      }
    });
  } catch (error) { next(error) }
}

const getDetails = async (req, res, next) => {
  try {
    const boardData = await boardService.getDetails(req.params.id)
    res.status(StatusCodes.OK).json({
      board_data: {
        ...boardData
      }
    });
  } catch (error) { next(error) }
}

export const boardController = {
  createNew,
  getDetails
}