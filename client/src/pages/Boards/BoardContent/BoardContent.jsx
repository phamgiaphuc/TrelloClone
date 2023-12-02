import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

const BoardContent = ({ board }) => {
  const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#ecf0f1'),
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumn}/>
      </Box>
    </>
  )
}

export default BoardContent
