import { z } from "zod"
import { authInput } from "./user.schema.js"

const profileInfo = z.object({
  apiKey: z.string().cuid(),
  apiSecret: z.string().cuid()
})

export const profileInput = profileInfo.extend({
  name: z.string().min(3).max(20)
})

export const codeInput = authInput.extend({
  callbackUrl: z.string().url(),
  apiKey: z.string().cuid()
})

export const tokenInput = profileInfo.extend({
  code: z.string().cuid()
})

export const refreshTokenInput = profileInfo.extend({
  refreshToken: z.string().cuid()
})
