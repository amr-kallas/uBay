import { Box, Divider } from '@mui/material'
import MessageInput from '../../../../components/input/messageInput'
import { useForm } from 'react-hook-form'
import queries from '../../../account/api/queries'
import { queries as commentQuery, keys } from '../../api/queries'
import { useQueryClient } from 'react-query'
import { Message, defaultValue } from './validation'
const AddComment = ({ PostID }: { PostID: string }) => {
  const isMe = queries.GetMe()
  const add = commentQuery.AddComment()
  const { control, handleSubmit,reset } = useForm({
    defaultValues: defaultValue,
  })
  const queryClient = useQueryClient()
  const onSubmit = (message: Message) => {
    reset(defaultValue)
    const body = {
      ...message,
      user: isMe.data!._id,
      product: PostID,
    }
    if (message.content) {
        console.log(message)
      add.mutate(body, {
        onSuccess: (data) => {
          console.log(data)
          queryClient.invalidateQueries(keys.getAll._def)
        },
        onError: (err) => console.log(err),
      })
    }
  }
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        position: 'fixed',
        bottom: 0,
        width: {xs:1,sm:390},
        bgcolor: 'white',
      }}
    >
      <Divider sx={{ mb: '10px' }} />
      <Box
        sx={{
          p: '0 16px 8px',
        }}
      >
        <MessageInput control={control} name="content" isLoading={add.isLoading} />
      </Box>
    </Box>
  )
}

export default AddComment
