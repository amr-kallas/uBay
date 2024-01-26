import {
  Box,
  Stack,
  Typography,
  useTheme,
  CircularProgress,
} from '@mui/material'
import MessageInput from '../../../components/input/messageInput'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { keys, queries as messageQuery } from '../api/queries'
import queries from '../../account/api/queries'
import React, { useEffect, useRef } from 'react'
import { io } from 'socket.io-client'
import { API_BASE } from '../../../constant/domain'
import { useQueryClient } from 'react-query'
import { Message } from '../api/type'
const socket = io(API_BASE)

const Messages = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { message: '' },
  })
  const ref = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const { id = '' } = useParams<string>()
  const messages = messageQuery.Messages(id as string)
  const addMessage = messageQuery.AddMessage()
  const { data, isLoading } = queries.GetMe()
  const queryClient = useQueryClient()
  const isLoadingMessage = messages.isLoading || isLoading
  const isEmpty = messages.isSuccess && messages.data?.data.length == 0
  const reversedMessages = messages.isSuccess
    ? [...messages.data.data].reverse()
    : []
  useEffect(() => {
    if (data) socket.emit('setup', data)
  }, [data])
  useEffect(() => {
    socket.emit('join chat', id)
    reset({ message: '' })
    ref.current?.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  useEffect(() => {
    const listener = ({
      newMessageReceived,
    }: {
      newMessageReceived: Message
    }) => {
      queryClient.setQueriesData(keys.getAllMessage._def, (oldData: any) => {
        if (!oldData) return
        const newData = [newMessageReceived, ...oldData.data]
        return { ...oldData, data: newData }
      })
    }
    socket.on('message received', listener)
    return () => {
      socket.off('message received')
    }
  }, [queryClient])
  const onSubmit = ({ message }: { message: string }) => {
    if (message.trim().length == 0) return
    addMessage.mutate(
      { chatId: id, user: data!._id, content: message },
      {
        onSuccess: (data) => {
          socket.emit('new message', { chatId: id, message: data })
          queryClient.invalidateQueries(keys.getAllMessage._def)
          reset({ message: '' })
          messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        },
        onError: (err) => {
          console.log(err)
        },
      }
    )
  }
  return (
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
      }}
    >
      <Stack
        sx={{
          minHeight: { xs: 'calc(100% - 107px)', sm: 'calc(100% - 52px)' },
        }}
      >
        {isEmpty && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'rgba(0, 0, 0, 0.6)',
                textAlign:'center',
                '@media(max-width:420px)': {
                  fontSize: 20
                },
              }}
            >
              There are no messages yet...
            </Typography>
          </Box>
        )}
        {isLoadingMessage && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 5,
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {!isLoadingMessage &&
          reversedMessages.map((message) => (
            <React.Fragment key={message._id}>
              {message.user == data?._id && (
                <Box
                  ref={messagesEndRef}
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    maxWidth: 330,
                    width: 'fit-content',
                    padding: '5px 8px',
                    paddingRight: '42px',
                    margin: '8px',
                    color: 'white',
                    borderRadius: '0px 8px 8px 8px',
                    position: 'relative',
                    wordBreak: 'break-word',
                  }}
                >
                  {message.content}
                  <Typography
                    sx={{
                      position: 'absolute',
                      right: '5px',
                      fontSize: '12px',
                      color: '#fff7',
                      bottom: 0,
                    }}
                  >
                    {message.createdAt.split('T')[1].slice(0, 5)}
                  </Typography>
                </Box>
              )}
              {message.user != data?._id && (
                <Box ml="auto">
                  <Box
                    sx={{
                      bgcolor: 'white',
                      maxWidth: 330,
                      width: 'fit-content',
                      padding: '5px 8px',
                      paddingRight: '42px',
                      margin: '8px',
                      color: 'rgba(0, 0, 0, 0.87)',
                      borderRadius: '8px 0px 8px 8px',
                      position: 'relative',
                      wordBreak: 'break-word',
                    }}
                  >
                    {message.content}
                    <Typography
                      sx={{
                        position: 'absolute',
                        right: '5px',
                        fontSize: '12px',
                        color: 'rgba(0, 0, 0, 0.6)',
                        bottom: 0,
                      }}
                    >
                      {message.createdAt.split('T')[1].slice(0, 5)}
                    </Typography>
                  </Box>
                </Box>
              )}
            </React.Fragment>
          ))}
      </Stack>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          position: 'sticky',
          bottom: { xs: 56, sm: 0 },
          left: 0,
        }}
      >
        <MessageInput
          ref={ref}
          control={control}
          name="message"
          isLoading={addMessage.isLoading}
          sx={{
            bgcolor: 'white',
            p: 1,
            mb: { xs: 7, sm: 0 },
            fieldset: {
              border: '1px solid rgba(0, 0, 0, 0.23) !important',
              bgcolor: 'inherit !important',
              zIndex: 'auto !important',
            },
          }}
        />
      </Box>
      <div ref={messagesEndRef} />
    </Box>
  )
}

export default Messages
