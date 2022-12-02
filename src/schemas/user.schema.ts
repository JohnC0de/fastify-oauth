import { z } from "zod"

export const authInput = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})
