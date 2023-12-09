import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          Your Project Name &copy; {new Date().getFullYear()}
        </Typography>
        <Box mt={2} display="flex" justifyContent="center">
          <Button color="primary" component={Link} to="/">
            Home
          </Button>
          <Button color="primary" component={Link} to="/about">
            About
          </Button>
          <Button color="primary" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Footer