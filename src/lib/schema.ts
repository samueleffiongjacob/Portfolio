// import { z } from 'zod'

// export const contactFormSchema = z.object({
//   name: z
//     .string()
//     .min(2, { message: 'Name must be at least 2 characters' })
//     .max(32, { message: 'Name must be at most 32 characters' }),
//   email: z.string().email({ message: 'Invalid email address' }),
//   phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
//   message: z
//     .string()
//     .min(2, { message: 'Message must be at least 2 characters' })
//     .max(1000, { message: 'Message must be at most 1000 characters' }),
//   pdfFile: z.instanceof(File).optional(),
// })

import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(32, { message: 'Name must be at most 32 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  message: z
    .string()
    .min(2, { message: 'Message must be at least 2 characters' })
    .max(1000, { message: 'Message must be at most 1000 characters' }),
  pdfFile: z.any().optional(),
})

