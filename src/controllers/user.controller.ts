import type { FastifyReply, FastifyRequest } from "fastify"
import { authInput } from "../schemas/user.schema.js"
import { handleError } from "../utils/errorHandler.js"

export function login(request: FastifyRequest, reply: FastifyReply) {
  try {
    const loginData = authInput.parse(request.body)
    // ...
    const token = "token"
    return { token }
  } catch (error) {
    handleError(reply, error)
  }
}

export function register(request: FastifyRequest, reply: FastifyReply) {
  try {
    const registerData = authInput.parse(request.body)
    // ...
    const token = "token"
    return { token }
  } catch (error) {
    handleError(reply, error)
  }
}
