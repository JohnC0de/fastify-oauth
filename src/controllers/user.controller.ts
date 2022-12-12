import { verify } from "argon2"
import type { FastifyReply, FastifyRequest } from "fastify"
import { loginInput, registerInput } from "../schemas/user.schema.js"
import { signSync } from "../utils/auth/jwt.js"
import prisma from "../utils/database/prisma.js"

const handleInvalidCredentials = (reply: FastifyReply) => reply.status(401).send({ error: "Invalid credentials" })

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const { email, password } = loginInput.parse(request.body)

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return handleInvalidCredentials(reply)

  const isPasswordValid = await verify(user.password, password)
  if (!isPasswordValid) return handleInvalidCredentials(reply)

  const token = signSync({ id: user.id, email: user.email })

  return { token }
}

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const data = await registerInput.parseAsync(request.body)
  const { id, email } = await prisma.user.create({ data })
  const token = signSync({ id, email })
  return { email, token }
}
