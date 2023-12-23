export const PostDetail=(post:any)=>{
    return{
        title:post.title,
        content:post.content,
        category:post.category._id,
        store:post.store._id,
        price:post.price,
        photos:post.photos
    }
}