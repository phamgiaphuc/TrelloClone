import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { Box } from '@mui/material'

const ModeSelect = () => {
  const labelColor = (theme) => (theme.palette.mode === 'dark' ? 'white' : '#455570')
  const textColor = (theme) => (theme.palette.mode === 'dark' ? 'white' : '#172b4d')
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <>
      <FormControl sx={{ minWidth: 130 }} size="small">
        <InputLabel
          id="label-select-dark-light-mode"
          sx={{
            color: textColor,
            '&.Mui-focused': {
              color: textColor
            }
          }}
        >
          Mode
        </InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
          sx={{
            color: textColor,
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: labelColor
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: labelColor
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: labelColor
            },
            '.MuiSvgIcon-root': {
              color: textColor
            }
          }}
        >
          <MenuItem value="light">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LightModeIcon fontSize='small'/> Light
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DarkModeOutlinedIcon fontSize='small'/> Dark
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SettingsBrightnessIcon fontSize='small'/> System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default ModeSelect
