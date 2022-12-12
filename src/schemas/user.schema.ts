import { hash } from "argon2"
import { z } from "zod"

export const loginInput = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export const registerInput = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .transform(async password => await hash(password))
})
