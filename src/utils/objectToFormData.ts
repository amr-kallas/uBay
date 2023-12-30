const objectToFormData=(body:any)=>{
    const form=new FormData()
    for(const key in body){
        if(Array.isArray(body[key])){
            body[key].map((item:any)=>{
                form.append(key,item)
            })
        }else{
            form.append(key,body[key])
        }
    }
    return form
}
export default objectToFormData