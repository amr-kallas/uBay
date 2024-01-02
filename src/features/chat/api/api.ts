import API_ROUTES from '../../../constant/apiRoutes'
import axios from '../../../lib/axios'
import {
  AddChat,
  AddMessage,
  Chat,
  Chats,
  EditMessage,
  Message,
  MessageAPIType,
  Messages,
} from './type'

const API = {
  Chats: async () => {
    const { data } = await axios.get<Chats<Chat>>(API_ROUTES.Chat.GETALL)
    return data
  },
  GetChat: async (id: string) => {
    const { data } = await axios.get<Chat>(API_ROUTES.Chat.GET(id))
    return data
  },
  Add: async (body: AddChat) => {
    const { data } = await axios.post(API_ROUTES.Chat.Add, body)
    return data
  },
  Edit: async ({ id, ...body }: any) => {
    const { data } = await axios.patch(API_ROUTES.Chat.EDIT(id), body)
    return data
  },
  Delete: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.Chat.DELETE(id))
    return data
  },
  Messages: async (chatId: string) => {
    const { data } = await axios.get<Messages<Message>>(
      API_ROUTES.Message.GETALL(chatId)
    )
    return data
  },
  AddMessage: async ({ chatId, ...body }: AddMessage) => {
    const { data } = await axios.post(API_ROUTES.Message.Add(chatId), body)
    return data
  },
  GetMessage: async ({ chatId, id }: MessageAPIType) => {
    const { data } = await axios.get<Message>(
      API_ROUTES.Message.Get(chatId, id)
    )
    return data
  },
  EditMessage: async ({ chatId, id, ...body }: EditMessage) => {
    const { data } = await axios.patch(
      API_ROUTES.Message.EDIT(chatId, id),
      body
    )
    return data
  },
  DeleteMessage: async ({ chatId, id }: MessageAPIType) => {
    const { data } = await axios.delete(API_ROUTES.Message.DELETE(chatId, id))
    return data
  },
}
export default API
