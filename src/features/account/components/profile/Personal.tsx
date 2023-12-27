import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import queries from '../../api/queries'
import Wallet from './Wallet'
import Skeleton from '../../../../components/feedback/Skeleton'
import { Link } from 'react-router-dom'

const Personal = () => {
  const me = queries.GetMe()
  return (
    <>
      <Paper
        sx={{
          maxWidth: 600,
          width: 1,
          minHeight: 400,
          mt: 9,
          mx: 'auto',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 1,
            height: '80%',
            clipPath: 'ellipse(110% 71% at 53% -7%)',
            background: (th) =>
              `linear-gradient(0deg, ${th.palette.primary['700']}, ${th.palette.primary['500']})`,
          }}
        ></Box>
        <Box
          sx={{
            width: '94px',
            height: '94px',
            position: 'absolute',
            left: '52%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          {me.data && (
            <Avatar src={me.data.photo} sx={{ width: 1, height: 1 }} />
          )}
          {me.isLoading && (
            <Skeleton
              variant="circular"
              sx={{
                width: '90px !important',
                height: '90px !important',
              }}
            />
          )}
        </Box>
        <Box mt={34.5}>
          <Stack
            direction="row"
            p={2}
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box>
              <Typography color="primary">Name</Typography>
              {me.data && <Typography variant="h6">{me.data.name}</Typography>}
              {me.isLoading && <Skeleton widthRange={{ min: 40, max: 50 }} />}
            </Box>
            <Box>
              <Typography color="primary">Email</Typography>
              {me.data && <Typography variant="h6">{me.data.email}</Typography>}
              {me.isLoading && <Skeleton widthRange={{ min: 40, max: 50 }} />}
            </Box>
          </Stack>
          <Box p="0 16px 16px">
            <Typography color="primary">CreatedAt</Typography>
            {me.data && (
              <Typography variant="h6">
                {me.data.createdAt.split('T')[0].split('-').join('/')}
              </Typography>
            )}
            {me.isLoading && <Skeleton widthRange={{ min: 40, max: 50 }} />}
          </Box>
          <Divider />
          <Box
            sx={{
              p: 1,
              width: 1,
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <IconButton>
              <Link to="edit">
                <EditIcon />
              </Link>
            </IconButton>
          </Box>
        </Box>
      </Paper>
      <Wallet
        available={me.data! && me.data.wallet.available}
        standing={me.data! && me.data.wallet.pending}
        loading={me.isLoading}
      />
    </>
  )
}

export default Personal
