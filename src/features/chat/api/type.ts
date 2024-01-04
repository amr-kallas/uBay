import { CategoryDetails } from '../../category/api/type'

export type AddChat = {
  name: string
  user: string
  product: string
}
export type Chats<T> = {
  result: number
  data: T[]
}
export type Chat = {
  createdAt: string
  customer: {
    id: string
    name: string
    photo: string
    _id: string
  }
  id: string
  name: string
  product: {
    category: CategoryDetails
    id: string
    photos: string[]
    title: string
    _id: string
    price: number
    store: {
      city: {
        _id: string
        name: string
      }
      id: string
      name: string
    }
  }
  seller: {
    id: string
    name: string
    photo: string
    _id: string
  }
}
export type AddMessage = {
  content: string
  user: string
  chatId: string
}
export type EditMessage = {
  id: string
} & AddMessage
export type MessageAPIType = {
  chatId: string
  id: string
}
export type Messages<T> = {
  totalDataCount: number
  data: T[]
}
export type Message = {
  content: string
  createdAt: string
  user: string
  _id: string
}
