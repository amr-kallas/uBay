import { MenuItem, Paper, Stack, Typography } from '@mui/material'
import TextField from '../../../../components/input/TextField'
import { useForm } from 'react-hook-form'
import Select from '../../../../components/input/Select'
import queries from '../../api/queries'
import { AddPost, CategoryDetails, StoreDetails } from '../../api/type'
import Submit from '../../../../components/button/Submit'
import { zodResolver } from '@hookform/resolvers/zod'
import { addSchema, defaultValues } from './validation'
import { z } from 'zod'
import UploadImg from '../../../../components/input/UploadImg'
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof addSchema>>({
    resolver: zodResolver(addSchema),
    defaultValues: defaultValues,
  })
  const category = queries.Categories()
  const store = queries.Stores()
  const add = queries.Add()
  const navigate=useNavigate()
  const onSubmit = (data: AddPost) => {
    add.mutate(data, {
      onSuccess: (post) => {
        navigate(`/posts/${post._id}`)
      },
      onError: (error) => {
        console.log(error)
      },
    })
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
      <Typography variant="h4" color="primary" textAlign="center" pt={2} pb={7}>
        Add a new piece
      </Typography>
      <Stack
        spacing={2}
        sx={{ maxWidth: '80%', m: 'auto' }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField control={control} name="title" label="Title" />
        <TextField
          control={control}
          name="content"
          label="Content"
          multiline
          rows={3}
        />
        <TextField control={control} name="price" type="number" label="Price" />
        <Select control={control} name="category">
          {category.data?.data.map((item: CategoryDetails) => (
            <MenuItem value={item._id} key={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <Select control={control} name="store">
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
        />
        <Submit
          sx={{
            width: 'fit-content',
            m: '20px auto !important',
            p: '6px 30px !important',
          }}
          isLoading={add.isLoading}
        >
          Add
        </Submit>
      </Stack>
    </Paper>
  )
}

export default AddPost
