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
  photos: File[] | string[]
}
export type EditPost = {
  id: string
} & AddPost

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

export type Unpaid={
  category:string,
  coupons:any[],
  photos:string[],
  price:number,
  store:string,
  title:string,
  _id:string
}
export type Wait={
  customer:User,
  payment:{
    is_discount:boolean,
    price_after:number,
    _id:string
  },
  product:{
    category:string,
    photos:string[],
    price:number,
    store:string,
    title:string,
    _id:string
  },
  _id:string
}
export type Customer={
  createdAt:string,
  customer_date:string,
  payment:{
    is_discount:boolean,
    price_after:number,
    _id:string
  },
  product:Unpaid,
  seller:User,
  seller_date:string,
  _id:string
}
export type Seller={
  createdAt:string,
  customer:User,
  payment:{
    is_discount:boolean,
    price_after:number,
    _id:string
  },
  product:Unpaid,
  seller_date:string,
  _id:string

}
export type Mine={
  unpaid:Unpaid[],
  wait:Wait[],
  customer:Customer[],
  seller:Seller[]
}