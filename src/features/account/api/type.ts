export type Wallet = {
  available: number
  createdAt: string
  id: string
  pending: number
  total: number
  updatedAt: string
  user: string
  _id: string
}

export type User = {
  photo: string
  name: string
  _id: string
  email: string
  createdAt: string
  wallet: Wallet
}
export type Update={
  name:string
  email:string
  photo:File|string
}