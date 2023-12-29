export type City<T> = {
  data: T[]
  totalDataCount: number
}
export type CityDetails={
    createdAt:string,
    id:string,
    name:string,
    updatedAt:string,
    _id:string
}
export type AddCity = {
  name: string
}
export type EditCity = {
  id: string
} & AddCity
