import { Container } from '@mui/material'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { mockData } from '~/apis/mock-data'

const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={ mockData?.board }/>
      <BoardContent board={ mockData?.board }/>
    </Container>
  )
}

export default Board