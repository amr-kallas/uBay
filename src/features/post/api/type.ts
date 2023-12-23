import { User } from '../../account/api/type'

export type Post = {
  _id: string
  category: {
    description: string
    name: string
  }
  comments: number
  content: string
  createdAt: Date
  is_paid: boolean
  coupons: any[]
  likedByMe: boolean
  likes: number
  photos: string[]
  price: number
  store: {
    name: string
    city: {
      name: string
    }
  }
  user: User
  title: string
}
export type AddPost = {
  title: string
  content: string
  price: number
  category: string
  store: string
  photos: File[]
}
export type EditPost = {
  id: string
} & AddPost
export type CategoryDetails = {
  _id: string
  name: string
  createdAt: Date
  description: string
}
export type Category<T> = {
  data: T[]
  totalDataCount: number
}
export type StoreDetails = {
  _id: string
  name: string
  createdAt: Date
  address: string
  city: {
    id: string
    name: string
  }
}
export type Store<T> = {
  data: T[]
  totalDataCount: number
}
