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
import { queries as messageQuery } from '../api/queries'
import queries from '../../account/api/queries'
import React from 'react'

const Messages = () => {
  const { control } = useForm()
  const theme = useTheme()
  const { id } = useParams()
  const messages = messageQuery.Messages(id as string)
  const me = queries.GetMe()
  const isLoading = messages.isLoading || me.isLoading
  const reversedMessages = messages.isSuccess
    ? [...messages.data.data].reverse()
    : []
  return (
    <Box
      sx={{
        flex: 1,
        overflowY:'auto'
      }}
    >
      <Stack
        sx={{
          minHeight: { xs: 'calc(100% - 107px)', sm: 'calc(100% - 52px)' },
        }}
      >
        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 5,
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {!isLoading &&
          reversedMessages.map((message) => (
            <React.Fragment key={message._id}>
              {message.user == me.data?._id && (
                <Box
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
              {message.user != me.data?._id && (
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
        sx={{
          position: 'sticky',
          bottom: { xs: 56, sm: 0 },
          left: 0,
        }}
      >
        <MessageInput
          control={control}
          name="message"
          isLoading={false}
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
    </Box>
  )
}

export default Messages
