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
  const { id } = useParams()
  useEffect(() => {
    fetchBoardDetailsAPI(id)
      .then((data) => {
        setBoard(data)
        document.title = `${data?.title ? data.title : 'No board'} | Trello`
      })
  }, [id])
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      {
        board ?
          (
            <>
              <BoardBar board={ board }/>
              <BoardContent board={ board }/>
            </>
          ) : (
            <>
              <BoardNotFound board={ 'Board is not found' }/>
            </>
          )
      }
    </Container>
  )
}

export default Board
