import { FastifyInstance } from "fastify"
import { login, register } from "../controllers/user.controller.js"
import { authInput } from "../schemas/user.schema.js"

export async function userRoutes(fastify: FastifyInstance) {
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
