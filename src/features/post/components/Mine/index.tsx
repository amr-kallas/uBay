import { Alert, Box, Chip, Paper, Stack, Typography } from '@mui/material'
import queries from '../../api/queries'
import { useNavigate } from 'react-router-dom'
import { Customer, Seller, Unpaid, Wait } from '../../api/type'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import Loading from './Loading'
import { useState } from 'react'
import ProductQR from '../ProductQR'
type Mine = {
  isBuy: boolean
}
const Mine = ({ isBuy }: Mine) => {
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState<Wait | undefined>(undefined)
  const mine = queries.Mine(isBuy)
  const navigate = useNavigate()
  const handleClick = (id: string) => {
    navigate(`/posts/${id}`)
  }
  const handleGenerate = (product: Wait) => {
    setProduct(product)
    setOpen(true)
  }

  return (
    <Box>
      {mine.isLoading && (
        <>
          <Loading />
          <Loading />
          <Loading />
        </>
      )}
      {!isBuy && (
        <>
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
                      {post.product.price
                        .toLocaleString()}{' '}
                      S.Y
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
                      onClick={() => handleGenerate(post)}
                      sx={{
                        marginLeft: '0 !important',
                        svg: {
                          order: 1,
                          ml: '0 !important',
                          mr: '10px !important',
                        },
                      }}
                      icon={<QrCode2Icon />}
                    />
                  </Stack>
                </Box>
                <Box
                  sx={{
                    flexBasis: '40%',
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
                width: { xs: '100%' },
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
                      {post.price
                        .toLocaleString()}{' '}
                      S.Y
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
        </>
      )}

      {isBuy && (
        <>
          {mine.data?.seller.map((post: Seller) => (
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
                      {post.product.price
                        .toLocaleString()}{' '}
                      S.Y
                    </Typography>{' '}
                  </Box>
                  <Box sx={{ mt: 1, color: '#777', display: 'flex' }}>
                    Seller date:{' '}
                    <Typography color="primary" ml={1}>
                      {post.seller_date.slice(0, 10)}
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
                      onClick={() => handleGenerate(post)}
                      sx={{
                        marginLeft: '0 !important',
                        svg: {
                          order: 1,
                          ml: '0 !important',
                          mr: '10px !important',
                        },
                      }}
                      icon={<QrCode2Icon />}
                    />
                  </Stack>
                </Box>
                <Box
                  sx={{
                    flexBasis: '40%',
                    position: 'relative',
                    ml: 'auto',
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
                severity="info"
                sx={{
                  padding: '0 16px',
                  fontSize: 14,
                  svg: {
                    color: '#0288d1',
                  },
                }}
              >
                Waiting for the seller to bring the Piece to the warehouse
              </Alert>
              <Stack direction="row">
                <Box p={2}>
                  <Typography sx={{ fontSize: 18 }}>
                    {post.product.title}
                  </Typography>
                  <Box sx={{ mt: 1, color: '#777', display: 'flex' }}>
                    Price:{' '}
                    <Typography color="primary" ml={1}>
                      {post.product.price
                        .toLocaleString()}{' '}
                      S.Y
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
                  </Stack>
                </Box>
                <Box
                  sx={{
                    flexBasis: '40%',
                    height: 150,
                    position: 'relative',
                    ml: 'auto',
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
          {mine.data?.customer.map((post: Customer) => (
            <Paper
              key={post._id}
              sx={{
                width: 1,
                bgcolor: 'white',
                m: '12px auto',
              }}
            >
              <Alert
                severity="success"
                sx={{
                  padding: '0 16px',
                  fontSize: 14,
                  svg: {
                    color: '#2e7d32',
                  },
                }}
              >
                It was received
              </Alert>
              <Stack direction="row">
                <Box p={2}>
                  <Typography sx={{ fontSize: 18 }}>
                    {post.product.title}
                  </Typography>
                  <Box sx={{ mt: 1, color: '#777', display: 'flex' }}>
                    Price:{' '}
                    <Typography color="primary" ml={1}>
                      {post.product.price
                        .toLocaleString()}{' '}
                      S.Y
                    </Typography>{' '}
                  </Box>
                  <Box sx={{ mt: 1, color: '#777', display: 'flex' }}>
                    Seller date:{' '}
                    <Typography color="primary" ml={1}>
                      {post.seller_date.slice(0, 10)}
                    </Typography>{' '}
                  </Box>
                  <Box sx={{ mt: 1, color: '#777', display: 'flex' }}>
                    Customer date:{' '}
                    <Typography color="primary" ml={1}>
                      {post.customer_date.slice(0, 10)}
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
                  </Stack>
                </Box>
                <Box
                  sx={{
                    flexBasis: '40%',
                    position: 'relative',
                    ml: 'auto',
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
        </>
      )}
      <ProductQR
        open={open}
        setOpen={setOpen}
        person={isBuy ? 'purchese' : 'seller'}
        products={product}
      />
    </Box>
  )
}

export default Mine
