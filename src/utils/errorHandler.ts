import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js"
import { FastifyReply } from "fastify"
import { ZodError } from "zod"
import logger from "./logger/pino.js"

export function handleError(reply: FastifyReply, error: any) {
  if (error instanceof ZodError) {
    const zodError = error.toString()
    logger.warn(`[Zod] ${zodError}`)
    return reply.code(422).send({ error: zodError })
  }
  if (error instanceof PrismaClientKnownRequestError) {
    const { code, message, name, cause, stack } = error
    logger.error(`[Prisma] ${code} ${message} ${name} ${cause} ${stack}`)
    return reply.code(400).send({ error: "Internal Server Error" })
  }
  if (error instanceof Error) {
    const errorMessage = JSON.stringify(error)
    logger.error(`[Error] ${errorMessage}`)
    return reply.code(500).send({ error: "Internal Server Error" })
  }
}
