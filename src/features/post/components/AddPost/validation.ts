import { z } from 'zod'
import { AddPost } from '../../api/type'

export const defaultValues: AddPost = {
  title: '',
  content: '',
  price: 0,
  category: '',
  store: '',
  photos: [],
}

export const addSchema: z.ZodType<AddPost> = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
  price: z.coerce.number().positive(),
  category: z.string().nonempty(),
  store: z.string().nonempty(),
  photos: z
    .array(z.instanceof(File))
    .min(1, { message: 'Photos cannot be empty' })
    .or(z.array(z.string()).nonempty()),
})
