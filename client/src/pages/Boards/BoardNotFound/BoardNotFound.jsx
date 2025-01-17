import { Box, Link, Typography } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as BoardIcon } from '~/assets/board.svg'

const labelColor = (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[1])

const BoardNotFound = ({ board }) => {
  document.title = 'No board | Trello'
  return (
    <>
      <Box sx={{
        borderTop: '1px solid #1d2125',
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#ecf0f1'),
        width: '100%',
        height: (theme) => (theme.trelloCustom.boardNotFoundHeight),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          mx: 'auto'
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1
          }}>
            <SvgIcon component={BoardIcon} inheritViewBox sx={{
              fontSize: 72,
              color: labelColor
            }}/>
            <Typography variant='span' sx={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: labelColor
            }}>
              {board.statusCode}
            </Typography>
          </Box>
          <Typography variant='span' sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: labelColor,
            mb: '16px'
          }}>
            Opps. {board.message}
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