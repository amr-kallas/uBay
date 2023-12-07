import { User } from "../../account/api/type"

export type API_List<T>={
    totalDataCount:number,
    data:T[]
}
export type Comment={
    content:string,
    createdAt:Date,
    _id:string,
    product:string,
    user:User
}
export type AddComment={
    content:string,
    user:string,
    product:string
}