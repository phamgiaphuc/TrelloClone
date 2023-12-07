import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoutes } from './boardRoute';

const Router = express.Router();

/**
 * Check APIs statusß
 */
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'APIs v1 are ready to use!'
  })
})

/**
 * Board APIs
 */
Router.use('/boards', boardRoutes)

export const APIs_V1 = Router