import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js"
import { FastifyReply } from "fastify"
import { ZodError } from "zod"
import logger from "./logger/pino.js"

export function handleError(error: Error) {
  if (error instanceof ZodError) {
    const zodError = error.toString()
    return logger.warn(`[Zod] ${zodError}`)
  }
  if (error instanceof PrismaClientKnownRequestError) {
    const { code, message, name, cause, stack } = error
    return logger.error(`[Prisma] ${code} ${message} ${name} ${cause} ${stack}`)
  }
  if (error instanceof Error) {
    const errorMessage = JSON.stringify(error)
    return logger.error(`[Error] ${errorMessage}`)
  }
}

export function handleServerError(reply: FastifyReply, code: number, message: string) {
  reply.code(code).send({ error: message })
}
