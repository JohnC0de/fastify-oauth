import type { FastifyReply, FastifyRequest } from "fastify"
import { profileInput, codeInput, tokenInput, refreshTokenInput } from "../schemas/oauth.schema.js"
import { handleError } from "../utils/errorHandler.js"

export function createProfile(request: FastifyRequest, reply: FastifyReply) {
  try {
    const profileInputData = profileInput.parse(request.body)
    // ...
  } catch (error) {
    handleError(reply, error)
  }
}

export function createCode(request: FastifyRequest, reply: FastifyReply) {
  try {
    const codeInputData = codeInput.parse(request.body)
    // ...
  } catch (error) {
    handleError(reply, error)
  }
}
export function createToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    const tokenInputData = tokenInput.parse(request.body)

    // ...
  } catch (error) {
    handleError(reply, error)
  }
}

export function refreshToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    const refreshTokenInputData = refreshTokenInput.parse(request.body)

    // ...
  } catch (error) {
    handleError(reply, error)
  }
}
