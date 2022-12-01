import { fastify, type FastifyInstance } from "fastify"
import logger from "./utils/logger/pino.js"
import { usersData } from "../test/mock/user.js"

const server: FastifyInstance = fastify({ logger })

server.get("/users", async () => {
  return usersData
})

export default server
