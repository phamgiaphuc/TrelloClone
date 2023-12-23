import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    const boardData = await boardService.createNew(req.body);
    res.status(StatusCodes.CREATED).json(boardData);
  } catch (error) { next(error) }
}

const getDetails = async (req, res, next) => {
  try {
    const boardData = await boardService.getDetails(req.params.id)
    res.status(StatusCodes.OK).json(boardData);
  } catch (error) { next(error) }
}

const updateBoard = async (req, res, next) => {
  try {
    const boardData = await boardService.updateBoard(req.params.id, req.body)
    res.status(StatusCodes.OK).json(boardData);
  } catch (error) { next(error) }
}

export const boardController = {
  createNew,
  getDetails,
  updateBoard
}