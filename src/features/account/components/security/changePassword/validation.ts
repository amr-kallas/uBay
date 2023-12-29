import z from 'zod'
import { passwordSchema } from '../../../../../utils/validation'
export const defaultValues={
    passwordCurrent:'',
    password:''
}
export const changePasswordSchema = z.object({
  passwordCurrent: passwordSchema,
  password: passwordSchema,
})
