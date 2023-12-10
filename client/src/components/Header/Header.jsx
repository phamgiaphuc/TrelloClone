import { Box, Button, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import ModeSelect from '../ModeSelect/ModeSelect'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { Link } from 'react-router-dom'

const labelColor = (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[1])

const Header = () => {
  return (
    <>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        px: 2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? theme.listBackgrounds[0] : theme.listBackgrounds[1]),
        zIndex: 999,
        borderBottom: '1px solid #1d2125'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button component={Link} to='/home' sx={{
            color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#455570')
          }}>
            <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{
              color: labelColor,
              flexGrow: 1
            }}/>
            <Typography variant='span' sx={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: labelColor
            }}>
              Trello
            </Typography>
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant="outlined" startIcon={<LoginIcon />} component={Link} to='/login' sx={{
            width: '115px',
            color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2]: theme.listColors[0]),
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2]),
            borderColor: '#172b4d',
            gap: 0,
            '&:hover': {
              backgroundColor: '#bdc3c7',
              color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2] : theme.listColors[1]),
              borderColor: '#1d2125'
            }
          }}>Log in</Button>
          <Button variant="outlined" startIcon={<AppRegistrationIcon />} component={Link} to='/register' sx={{
            width: '115px',
            color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2]: theme.listColors[0]),
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2]),
            borderColor: '#172b4d',
            gap: 0,
            '&:hover': {
              backgroundColor: '#bdc3c7',
              color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2] : theme.listColors[1]),
              borderColor: '#1d2125'
            }
          }}>Register</Button>
          <ModeSelect />
        </Box>
      </Box>
    </>
  )
}

export default Header