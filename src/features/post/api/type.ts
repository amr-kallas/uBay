import { User } from "../../account/api/type"

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
