import { Box, Button, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import AddCardIcon from '@mui/icons-material/AddCard'

const labelColor = (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[1])
const textColor = (theme) => (theme.palette.mode === 'dark' ? theme.listColors[0] : theme.listColors[2])

const FormAddNewColum = ({ toggleOpenNewColumn }) => {
  const [columnTitle, setcolumnTitle] = useState('')
  const addNewColumn = () => {
    console.log(columnTitle)
  }
  return (
    <>
      {/*Form add new column*/}
      <Box sx={{
        width: '250px',
        mx: 2,
        p: 1,
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        borderRadius: '8px',
        border: '1px solid #172b4d',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#4b6584' : '#d1d8e0')
      }}>
        <TextField
          label="Column name"
          type="text"
          variant="outlined"
          size="small"
          autoFocus
          value={columnTitle}
          placeholder='Enter a name'
          onChange={( event ) => {
            setcolumnTitle(event.target.value)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardArrowRightIcon sx={{ color: labelColor, cursor: 'pointer' }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                sx={{ color: labelColor, cursor: 'pointer', '&:hover': { color: '#e74c3c' } }}
                fontSize='small'
                onClick={toggleOpenNewColumn}
              />
            )
          }}
          sx={{
            minWidth: '130px',
            width: '232px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? theme.listBackgrounds[0] : theme.listBackgrounds[1]),
            borderRadius: '8px',
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
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Button startIcon={<AddCardIcon />} onClick={addNewColumn} sx={{
            width: '232px',
            color: (theme) => (theme.palette.mode === 'dark' ? 'white' : theme.listColors[2])
          }}>
            Add column
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default FormAddNewColum