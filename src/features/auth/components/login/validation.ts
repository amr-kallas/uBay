import { z } from 'zod'
import { emailSchema, passwordSchema } from '../../../../utils/validation'
export type login = {
  email: string
  password: string
}
export const defaultValues: login = {
  email: '',
  password: '',
}
const loginSchema= z
  .object({
    email: emailSchema,
    password: passwordSchema,
  })
  
export default loginSchema
