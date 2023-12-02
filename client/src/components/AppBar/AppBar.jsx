import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Template from './Menus/Template'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import AddIcon from '@mui/icons-material/Add'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const labelColor = (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[1])
const textColor = (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2])

const AppBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  return <>
    <Box sx={{
      width: '100%',
      height: (theme) => {
        return theme.trelloCustom.appBarHeight
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      px: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? theme.listBackgrounds[0] : theme.listBackgrounds[1])
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: labelColor }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Button sx={{
            color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#455570')
          }}>
            <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{ color: labelColor }}/>
            <Typography variant='span' sx={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: labelColor
            }}>
              Trello
            </Typography>
          </Button>
        </Box>
        <Box sx={{
          display: {
            xs: 'none',
            md: 'flex'
          },
          gap: 1
        }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Template />
          <Button variant="outlined" startIcon={<AddIcon />} sx={{
            color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2]: theme.listColors[0]),
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2]),
            borderColor: '#172b4d',
            '&:hover': {
              backgroundColor: '#bdc3c7',
              color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2] : theme.listColors[1]),
              borderColor: '#1d2125'
            }
          }}>Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="standard-search"
          label="Search"
          type="text"
          variant="outlined"
          size="small"
          value={searchValue}
          onChange={( event ) => {
            setSearchValue(event.target.value)
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: labelColor, cursor: 'pointer' }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                sx={{ color: searchValue ? labelColor : 'transparent', cursor: 'pointer' }}
                fontSize='small'
                onClick={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: '130px',
            width: isFocused || searchValue ? '360px' : '190px',
            '& label': { color: textColor },
            '& input': { color: textColor },
            '& label.Mui-focused': { color: labelColor },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: labelColor
              },
              '&:hover fieldset': {
                borderColor: labelColor
              },
              '&.Mui-focused fieldset': {
                borderColor: labelColor
              }
            }
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: labelColor }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: labelColor }}/>
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  </>
}

export default AppBar
