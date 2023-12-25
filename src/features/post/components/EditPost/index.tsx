import { useParams } from 'react-router-dom'
import {
  LinearProgress,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import TextField from '../../../../components/input/TextField'
import { useForm } from 'react-hook-form'
import Select from '../../../../components/input/Select'
import queries from '../../api/queries'
import { AddPost, CategoryDetails, StoreDetails } from '../../api/type'
import Submit from '../../../../components/button/Submit'
import { zodResolver } from '@hookform/resolvers/zod'
// import { addSchema, defaultValues } from './validation'
// import { z } from 'zod'
import UploadImg from '../../../../components/input/UploadImg'
import { useEffect } from 'react'
import { PostDetail } from './helpers'
import { addSchema, defaultValues } from '../AddPost/validation'
const EditPost = () => {
  const { id } = useParams() as { id: string }
  const { data, isLoading, isSuccess } = queries.Get(id)
  const category = queries.Categories()
  const store = queries.Stores()
  const edit = queries.Edit()
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isSuccess ? PostDetail(data) : defaultValues,
    resolver: zodResolver(addSchema),
  })
  useEffect(() => {
    if (data) reset(PostDetail(data))
  }, [data, reset])

  const onSubmit = (body: AddPost) => {
    console.log(data)
    edit.mutate(
      { id, ...body },
      {
        onSuccess: () => {},
        onError: (error) => {
          console.log(error)
        },
      }
    )
  }
  const onUpload = (files: File[]) => {
    const file = Array.from(files)
    setValue('photos', file)
  }
  const onRemove = () => {
    setValue('photos', [])
  }
  return (
    <Paper
      sx={{
        width: { xs: '100%', sm: '600px' },
        m: '75px auto',
        mb: { xs: '100px', sm: '20px' },
      }}
    >
      {isLoading && <LinearProgress />}
      <Typography variant="h4" color="primary" textAlign="center" pt={2} pb={7}>
        Modify Piece information
      </Typography>
      <Stack
        spacing={2}
        sx={{ maxWidth: '80%', m: 'auto' }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField control={control} name="title" label="Title" disabled={isLoading}/>
        <TextField
          control={control}
          name="content"
          label="Content"
          multiline
          rows={3}
          disabled={isLoading}
        />
        <TextField control={control} name="price" type="number" label="Price" disabled={isLoading}/>
        <Select disabled={isLoading} control={control} name="category">
          {category.data?.data.map((item: CategoryDetails) => (
            <MenuItem value={item._id} key={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <Select disabled={isLoading} control={control} name="store">
          {store.data?.data.map((item: StoreDetails) => (
            <MenuItem value={item._id} key={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <UploadImg
          onRemove={onRemove}
          onUpload={onUpload}
          error={errors.photos}
          imgURL={data?.photos || []}
        />
        <Submit
          sx={{
            width: 'fit-content',
            m: '20px auto !important',
            p: '6px 30px !important',
          }}
          isLoading={edit.isLoading}
        >
          Save
        </Submit>
      </Stack>
    </Paper>
  )
}

export default EditPost