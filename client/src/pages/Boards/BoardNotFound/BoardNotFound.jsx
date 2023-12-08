import { Box, Link, Typography } from '@mui/material'

const labelColor = (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[1])

const BoardNotFound = () => {
  document.title = 'No board | Trello'
  return (
    <>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#ecf0f1'),
        width: '100%',
        height: (theme) => (theme.trelloCustom.boardNotFoundHeight),
        p: '10px 0',
        borderTop: '1px solid #1d2125'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '64px',
          textAlign: 'center'
        }}>
          <Typography variant='span' sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: labelColor,
            mb: '16px'
          }}>
            Board is not found!
          </Typography>
          <Typography variant='span' sx={{
            fontSize: '1.05rem',
            color: labelColor,
            mb: '16px'
          }}>
            This board may be private. If someone gave you this link, they may need to share the board with you or invite you to their Workspaces.
          </Typography>
          <Typography variant='span' sx={{
            fontSize: '1.05rem',
            color: labelColor,
            textAlign: 'center'
          }}>
            Not you?
            <Link href="#" underline="hover" sx={{
              ml: '8px'
            }}>Switch accounts</Link>
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default BoardNotFound