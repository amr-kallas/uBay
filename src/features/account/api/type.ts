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

export type FavoriteCategories = {
  description: string
  id: string
  name: string
  _id: string
}
export type FavoriteCities = {
  id: string
  name: string
  _id: string
}
export type User = {
  photo: string
  name: string
  _id: string
  email: string
  createdAt: string
  wallet: Wallet
  favoriteCategories: FavoriteCategories[]
  favoriteCities: FavoriteCities[]
  role: string
  passwordChangedAt: string
  updatedAt: string
  id: string
}
export type Update = {
  name: string
  email: string
  photo: File | string
}
export type ChangePassword = {
  passwordCurrent: string
  password: string
}
export type ForgotPassword = {
  email: string
}
export type Favorite = {
  favoriteCategories: string[]
  favoriteCities: string[]
}
