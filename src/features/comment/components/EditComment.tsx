import { useForm } from 'react-hook-form'
import TextField from '../../../components/input/TextField'
import { Box, Stack } from '@mui/material'
import Submit from '../../../components/button/Submit'
import { keys, queries } from '../api/queries'
import { useQueryClient } from 'react-query'
type EditComment = {
  content: string
  postId: string
  userId: string
  id:string
  cancelEdit:()=>void
}
const EditComment = ({ content,id, postId, userId ,cancelEdit}: EditComment) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { 'content': content },
  })
  const queryClient=useQueryClient()
  const edit=queries.EditComment()
  const onSubmit = ({content}:{content:string}) => {
    const body = {
      content,
      product: postId,
      user: userId,
    }
    if(content)
    edit.mutate({id,body},{
        onSuccess:()=>{
            queryClient.invalidateQueries(keys.getAll._def)
            cancelEdit()
        },
        onError:(err)=>{
            console.log(err)
        }
    })
  }
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} width={1} mt={2}>
      <TextField
        control={control}
        name="content"
        sx={{
          '.MuiInputBase-input': {
            height: 7,
          },
          width:'100%'
        }}
      />
      <Stack
        direction="row"
        spacing={1}
        sx={{
          marginTop: '15px',
          maxWidth: '200px',
          marginLeft: 'auto',
        }}
      >
        <Submit
          sx={{
            fontSize: '10px',
            height: '30px',
            padding: '6px 12px !important',
            marginTop: '15px',
            minWidth: 0,
          }}
          isLoading={edit.isLoading}
        >
          Submit
        </Submit>
        <Submit
          sx={{
            fontSize: '10px',
            height: '30px',
            padding: '6px 12px !important',
            marginTop: '15px',
            minWidth: 0,
          }}
          variant="outlined"
          color="error"
          onClick={cancelEdit}
        >
          cancel
        </Submit>
      </Stack>
    </Box>
  )
}

export default EditComment
