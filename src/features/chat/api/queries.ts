import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { useMutation, useQuery } from 'react-query'
import { Chat, Chats, Message, MessageAPIType, Messages } from './type'

export const keys = createQueryKeys('chat', {
  getAll: () => ({
    queryFn: API.Chats,
    queryKey: [''],
  }),
  getChat: (id: string) => ({
    queryFn: () => API.GetChat(id),
    queryKey: [id],
  }),
  getAllMessage: (chatId: string) => ({
    queryFn: () => API.Messages(chatId),
    queryKey: [chatId],
  }),
  getMessages: ({ chatId, id }: MessageAPIType) => ({
    queryFn: () => API.GetMessage({ chatId, id }),
    queryKey: [chatId, id],
  }),
})

export const queries = {
  Chats: () => useQuery<Chats<Chat>>(keys.getAll()),
  GetChat: (id: string) => useQuery<Chat>(keys.getChat(id)),
  Add: () => useMutation(API.Add),
  Edit: () => useMutation(API.Edit),
  Delete: () => useMutation(API.Delete),

  Messages: (chatId: string) =>
    useQuery<Messages<Message>>(keys.getAllMessage(chatId)),
  GetMessage: (chatId: string, id: string) =>
    useQuery<Message>(keys.getMessages({ chatId, id })),
  AddMessage: () => useMutation(API.AddMessage),
  EditMessage: () => useMutation(API.EditMessage),
  DeleteMessage: () => useMutation(API.DeleteMessage),
}
