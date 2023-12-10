import { Container } from '@mui/material'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/apis'
import { useParams } from 'react-router-dom'
import BoardNotFound from './BoardNotFound/BoardNotFound'

const Board = () => {
  const [board, setBoard] = useState(null)
  const { _id } = useParams()
  useEffect(() => {
    fetchBoardDetailsAPI(_id)
      .then((data) => {
        setBoard(data)
        document.title = `${data?.title} | Trello`
      })
  }, [_id, board?.title])
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      {
        board?.statusCode ?
          (
            <>
              <BoardNotFound board={ board }/>
            </>
          ) : (
            <>
              <BoardBar board={ board }/>
              <BoardContent board={ board }/>
            </>
          )
      }
    </Container>
  )
}

export default Board
