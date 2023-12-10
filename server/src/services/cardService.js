import { cardModel } from '~/models/cardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { columnModel } from '~/models/columnModel';

const createNew = async (data) => {
  try {
    const cardData = {
      ...data
    };
    const createCard = await cardModel.createNew(cardData);
    const newCardData = await cardModel.findOneById(createCard.insertedId);
    if (!newCardData) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Card not found!')
    } else {
      newCardData.cards = []
      await columnModel.pushCardOrderIds(newCardData)
    }
    return newCardData;
  } catch (error) { throw error }
}

export const cardService = {
  createNew
}