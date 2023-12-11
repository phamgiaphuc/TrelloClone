import { Container } from '@mui/material'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI } from '~/apis'
import { useParams } from 'react-router-dom'
import BoardNotFound from './BoardNotFound/BoardNotFound'
import { generatePlaceholderCard } from '~/utils/formatter'
import { isEmpty } from 'lodash'

const Board = () => {
  const [board, setBoard] = useState(null)
  const { _id } = useParams()
  useEffect(() => {
    fetchBoardDetailsAPI(_id)
      .then((data) => {
        data.columns.forEach(column => {
          if (isEmpty(column.cards)) {
            const placeholder_card = generatePlaceholderCard(column)
            column.cards.push(placeholder_card)
            column.cardOrderIds.push(placeholder_card._id)
            return
          }
        })
        setBoard(data)
        document.title = `${data?.title} | Trello`
      })
  }, [_id, board?.title])
  const createNewColumn = async (columnData) => {
    const newColumn = await createNewColumnAPI({
      ...columnData,
      boardId: _id
    })
    newColumn.cards.push(generatePlaceholderCard(newColumn))
    newColumn.cardOrderIds.push(generatePlaceholderCard(newColumn)._id)
    // Refresh the board state
    const newBoard = { ...board }
    newBoard.columns.push(newColumn)
    newBoard.columnOrderIds.push(newColumn._id)
    setBoard(newBoard)
  }
  const createNewCard = async (cardData) => {
    const newCard = await createNewCardAPI({
      ...cardData,
      boardId: board._id
    })
    // Refresh the board state
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === newCard.columnId)
    if (columnToUpdate) {
      columnToUpdate.cards.push(newCard)
      columnToUpdate.cardOrderIds.push(newCard._id)
    }
    setBoard(newBoard)
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      {
        board?.statusCode ?
          (
            <>
              <BoardNotFound board={board}/>
            </>
          ) : (
            <>
              <BoardBar board={board}/>
              <BoardContent
                board={board}
                createNewColumn={createNewColumn}
                createNewCard={createNewCard}
              />
            </>
          )
      }
    </Container>
  )
}

export default Board
