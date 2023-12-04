import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Card = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: { ...card }
  })
  const dndKitCardStyles = {
    // touchAction: 'none', // For the default sensor of PointerSensor
    // https://github.com/clauderic/dnd-kit/issues/117 - Variable sized sortables stretched when dragged #117
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? ' 1px solid #172b4d' : undefined,
    borderRadius: isDragging ? ' 9px' : undefined
  }
  const showCardActions = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }
  return (
    <>
      <MuiCard
        ref={setNodeRef}
        style={dndKitCardStyles}
        {...attributes}
        {...listeners}
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
          overflow: 'unset',
          borderRadius: '8px',
          display: card?.FE_PlaceholderCard ? 'none' : 'block'
        }}
      >
        {card?.cover &&
        <CardMedia
          sx={{
            height: 140,
            borderRadius: '8px 8px 0 0'
          }}
          image={card?.cover}
        />}
        <CardContent sx={{
          p: 1.5,
          '&:last-child': {
            p: 1.5
          }
        }}>
          <Typography>{card?.title}</Typography>
        </CardContent>
        {showCardActions() &&
          <CardActions sx={{ p: '0 4px 8px 4px', ml: 0.5 }}>
            {!!card?.memberIds?.length &&
            <Button size="small" sx={{
              color: (theme) => theme.palette.mode === 'dark' ? 'white' : '#172b4d'
            }}>
              <GroupIcon />
              {card?.memberIds?.length}
            </Button>}
            {!!card?.comments?.length &&
            <Button size="small" sx={{
              color: (theme) => theme.palette.mode === 'dark' ? 'white' : '#172b4d'
            }}>
              <CommentIcon />
              {card?.comments?.length}
            </Button>}
            {!!card?.attachments?.length &&
            <Button size="small" sx={{
              color: (theme) => theme.palette.mode === 'dark' ? 'white' : '#172b4d'
            }}>
              <AttachmentIcon />
              {card?.attachments?.length}
            </Button>}
          </CardActions>
        }
      </MuiCard>
    </>
  )
}

export default Card