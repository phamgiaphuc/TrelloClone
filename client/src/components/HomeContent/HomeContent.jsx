/* eslint-disable no-unused-vars */
import { Box, Button, Link, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import CloseIcon from '@mui/icons-material/Close'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'

const HomeContent = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  document.title = 'Home | Trello'
  return (
    <>
      <Box>
        <Box sx={{
          pt: (theme) => theme.trelloCustom.appBarHeight
        }}>
          <Box sx={{
            height: '500px',
            background: 'linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180))',
            display: 'flex',
            justifyContent: 'safe center'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '400px',
              width: '550px',
              backgroundColor: 'transparent',
              justifyContent: 'center',
              gap: 1,
              mt: '2rem'
            }}>
              <Typography variant='h3' sx={{
                color: 'white',
                fontWeight: '500',
                mb: '1rem'
              }}>
                Trello brings all your tasks, teammates, and tools together
              </Typography>
              <Typography variant='h6' sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: '1rem'
              }}>
                Keep everything in the same place—even if your team isn’t.
              </Typography>
              <Box sx={{
                display: 'block',
                mb: '1rem'
              }}>
                <TextField
                  placeholder='Email'
                  type="text"
                  value={searchValue}
                  onChange={( event ) => {
                    setSearchValue(event.target.value)
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  InputProps={{
                    endAdornment: (
                      <CloseIcon
                        sx={{ color: searchValue ? 'black' : 'transparent', cursor: 'pointer' }}
                        fontSize='small'
                        onClick={() => setSearchValue('')}
                      />
                    )
                  }}
                  sx={{
                    width: '325px',
                    maxWidth: '350px',
                    borderRadius: '0.4rem',
                    backgroundColor: 'white',
                    height: '54px',
                    minWidth: '130px',
                    '& label': { color: 'black' },
                    '& input': { color: 'black' },
                    '& label.Mui-focused': { color: 'black' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(223, 225, 230)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(223, 225, 230)'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgb(223, 225, 230)'
                      }
                    }
                  }}
                />
                <Button variant="contained" sx={{
                  ml: 2,
                  height: '54px',
                  color: 'white',
                  fontSize: '1rem',
                  borderRadius: '0.4rem',
                  backgroundColor: 'rgb(0, 101, 255)',
                  '&:hover': {
                    backgroundColor: '#1e3799'
                  }
                }}>Sign up - it’s free!</Button>
              </Box>
              <Box sx={{
                display: 'flex',
                gap: 1
              }}>
                <Link href="https://www.youtube.com/watch?v=yDlDdTp7p6Q" underline="hover" sx={{
                  color: 'white',
                  ml: '8px',
                  fontWeight: '500'
                }}>Watch video</Link>
                <PlayCircleOutlineIcon sx={{
                  color: 'white'
                }}/>
              </Box>
            </Box>
            <Box component="img" sx={{
              height: 468,
              width: 528,
              maxHeight: { xs: 250, md: 468 },
              maxWidth: { xs: 250, md: 528 },
              backgroundColor: 'transparent'
            }}
            alt="The house from the offer."
            src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=540&fm=webp"
            >
            </Box>
          </Box>
          <Box sx={{
            height: '660px',
            background: 'linear-gradient(0deg, rgb(230, 252, 255), rgb(255, 255, 255))'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Box sx={{
                mt: 2,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography variant='h7' sx={{
                  color: 'black',
                  fontWeight: '600',
                  mb: '1rem'
                }}>
                  TRELLO 101
                </Typography>
                <Typography variant='h4' sx={{
                  color: 'black',
                  fontWeight: '500',
                  mb: '1rem'
                }}>
                  A productivity powerhouse
                </Typography>
                <Box sx={{
                  width: '700px'
                }}>
                  <Typography variant='h6' sx={{
                    color: 'black',
                    fontWeight: '400'
                  }}>
                    Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our
                    <Link href="https://trello.com/guide" underline="hover" sx={{
                      color: 'rgb(0, 82, 204)',
                      ml: '8px'
                    }}>
                      guide for getting started
                    </Link>.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              mt: '1.5rem'
            }}>
              <Card sx={{ maxWidth: 360, height: 390, maxHeight: 390, backgroundColor: 'white' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="210"
                    image="https://ocd.vn/wp-content/uploads/2023/06/Carousel_Image_Boards_2x.webp"
                    alt="Boards"
                  />
                  <CardContent sx={{ color: 'black' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      Boards
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: '400', color: 'black' }}>
                    Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 360, height: 390, maxHeight: 390, backgroundColor: 'white' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="210"
                    image="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/151846/Originals/tai-trello-ve-may-tinh%20(2).png"
                    alt="Lists"
                  />
                  <CardContent sx={{ color: 'black' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      Lists
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: '400' }}>
                    The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 360, height: 390, maxHeight: 390, backgroundColor: 'white' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="210"
                    image="https://25322853.fs1.hubspotusercontent-eu1.net/hub/25322853/hubfs/Atlassian%20products%20screenshots/Carousel_Image_Cards_2x.webp?length=700&name=Carousel_Image_Cards_2x.webp"
                    alt="Cards"
                  />
                  <CardContent sx={{ color: 'black' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      Cards
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: '400', color: 'black' }}>
                    Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.                      </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HomeContent