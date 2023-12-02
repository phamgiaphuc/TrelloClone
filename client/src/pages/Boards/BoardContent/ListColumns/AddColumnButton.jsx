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
          variant="outlined"
          startIcon={<PlaylistAddIcon />}
          sx={{
            borderRadius: '8px',
            width: '200px',
            color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2]: theme.listColors[0]),
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2]),
            borderColor: '#172b4d',
            '&:hover': {
              backgroundColor: '#bdc3c7',
              color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2] : theme.listColors[1]),
              borderColor: '#1d2125'
            }
          }}
        >
          Add another list
        </Button>
      </Box>
    </>
  )
}

export default AddColumnButton