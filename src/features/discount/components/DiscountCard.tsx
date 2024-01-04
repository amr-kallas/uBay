import { Box, Stack, Typography, Avatar, Paper, Slide } from '@mui/material'
import Timeago from '../../../lib/timeago'
import { useState } from 'react'
import { CouponsDetails } from '../api/type'
import DiscountAction from './DiscountAction'
import dayjs from 'dayjs'
type CouponProps = {
  coupon: CouponsDetails
}
const DiscountCard = ({ coupon }: CouponProps) => {
  const [open, setOpen] = useState(true)
  const onRemove = () => {
    setOpen(false)
  }
  const expire = dayjs(coupon.expire && coupon.expire.split('T')[0])
  const diffDays = expire.diff(dayjs(), 'day') + 1

  return (
    <Slide
      in={open}
      appear={false}
      unmountOnExit
      direction="right"
      timeout={500}
    >
      <Paper key={coupon._id} sx={{ p: 2, mb: '16px !important' }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Box mr={1.5}>
              <Avatar src={coupon.user.photo} sx={{ width: 30, height: 30 }} />
            </Box>
            <Box>
              <Typography variant="body1">{coupon.user.name}</Typography>
              <Typography sx={{ color: '#777', fontSize: 10 }}>
                <Timeago date={coupon.createdAt} />
              </Typography>
            </Box>
          </Stack>
          <Box mt={-0.5}>
            <DiscountAction onRemove={onRemove} id={coupon._id} />
          </Box>
        </Stack>
        <Box py={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="secondary">Discount:</Typography>
            <Typography color="primary">{coupon.discount} S.Y</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="secondary">Price after discount:</Typography>
            <Typography color="primary">
              {coupon.product.price - coupon.discount} S.Y
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="secondary">closing:</Typography>
            <Typography color="primary">
              {coupon.expire
                ? `After ${diffDays} Days 
            (${coupon.expire.split('T')[0].split('-').join('/')})`
                : 'nothing'}
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Slide>
  )
}

export default DiscountCard
