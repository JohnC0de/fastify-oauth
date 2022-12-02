import { FastifyInstance } from "fastify"
import { login, register } from "../controllers/user.controller.js"

async function userRouter(fastify: FastifyInstance) {
  fastify.route({
    method: "POST",
    url: "/login",
    handler: login
  })

  fastify.route({
    method: "POST",
    url: "/register",
    handler: register
  })
}

export default userRouter
