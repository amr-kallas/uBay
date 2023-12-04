export type product = {
  _id: string
  category: {
    description: string
    name: string
  }
  comments: number
  content: string
  createdAt: string
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
export type User={
  photo: string
  name: string
  _id: string
}