import { z } from 'zod'
import { emailSchema } from '../../../../utils/validation'

export type resetPassword = {
  email: string
}
export const defaultValues = {
  email: '',
}

const resetSchema: z.ZodType<resetPassword> = z.object({
  email: emailSchema,
})
export default resetSchema
