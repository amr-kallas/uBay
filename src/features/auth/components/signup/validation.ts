import { z } from 'zod'
import { emailSchema, passwordSchema } from '../../../../utils/validation'
export type signup = {
  name: string
  email: string
  password: string
  confirmPassword: string
}
export const defaultValues: signup = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const signupSchema= z
  .object({
    name: z.string().min(1),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "password don't match",
    path: ['confirmPassword'],
  })
export default signupSchema
