import { Button } from '@mui/material'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { useState } from 'react'
import { DrawerComment } from '../../../comment'
const CommentIcon = ({ PostId }: { PostId: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        sx={{
          flex: 1,
          textAlign: 'center',
          cursor: 'pointer',
          p: '8px 0',
        }}
        onClick={() => setOpen(true)}
      >
        <ChatBubbleIcon />
      </Button>
      {open && <DrawerComment PostID={PostId} open={open} setOpen={setOpen} />}
    </>
  )
}

export default CommentIcon
