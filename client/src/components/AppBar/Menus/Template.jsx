import React from 'react'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Check from '@mui/icons-material/Check'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Template = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Box>
        <Button
          id="basic-button-template"
          aria-controls={open ? 'basic-menu-template' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<ExpandMoreIcon />}
          sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#455570') }}
        >
          Templates
        </Button>
        <Menu
          id="basic-menu-template"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button-template'
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemText inset>Single</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemText inset>1.15</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemText inset>Double</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            Custom: 1.2
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemText>Add space before paragraph</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemText>Add space after paragraph</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemText>Custom spacing...</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </>
  )
}

export default Template