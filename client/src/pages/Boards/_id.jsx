import { Container } from '@mui/material'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/apis'

const Board = () => {
  const [board, setBoard] = useState(null)
  useEffect(() => {
    const boardId = '6572b8aff2c65fcde2b60231'
    fetchBoardDetailsAPI(boardId)
      .then((data) => {
        setBoard(data)
      })
  }, [])
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={ board }/>
      <BoardContent board={ board }/>
    </Container>
  )
}

export default Board
