import { z } from "zod"
import { emailSchema } from "../../../../utils/validation"

export const defaultValues = {
  name: '',
  email: '',
  photo: [],
}
export const Profile = (me: any) => {
  return {
    name: me.name,
    email: me.email,
    photo: me.photo,
  }
}
export const editSchema=z.object({
  name:z.string().nonempty(),
  email:emailSchema,
  photo:z.instanceof(File).or(z.string())
})
