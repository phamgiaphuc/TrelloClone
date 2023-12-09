import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const AddColumnButton = () => {
  return (
    <>
      {/* Add another list button */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '250px',
        mx: 2
      }}>
        <Button
          startIcon={<PlaylistAddIcon />}
          sx={{
            width: '200px',
            color: (theme) => (theme.palette.mode === 'dark' ? 'white' : theme.listColors[2])
          }}
        >
          Add another list
        </Button>
      </Box>
    </>
  )
}

export default AddColumnButton