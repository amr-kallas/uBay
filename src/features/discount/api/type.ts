import { User } from '../../account/api/type'

export type Coupons<T> = {
  totalDataCount: number
  data: T[]
}
export type CouponsDetails = {
  active: boolean
  createdAt: Date
  discount: number
  expire: string
  product: {
    category: {
      _id: string
      name: string
      description: string
    }
    id: string
    is_paid: boolean
    photos: string[]
    price: number
    title: string
    store: {
      name: string
      city: {
        name: string
      }
    }
  }
  user: User
  _id: string
}
export type AddCoupons={
    user:string,
    product:string,
    expire:string | undefined,
    discount:number
}
