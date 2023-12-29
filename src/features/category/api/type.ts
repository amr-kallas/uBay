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
export type AddCategory = {
  description: string
  name: string
}
export type EditCategory = {
  id: string
} & AddCategory
