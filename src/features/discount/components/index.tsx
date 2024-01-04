import { Box, Typography } from '@mui/material'
import Loading from './Loading'
import DiscountIcon from '@mui/icons-material/Discount'
import { queries } from '../api/queries'
import DiscountCard from './DiscountCard'

const Discount = ({ id }: { id: string }) => {
  const coupons = queries.GetAll(id)
  const isEmpty = coupons.isSuccess && coupons.data.data.length == 0
  return (
    <Box my={8} mx={2}>
      {coupons.isLoading && (
        <Box>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </Box>
      )}
      {isEmpty && (
        <Box mt={3} textAlign="center">
          <DiscountIcon sx={{ fontSize: '8rem' }} />
          <Typography variant="h5">There are no discounts...</Typography>
        </Box>
      )}
      {coupons.data?.data.map((coupon)=>(
        <DiscountCard coupon={coupon} key={coupon._id}/>
      ))}
    </Box>
  )
}

export default Discount
