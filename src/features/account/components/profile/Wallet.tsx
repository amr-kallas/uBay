import PendingIcon from '@mui/icons-material/Pending'
import WalletIcon from '@mui/icons-material/Wallet'
import { Paper, Stack, Typography } from '@mui/material'
import Skeleton from '../../../../components/feedback/Skeleton'
type Wallet = {
  available: number 
  standing: number 
  loading: boolean
}
const Wallet = ({ available, standing, loading }: Wallet) => {
  return (
    <Paper
      sx={{
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '30px',
        padding: '16px',
        borderRadius: '12px',
      }}
    >
      <Stack direction="row" mb={2} spacing={1}>
        <PendingIcon />
        <Typography color="primary">Available money</Typography>
        {!loading && (
          <Typography color="secondary">
            {available.toLocaleString()} S.Y
          </Typography>
        )}
        {loading && <Skeleton widthRange={{ min: 30, max: 40 }} />}
      </Stack>
      <Stack direction="row" spacing={1}>
        <WalletIcon />
        <Typography color="primary">Outstanding money</Typography>
        {!loading && (
          <Typography color="secondary">
            {standing.toLocaleString()} S.Y
          </Typography>
        )}
        {loading && <Skeleton widthRange={{ min: 30, max: 40 }} />}
      </Stack>
    </Paper>
  )
}

export default Wallet
