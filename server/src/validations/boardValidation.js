import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError';
import { BOARD_TYPES } from '~/utils/constants';

const createNew = async (req, res, next) => {
  const correctCodition = Joi.object({
    title: Joi.string().required().min(3).max(64).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict(),
    type: Joi.string().required().valid(BOARD_TYPES.PUBLIC, BOARD_TYPES.PRIVATE)
  });
  try {
    await correctCodition.validateAsync(req.body, { abortEarly: false });
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

export const boardValidation = {
  createNew
}
