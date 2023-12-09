import { Box, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import PeopleIcon from '@mui/icons-material/People'
import FilterListIcon from '@mui/icons-material/FilterList'
import BoltIcon from '@mui/icons-material/Bolt'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import DividerLine from './DividerLine'
import { capitalizeFirstLetter } from '~/utils/formatter'
import { SAMPLE_USER_LOGO } from '~/utils/constants'

const MENU_STYLES = {
  color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[1]),
  backgroundColor: 'transparent',
  fontSize: '14px',
  fontWeight: '500',
  borderRadius: '5px',
  border: 'none',
  height: '36px',
  '.MuiSvgIcon-root': {
    color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[1])
  },
  '&:hover': {
    backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#ced6e0' : '')
  }
}

const BoardBar = ({ board }) => {
  return (
    <>
      <Box sx={{
        width: '100%',
        height: (theme) => {
          return theme.trelloCustom.boardBarHeight
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        px: 2,
        overflowX: 'auto',
        borderTop: '1px solid #1d2125',
        borderBottom: '1px solid #1d2125',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? theme.listBackgrounds[0] : theme.listBackgrounds[2])
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            sx={{
              color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2]),
              backgroundColor: 'transparent',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '5px',
              border: 'none',
              height: '36px',
              '.MuiSvgIcon-root': {
                color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2]),
                fontSize: '1.25rem'
              },
              '&:hover': {
                backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#ced6e0' : '')
              }
            }}
          >
            <DashboardIcon />
            {board?.title ? board.title : 'No board'}
          </Button>
          <Button
            sx={MENU_STYLES}
            onClick={
              () => {}
            }
          >
            <PeopleIcon />
            {board?.type ? capitalizeFirstLetter(board?.type) : 'No workspace visible'}
          </Button>
          <Button
            sx={MENU_STYLES}
            onClick={
              () => {}
            }
          >
            <AddToDriveIcon />
            Add to Google Drive
          </Button>
        </Box>
        <Box sx={{
          display: {
            xs: 'none',
            md: 'flex'
          },
          alignItems: 'center',
          gap: 2
        }}>
          <Button
            sx={MENU_STYLES}
            onClick={
              () => {}
            }
          >
            <RocketLaunchIcon />
            Power-Ups
          </Button>
          <Button
            sx={MENU_STYLES}
            onClick={
              () => {}
            }
          >
            <BoltIcon />
            Automation
          </Button>
          <Button
            sx={MENU_STYLES}
            onClick={
              () => {}
            }
          >
            <FilterListIcon />
            Filters
          </Button>
          <DividerLine />
          <Button
            variant="outlined"
            startIcon={<PersonAddIcon />}
            sx={{
              color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2]: theme.listColors[0]),
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2]),
              borderColor: '#172b4d',
              gap: 0,
              '&:hover': {
                backgroundColor: '#bdc3c7',
                color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2] : theme.listColors[1]),
                borderColor: '#1d2125'
              }
            }}
          >
            Invite
          </Button>
          <AvatarGroup
            max={4}
            sx={{
              gap: '10px',
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                fontSize: '16px',
                borderColor: '#1d2125',
                borderWidth: '1px',
                cursor: 'pointer',
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2])
              }
            }}
          >
            <Tooltip title="Pham Gia Phuc">
              <Avatar
                src={SAMPLE_USER_LOGO}
                alt='phamgiaphuc'
              />
            </Tooltip>
            <Tooltip title="Pham Gia Phuc">
              <Avatar
                src={SAMPLE_USER_LOGO}
                alt='phamgiaphuc'
              />
            </Tooltip>
            <Tooltip title="Pham Gia Phuc">
              <Avatar
                src={SAMPLE_USER_LOGO}
                alt='phamgiaphuc'
              />
            </Tooltip>
            <Tooltip title="Pham Gia Phuc">
              <Avatar
                src={SAMPLE_USER_LOGO}
                alt='phamgiaphuc'
              />
            </Tooltip>
            <Tooltip title="Pham Gia Phuc">
              <Avatar
                src={SAMPLE_USER_LOGO}
                alt='phamgiaphuc'
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}

export default BoardBar
