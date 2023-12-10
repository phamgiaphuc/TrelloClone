import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

const Structure = ({ children, footerStyles }) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Box sx={footerStyles}>
        <Footer />
      </Box>
    </>
  )
}

Structure.propTypes = {
  children: PropTypes.node
}

export default Structure