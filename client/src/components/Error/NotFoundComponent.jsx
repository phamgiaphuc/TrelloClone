import { Box, Button, Typography } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as NotFoundError } from '~/assets/error-404.svg'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'

const labelColor = (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[1])

const NotFoundComponent = () => {
  const isHomePage = location.pathname === '/home'
  document.title = 'Not Found Error | Trello'
  return (
    <>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#ecf0f1'),
        width: '100%',
        height: (theme) => (theme.trelloCustom.boardNotFoundHeight),
        borderTop: '1px solid #1d2125',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto'
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1
          }}>
            <SvgIcon component={NotFoundError} inheritViewBox sx={{
              fontSize: 72,
              color: labelColor
            }}/>
            <Typography variant='span' sx={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: labelColor
            }}>
              404
            </Typography>
          </Box>
          <Typography variant='span' sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: labelColor,
            mb: '16px'
          }}>
            Opps. Not Found Error!
          </Typography>
          <Typography variant='span' sx={{
            fontSize: '1.05rem',
            color: labelColor,
            mb: '16px'
          }}>
            The page you are looking for does not exist.
          </Typography>
          <Button
            startIcon={<HomeIcon />}
            sx={{
              width: '100px',
              color: labelColor,
              gap: 0
            }}
            component={isHomePage ? 'a' : Link}
            href={isHomePage ? '/' : undefined}
            to={isHomePage ? undefined : '/'}
          >
            Home
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default NotFoundComponent