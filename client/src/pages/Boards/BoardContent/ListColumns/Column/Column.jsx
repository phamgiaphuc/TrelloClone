import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import Button from '@mui/material/Button'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Box from '@mui/material/Box'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Column = ({ column }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id,
    data: { ...column }
  })
  const dndKitColumnStyles = {
    // touchAction: 'none', // For the default sensor of PointerSensor
    // https://github.com/clauderic/dnd-kit/issues/117 - Variable sized sortables stretched when dragged #117
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : undefined
  }
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (
    <div
      ref={setNodeRef}
      style={dndKitColumnStyles}
      {...attributes}
    >
      {/* Box column */}
      <Box
        {...listeners}
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#4b6584' : '#d1d8e0'),
          ml: 2,
          borderRadius: '8px',
          border: '1px solid #172b4d',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(4)})`
        }}
      >
        {/* Box column header */}
        <Box sx={{
          height: (theme) => theme.trelloCustom.columnHeaderHeight,
          p: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography sx={{
            fontWeight: 'bold',
            cursor: 'pointer',
            '&.MuiTypography-body1': {
              fontSize: '1rem'
            }
          }}>
            {column?.title}
          </Typography>
          <Box>
            <Tooltip title="More options">
              <MoreHorizIcon sx={{
                color: 'text.primary',
                cursor: 'pointer'
              }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basi-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              />
            </Tooltip>
            <Menu
              id="basi-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AddCardIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <DeleteForeverIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* List cards */}
        <ListCards cards={orderedCards} />
        {/* Box column footer */}
        <Box sx={{
          height: (theme) => theme.trelloCustom.columnFooterHeight,
          p: '0 9px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button
            startIcon={<AddCardIcon />}
            sx={{
              // borderRadius: '8px',
              // color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2]: theme.listColors[0]),
              // backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2]),
              // borderColor: '#172b4d',
              // '&:hover': {
              //   backgroundColor: '#bdc3c7',
              //   color: (theme) => (theme.palette.mode === 'dark' ? theme.listColors[2] : theme.listColors[1]),
              //   borderColor: '#1d2125'
              // }
              color: (theme) => (theme.palette.mode === 'dark' ? 'white' : theme.listColors[2])
            }}
          >
            Add new card
          </Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{
              cursor: 'pointer',
              color: (theme) => (theme.palette.mode === 'dark' ? 'white' : theme.listColors[2])
            }}/>
          </Tooltip>
        </Box>
      </Box>
    </div>
  )
}

export default Column