import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from '@mui/material'
type widthRange = {
  min: number
  max: number
}
type SkeletonProps = {
  widthRange?: widthRange
} & MuiSkeletonProps
const Skeleton = ({ widthRange, ...props }: SkeletonProps) => {
  const width = (widthRange?.min || 0) + Math.random() * (widthRange?.max || 0)
  return <MuiSkeleton {...props} width={width} />
}

export default Skeleton
