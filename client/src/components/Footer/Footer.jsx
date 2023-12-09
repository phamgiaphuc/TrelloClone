import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import ContactsIcon from '@mui/icons-material/Contacts'

const labelColor = (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[1])

const Footer = () => {
  return (
    <>
      <Box sx={{
        borderTop: '1px solid #1d2125',
        pt: 3,
        mb: 3
      }}>
        <Box display="flex" justifyContent="center" sx={{
          mb: 2,
          gap: 2
        }}>
          <Button
            startIcon={<HomeIcon />}
            sx={{
              width: '120px',
              color: labelColor,
              gap: 0
            }}
            component={Link} to="/home"
          >
            Home
          </Button>
          <Button
            startIcon={<LoginIcon />}
            sx={{
              width: '120px',
              color: labelColor,
              gap: 0
            }}
            component={Link} to="/login"
          >
            Login
          </Button>
          <Button
            startIcon={<ContactsIcon />}
            sx={{
              width: '120px',
              color: labelColor,
              gap: 0
            }}
            component={Link} to="/contacts"
          >
            Contacts
          </Button>
        </Box>
        <Typography variant="body1" color="text.secondary" align="center">
          Trello clone &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  )
}

export default Footer