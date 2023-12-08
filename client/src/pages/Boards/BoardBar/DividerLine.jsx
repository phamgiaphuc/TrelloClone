import { useTheme } from '@emotion/react'
import Divider from '@mui/material/Divider'

const DividerLine = () => {
  const theme = useTheme()
  return (
    theme.palette.mode === 'dark' ?
      (
        <>
          <Divider orientation="vertical" variant="middle" flexItem color="white" />
        </>
      ) : (
        <>
          <Divider orientation="vertical" variant="middle" flexItem color="#1d2125" />
        </>
      )
  )
}

export default DividerLine