import { Alert, Box, Chip, Paper, Stack, Typography } from '@mui/material'
import queries from '../../api/queries'
import { Unpaid, Wait } from '../../api/type'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'
type Sales = {
  isBuy: boolean
}
const Sales = ({ isBuy }: Sales) => {
  const mine = queries.Mine(isBuy)
  const navigate = useNavigate()
  const handleClick = (id: string) => {
    navigate(`/posts/${id}`)
  }
  const handleGenerate = () => {}
  return (
    <Box>
      {mine.isLoading && (
        <>
          <Loading />
          <Loading />
          <Loading />
        </>
      )}
      {mine.data?.wait.map((post: Wait) => (
        <Paper
          key={post._id}
          sx={{
            width: 1,
            bgcolor: 'white',
            m: '12px auto',
          }}
        >
          <Alert
            severity="warning"
            sx={{
              padding: '0 16px',
              fontSize: 14,
              svg: {
                color: '#ed6c02',
              },
            }}
          >
            Please go to receive the Piece
          </Alert>
          <Stack direction="row">
            <Box p={2}>
              <Typography sx={{ fontSize: 18 }}>
                {post.product.title}
              </Typography>
              <Box sx={{ mt: 1, color: '#777', display: 'flex' }}>
                Price:{' '}
                <Typography color="primary" ml={1}>
                  {post.product.price} S.Y
                </Typography>{' '}
              </Box>
              <Stack
                direction="row"
                spacing={1}
                mt={2}
                sx={{ flexWrap: 'wrap', gap: '8px' }}
              >
                <Chip
                  label="PIECE DETAILS"
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleClick(post.product._id)}
                />
                <Chip
                  label="CODE GENERATION QR"
                  color="primary"
                  onClick={handleGenerate}
                  sx={{ marginLeft: '0 !important' }}
                />
              </Stack>
            </Box>
            <Box
              sx={{
                flexBasis: '40%',
                height: 150,
                position: 'relative',
                ':before': {
                  content: `"+${post.product.photos.length - 1}"`,
                  position: 'absolute',
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  height: '100%',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '2rem',
                  display: post.product.photos.length > 1 ? 'flex' : 'none',
                },
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={post.product.photos[0]}
              />
            </Box>
          </Stack>
        </Paper>
      ))}
      {mine.data?.unpaid.map((post: Unpaid) => (
        <Paper
          key={post._id}
          sx={{
            width: { xs: '100%', sm: '500px' },
            bgcolor: 'white',
            m: '12px auto',
          }}
        >
          <Alert
            severity="info"
            sx={{
              padding: '0 16px',
              fontSize: 14,
              svg: {
                color: '#0288d1',
              },
            }}
          >
            Not Sold yet...
          </Alert>
          <Stack direction="row">
            <Box p={2}>
              <Typography sx={{ fontSize: 18 }}>{post.title}</Typography>
              <Box sx={{ mt: 1, color: '#777', display: 'flex' }}>
                Price:{' '}
                <Typography color="primary" ml={1}>
                  {post.price} S.Y
                </Typography>{' '}
              </Box>
              <Stack direction="row" spacing={1} mt={2}>
                <Chip
                  label="PIECE DETAILS"
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleClick(post._id)}
                />
              </Stack>
            </Box>
            <Box
              sx={{
                flexBasis: '40%',
                height: 150,
                position: 'relative',
                ml: 'auto',
                ':before': {
                  content: `"+${post.photos.length - 1}"`,
                  position: 'absolute',
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  height: '100%',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '2rem',
                  display: post.photos.length > 1 ? 'flex' : 'none',
                },
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={post.photos[0]}
              />
            </Box>
          </Stack>
        </Paper>
      ))}
    </Box>
  )
}

export default Sales