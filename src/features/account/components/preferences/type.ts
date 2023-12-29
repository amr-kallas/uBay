
export const defaultValues={
    favoriteCities:[],
    favoriteCategories:[]
}
export type FavoriteBody={
    _id:string,
    name:string
}
export const favoriteBody=(data:any)=>{
    const favoriteCategories=data?.favoriteCategories?.map((category:FavoriteBody)=>{
        return{
            _id:category._id,
            name:category.name
        }
    })
    const favoriteCities=data?.favoriteCities?.map((city:FavoriteBody)=>{
        return{
            _id:city._id,
            name:city.name
        }
    })
    return{
        favoriteCategories,
        favoriteCities
    }
}
