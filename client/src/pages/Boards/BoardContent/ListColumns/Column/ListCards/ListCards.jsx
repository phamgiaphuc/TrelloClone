import Box from '@mui/material/Box'
import Card from './Card/Card'

const ListCards = ({ cards }) => {
  return (
    <>
      {/* Box column list cards */}
      <Box sx={{
        p: '0 5px',
        m: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) => `calc(
          ${theme.trelloCustom.boardContentHeight} - 
          ${theme.spacing(4)} -
          ${theme.trelloCustom.columnHeaderHeight} -
          ${theme.trelloCustom.columnFooterHeight}
        )`,
        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#7f8c8d',
          borderRadius: '8px'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#2c3e50'
        }
      }}>
        {cards?.map(card => <Card key={card._id} card={card} />)}
      </Box>
    </>
  )
}

export default ListCards