import { fastify, type FastifyInstance } from "fastify"
import { usersData } from "../test/mock/user.js"

const server: FastifyInstance = fastify({
  logger: true
})

server.get("/users", async () => {
  return usersData
})

export default server
