import Box from '@mui/material/Box'
import Column from './Column/Column'
import AddColumnButton from './AddColumnButton'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

const ListColumns = ({ columns }) => {
  return (
    <SortableContext items={columns?.map(column => column._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}>
        {columns?.map(column => (<Column key={column._id} column={column} />))}
        <AddColumnButton />
      </Box>
    </SortableContext>
  )
}

export default ListColumns