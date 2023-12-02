import { useTheme } from '@emotion/react'
import Divider from '@mui/material/Divider'

const DividerLine = () => {
  const theme = useTheme()
  if (theme.palette.mode === 'dark') {
    return (
      <>
        <Divider orientation="vertical" variant="middle" flexItem color="white" />
      </>
    )
  } else {
    return (
      <>
        <Divider orientation="vertical" variant="middle" flexItem color="#1d2125" />
      </>
    )
  }
}

export default DividerLine